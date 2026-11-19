import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Metodika',
      href: getPermalink('/#metodika'),
    },
    {
      text: 'Folyamat és árak',
      href: getPermalink('/#folyamat'),
    },
    {
      text: 'CRM Minitréning',
      href: getPermalink('/#minitrening'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Kapcsolat',
      href: getPermalink('/#kapcsolat'),
    },
  ],
  actions: [
    {
      text: 'Díjmentes konzultáció',
      href: getPermalink('/#kapcsolat'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Megoldások',
      links: [
        { text: 'Piackutatás és pozicionálás', href: getPermalink('/#metodika') },
        { text: 'Leadgeneráló kampányok', href: getPermalink('/#metodika') },
        { text: 'CRM és automatizált utánkövetés', href: getPermalink('/#minitrening') },
        { text: 'Együttműködés és árak', href: getPermalink('/#folyamat') },
      ],
    },
    {
      title: 'Tudásanyagok',
      links: [
        { text: 'Szakmai blog', href: getBlogPermalink() },
        { text: 'Díjmentes CRM minitréning', href: getPermalink('/#minitrening') },
      ],
    },
    {
      title: 'Kapcsolat',
      links: [
        { text: 'Díjmentes konzultáció kérése', href: getPermalink('/#kapcsolat') },
        { text: 'Tulok Imre – Velnaxa', href: 'https://velnaxa.hu' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Általános Szerződési Feltételek', href: getPermalink('/terms') },
    { text: 'Adatkezelési tájékoztató', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © 2026 <strong>Tulok Imre</strong> (Leadgenerálás.eu) · Minden jog fenntartva.
  `,
};
