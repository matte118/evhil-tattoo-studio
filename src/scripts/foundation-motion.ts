import { animate, inView, scroll, stagger } from 'motion';

export function initFoundationMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    return;
  }

  document.documentElement.classList.add('motion-ready');

  const cleanup: Array<() => void> = [];
  const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

  if (revealElements.length > 0) {
    cleanup.push(
      inView(
        revealElements,
        (element) => {
          animate(
            element,
            {
              opacity: [0, 1],
              transform: ['translateY(1.5rem)', 'none'],
            },
            {
              duration: 0.72,
              ease: [0.16, 1, 0.3, 1],
            },
          );
        },
        { amount: 0.18, margin: '0px 0px -8% 0px' },
      ),
    );
  }

  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>('[data-stagger-item]');

    if (items.length === 0) {
      return;
    }

    cleanup.push(
      inView(
        group,
        () => {
          animate(
            items,
            { opacity: [0, 1], transform: ['translateY(1.25rem)', 'none'] },
            {
              duration: 0.58,
              delay: stagger(0.07),
              ease: [0.16, 1, 0.3, 1],
            },
          );
        },
        { amount: 0.12, margin: '0px 0px -6% 0px' },
      ),
    );
  });

  const graffitiMarks = Array.from(
    document.querySelectorAll<HTMLElement>('[data-graffiti-reveal]'),
  );

  const [heroGraffiti, ...sectionGraffiti] = graffitiMarks;

  if (heroGraffiti) {
    animate(
      heroGraffiti,
      {
        opacity: [0, 1],
        clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
        transform: ['translateX(-1rem)', 'none'],
      },
      { duration: 0.68, delay: 0.12, ease: [0.16, 1, 0.3, 1] },
    );
  }

  if (sectionGraffiti.length > 0) {
    sectionGraffiti.forEach((element) => {
      const trigger = element.parentElement ?? element;

      cleanup.push(
        inView(
          trigger,
          () => {
          animate(
            element,
            {
              opacity: [0, 1],
              clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
              transform: ['translateX(-1rem)', 'none'],
            },
            { duration: 0.68, ease: [0.16, 1, 0.3, 1] },
          );
          },
          { amount: 0.2 },
        ),
      );
    });
  }

  document.querySelectorAll<HTMLElement>('[data-parallax-frame]').forEach((frame) => {
    const visual = frame.querySelector<HTMLElement>('[data-parallax]');

    if (!visual) {
      return;
    }

    const animation = animate(
      visual,
      { y: ['-3%', '3%'] },
      { ease: 'linear' },
    );

    cleanup.push(
      scroll(animation, {
        target: frame,
        offset: ['start end', 'end start'],
      }),
    );
  });

  window.addEventListener(
    'pagehide',
    () => {
      cleanup.forEach((stop) => stop());
    },
    { once: true },
  );
}
