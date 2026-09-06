import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('homepage exposes the complete branded Italian page shell', async ({ page }) => {
  await expect(page).toHaveTitle(/EVHIL Tattoo Studio/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'it');
  await expect(page.getByRole('banner')).toBeVisible();
  await expect(page.getByRole('main')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1, name: /EVHIL.*Tattoo Studio/i })).toBeVisible();

  for (const id of [
    'studio',
    'lavori',
    'artisti',
    'eventi',
    'recensioni',
    'preventivo',
    'contatti',
  ]) {
    await expect(page.locator(`#${id}`)).toBeVisible();
  }
});

test('primary conversion remains available from the header', async ({ page }) => {
  const whatsappLink = page.getByRole('banner').getByRole('link', {
    name: /scrivici su whatsapp/i,
  });

  await expect(whatsappLink).toBeVisible();
  await expect(whatsappLink).toHaveAttribute('href', /^https:\/\/wa\.me\//);
});

test('homepage navigation uses real in-page destinations without exposing dead routes', async ({ page }) => {
  const homepageLinks = page.locator('.desktop-nav a[href^="#"]');
  const deadRouteLinks = page.locator(
    'a[href="/studio"], a[href="/artisti"], a[href="/portfolio"], a[href="/piercing"]',
  );

  await expect(homepageLinks).toHaveCount(4);
  await expect(deadRouteLinks).toHaveCount(0);
});

test('homepage keeps unverified people, work, events, and reviews explicitly temporary', async ({ page }) => {
  await expect(page.locator('[data-reference-work]')).toHaveCount(4);
  await expect(page.locator('[data-artist-placeholder]')).toHaveCount(2);
  await expect(page.locator('[data-event-placeholder]')).toHaveCount(1);
  await expect(page.locator('[data-review-placeholder]')).toHaveCount(2);
  await expect(page.getByText(/non è lavoro EVHIL/i).first()).toBeVisible();
  await expect(page.getByText(/identità da confermare/i).first()).toBeVisible();
  await expect(page.getByText(/recensione reale da verificare/i).first()).toBeVisible();
});

test('homepage publishes only confirmed contact information', async ({ page }) => {
  const contact = page.locator('#contatti');

  await expect(contact.getByText('EVHIL Tattoo Studio', { exact: true })).toBeVisible();
  await expect(contact.getByText('Via Monte Bianco 3', { exact: true })).toBeVisible();
  await expect(contact.getByText('Venegono Inferiore (VA)', { exact: true })).toBeVisible();
  await expect(contact.getByRole('link', { name: /375 553 6403/ })).toHaveAttribute(
    'href',
    'tel:+393755536403',
  );
  await expect(contact.getByText(/orari/i)).toHaveCount(0);
});

test('mobile navigation opens, traps document scroll, and closes with Escape', async ({ page }) => {
  test.skip((await page.viewportSize())!.width >= 1024, 'Mobile navigation behavior');

  const menuButton = page.locator('[data-menu-toggle]');

  await expect(menuButton).toHaveAccessibleName(/apri menu/i);
  await menuButton.click();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  await expect(menuButton).toHaveAccessibleName(/chiudi menu/i);
  await expect(page.getByRole('dialog', { name: /navigazione principale/i })).toBeVisible();
  await expect(page.locator('body')).toHaveClass(/menu-open/);

  await page.keyboard.press('Escape');
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await expect(menuButton).toHaveAccessibleName(/apri menu/i);
  await expect(page.getByRole('dialog', { name: /navigazione principale/i })).toBeHidden();
  await expect(page.locator('body')).not.toHaveClass(/menu-open/);
});

test('reduced motion keeps reveal content immediately available', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();

  const reveal = page.locator('[data-reveal]').first();
  await expect(reveal).toBeVisible();
  await expect(reveal).toHaveCSS('opacity', '1');
  await expect(reveal).toHaveCSS('transform', 'none');
});

test('homepage renders without horizontal overflow', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth >
      document.documentElement.clientWidth;
  });

  expect(hasHorizontalOverflow).toBe(false);
});

test('homepage loads and assigns the approved local typography roles', async ({ page }) => {
  await page.evaluate(() => document.fonts.ready);

  const typography = await page.evaluate(() => {
    const loadedFamilies = Array.from(document.fonts).map((face) => face.family);
    const familyFor = (selector: string) => {
      const element = document.querySelector(selector);

      if (!(element instanceof HTMLElement)) {
        throw new Error(`Missing typography audit target: ${selector}`);
      }

      return getComputedStyle(element).fontFamily;
    };

    return {
      loadedFamilies,
      primaryGraffiti: familyFor('.graffiti-word__letter'),
      secondaryGraffiti: familyFor('.graffiti-label'),
      structuralDisplay: familyFor('.home-hero__structural'),
      body: familyFor('body'),
      navigation: familyFor('.desktop-nav a'),
      cta: familyFor('.cta--primary'),
    };
  });

  expect(typography.loadedFamilies).toEqual(
    expect.arrayContaining([
      'EVHIL Graffiti',
      'EVHIL Handstyle',
      'Barlow Condensed',
      'Instrument Sans',
    ]),
  );
  expect(typography.primaryGraffiti).toContain('EVHIL Graffiti');
  expect(typography.secondaryGraffiti).toContain('EVHIL Handstyle');
  expect(typography.structuralDisplay).toContain('Barlow Condensed');
  expect(typography.body).toContain('Instrument Sans');
  expect(typography.navigation).toContain('Instrument Sans');
  expect(typography.cta).toContain('Instrument Sans');
});
