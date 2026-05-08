const revoloop = "/assets/projects/revoloop.png";
const flowershop = "/assets/projects/flowershop.png";
const freelancelink = "/assets/projects/freelancelink.png";
const mitramuda = "/assets/projects/mitramuda2025.png";

const gdev127 = "/assets/projects/gdev-b.indo127.png";
const gdev162 = "/assets/projects/gdev-pp162.png";
const gdev293 = "/assets/projects/gdev-mtk293.png";
const gdev244 = "/assets/projects/gdev-mtk244.png";
const gdev54 = "/assets/projects/gdev-mtk54.png";
const gdev276 = "/assets/projects/gdev-ipas276.png";
const gdev94 = "/assets/projects/gdev-ipas94.png";
const gdev199 = "/assets/projects/gdev-bindo199.png";

export const projects = [
  {
    id: 1,
    slug: "portfolio-website",
    name: {
      id: "REVOLOOP",
      en: "REVOLOOP",
    },
    description: {
      id: "Website edukasi pengelolaan sampah dengan desain menarik dan animasi interaktif",
      en: "Waste management education website with attractive design and interactive animations",
    },
    category: "Web",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: revoloop,
    demo: "https://www.revoloop.web.id/",
    github: "#",
  },
  {
    id: 2,
    slug: "flower-shop",
    name: {
      id: "Website Toko Bunga",
      en: "Flower Shop Website",
    },
    description: {
      id: "Website e-commerce penjualan bunga lengkap dengan dashboard admin",
      en: "Flower e-commerce website with full admin dashboard",
    },
    category: "Web",
    tech: ["React", "Tailwind", "Laravel", "MySQL"],
    image: flowershop,
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    slug: "freelancelink",
    name: {
      id: "FreelanceLink",
      en: "FreelanceLink",
    },
    description: {
      id: "Portal freelancer untuk mencari dan menawarkan jasa profesional dengan sistem ulasan dan penilaian",
      en: "Freelancer portal to find and offer professional services with review and rating system",
    },
    category: "Web",
    tech: ["Next JS", "Tailwind", "PostgreSQL"],
    image: freelancelink,
    demo: "https://www.freelancelink.web.id/",
    github: "#",
  },
  {
    id: 4,
    slug: "mitra-muda",
    name: {
      id: "Mitra Muda",
      en: "Mitra Muda",
    },
    description: {
      id: "Platform digitalisasi dan kolaborasi UMKM",
      en: "Digitalization and collaboration platform for MSMEs",
    },
    category: "Web",
    tech: ["React JS", "Tailwind", "Laravel"],
    image: mitramuda,
    demo: "#",
    github: "#",
  },

  {
    id: 101,
    slug: "game-bindo-1-bab-1",
    name: {
      id: "Game Bahasa Indonesia Kelas 1",
      en: "Indonesian Language Game Grade 1",
    },
    description: {
      id: "Game edukasi interaktif untuk pembelajaran Bahasa Indonesia kelas 1",
      en: "Interactive educational game for grade 1 Indonesian language learning",
    },
    category: "Game",
    tech: ["GDevelop 5", "Figma"],
    image: gdev127,
    demo: "https://gd.games/juki25/b-indonesia-kelas-1-bab-1",
    github: "#",
  },
  {
    id: 102,
    slug: "game-pancasila-1-bab-4",
    name: {
      id: "Game Pendidikan Pancasila",
      en: "Pancasila Education Game",
    },
    description: {
      id: "Game edukasi interaktif Pendidikan Pancasila kelas 1",
      en: "Interactive educational game for Pancasila subject",
    },
    category: "Game",
    tech: ["GDevelop 5", "Figma"],
    image: gdev162,
    demo: "https://gd.games/juki25/p--pancasila-kelas-1-bab-4",
    github: "#",
  },
  {
    id: 103,
    slug: "game-math-6-bab-4",
    name: {
      id: "Game Matematika Kelas 6",
      en: "Math Game Grade 6",
    },
    description: {
      id: "Game interaktif matematika untuk siswa kelas 6",
      en: "Interactive math learning game for grade 6 students",
    },
    category: "Game",
    tech: ["GDevelop 5", "Figma"],
    image: gdev293,
    demo: "https://gd.games/juki25/mtk-kelas-6-bab-4-2",
    github: "#",
  },
  {
    id: 104,
    name: {
      id: "Game Matematika Kelas 5",
      en: "Math Game Grade 5",
    },
    description: {
      id: "Game Edukasi Interaktif Matematika Kelas 5 Bab 7",
      en: "Interactive math learning game for grade 5 students",
    },
    category: "Game",
    tech: ["GDevelop 5", "Figma"],
    image: gdev244,
    demo: "https://gd.games/juki25/matematika-kelas-5-bab-7",
    github: "#",
  },
  {
    id: 105,
    name: {
      id: "Game Matematika Kelas 3",
      en: "Math Game Grade 3",
    },
    description: {
      id: "Game Edukasi Interaktif Matematika Kelas 3 Bab 1",
      en: "Interactive math learning game for grade 3 students",
    },
    category: "Game",
    tech: ["GDevelop 5", "Figma"],
    image: gdev54,
    demo: "https://gd.games/juki25/game-matematika",
    github: "#",
  },
  {
    id: 106,
    name: {
      id: "Game IPAS Kelas 5",
      en: "Soscial Science Game Grade 5",
    },
    description: {
      id: "Game Edukasi Interaktif IPAS Kelas 5 Bab 3",
      en: "Interactive science and social science learning games for grade 5 students.",
    },
    category: "Game",
    tech: ["GDevelop 5", "Figma"],
    image: gdev276,
    demo: "https://gd.games/juki25/ipas-kls-5-bab-3",
    github: "#",
  },
  {
    id: 107,
    name: {
      id: "Game IPAS Kelas 3",
      en: " Science Game Grade 3",
    },
    description: {
      id: "Game Edukasi Interaktif IPAS Kelas 3 Bab 4",
      en: "Interactive science and social science learning games for grade 3 students.",
    },
    category: "Game",
    tech: ["GDevelop 5", "Figma"],
    image: gdev94,
    demo: "https://gd.games/juki25/berkenalan-dengan-energi",
    github: "#",
  },
  {
    id: 108,
    name: {
      id: "Game Bahasa Indonesia Kelas 4",
      en: "Indonesian Language Game Grade 1",
    },
    description: {
      id: "Game Edukasi Interaktif Bahasa Indonesia Kelas 4 Bab 1",
      en: "Interactive educational game for grade 4 Indonesian language learning",
    },
    category: "Game",
    tech: ["GDevelop 5", "Figma"],
    image: gdev199,
    demo: "https://gd.games/juki25/b-indonesia-kelas-4-bab-1",
    github: "#",
  },
];