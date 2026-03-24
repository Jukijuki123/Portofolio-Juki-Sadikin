import earthline from "../assets/images/projects/earthline.png";
import flowershop from "../assets/images/projects/flower-shop.png";

import gdev127 from "../assets/images/projects/gdev-b.indo127.png";
import gdev162 from "../assets/images/projects/gdev-pp162.png";
import gdev293 from "../assets/images/projects/gdev-mtk293.png";
import gdev244 from "../assets/images/projects/gdev-mtk244.png";
import gdev54 from "../assets/images/projects/gdev-mtk54.png";
import gdev276 from "../assets/images/projects/gdev-ipas276.png";
import gdev94 from "../assets/images/projects/gdev-ipas94.png";
import gdev199 from "../assets/images/projects/gdev-bindo199.png";

export const projects = [
  {
    id: 1,
    slug: "portfolio-website",
    featured: true,
    name: {
      id: "Website Portfolio",
      en: "Portfolio Website",
    },
    description: {
      id: "Website portfolio modern dengan desain minimalis dan animasi interaktif",
      en: "Modern portfolio website with clean design and interactive animations",
    },
    category: "Web",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: earthline,
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    slug: "flower-shop",
    featured: true,
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
    demo: "https://demo.com",
    github: "https://github.com",
  },

  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    github: "https://github.com",
  },
  {
    id: 7,
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
    github: "https://github.com",
  },
  {
    id: 8,
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
    github: "https://github.com",
  },
  {
    id: 10,
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
    github: "https://github.com",
  },
  {
    id: 11,
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
    github: "https://github.com",
  },
];