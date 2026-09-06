export const business = {
  name: 'EVHIL Tattoo Studio',
  street: 'Via Monte Bianco 3',
  locality: 'Venegono Inferiore (VA)',
  country: 'Italia',
  phoneDisplay: '375 553 6403',
  phoneHref: 'tel:+393755536403',
  whatsappUrl: 'https://wa.me/393755536403',
} as const;

export const homepageArtists = [
  {
    slot: 'Artista 01',
    status: 'Identità da confermare',
    specialty: 'Specialità da confermare',
  },
  {
    slot: 'Artista 02',
    status: 'Identità da confermare',
    specialty: 'Specialità da confermare',
  },
] as const;

export const homepageReviews = [
  { label: 'Recensione reale da verificare', source: 'Fonte e autore da confermare' },
  { label: 'Recensione reale da verificare', source: 'Fonte e autore da confermare' },
] as const;

export const homepageEvent = {
  title: 'Agenda in preparazione',
  mobileTitle: 'Agenda in arrivo',
  description: 'Spazio pronto per flash day, guest artist o appuntamenti speciali dello studio.',
  status: 'Nessun evento o data pubblicati',
} as const;

export const quoteSteps = [
  'Idea e reference',
  'Confronto',
  'Preventivo',
  'Deposito',
  'Appuntamento',
] as const;
