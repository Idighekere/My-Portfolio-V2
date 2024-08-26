export type projectType = {
  title: string;
  stacks: string[];
  codeLink?: string | null;
  liveLink: string;
  isFeatured?: boolean;
  imageUrl: string;
  desc: string[];
  id: string;
  tasks?: string[];
  category?: string;
  slug: string;
  images: string[];

  highlights?: string[];
  challenges?: string[];
  solutions?: string[];
  conclusion?: string;
};

export const projectList: projectType[] = [
  {
    id: "1",
    slug: "will-be-there-1",
    title: "Will be There",
    desc: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem a rerum corporis fugit dolores!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem a rerum corporis fugit dolores!",
    ],
    imageUrl: "/projects/willbethere.netlify.app.jpeg",
    images: ["", ""],
    isFeatured: true,
    stacks: ["ReactJS", "Tailwind", "HTML", "CSS"],
    liveLink: "https://willbethere.netlify.app",
    codeLink: "https://willbethere.netlify.app",
    tasks: [
      "Authentication and Authorization ",
      "User can cretaed an dupdate event",
    ],
    category: "web development",
    challenges: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    solutions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    highlights: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    conclusion:
      "In conclusionLorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "2",
    slug: "will-be-there-2",
    title: "Will be There",
    desc: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem a rerum corporis fugit dolores!",
      "",
    ],
    imageUrl: "/projects/willbethere.netlify.app.jpeg",
    images: ["", ""],
    isFeatured: true,
    stacks: ["ReactJS", "Tailwind"],
    liveLink: "https://willbethere.netlify.app",
    codeLink: "https://willbethere.netlify.app",
    tasks: [],
    category: "web development",
    challenges: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    solutions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    highlights: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    conclusion:
      "In conclusionLorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "3",
    slug: "will-be-there-3",
    title: "Will be There ",
    desc: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem a rerum corporis fugit dolores!",
      "",
    ],
    imageUrl: "/projects/willbethere.netlify.app.jpeg",
    images: ["", ""],
    isFeatured: true,
    stacks: ["ReactJS", "Tailwind"],
    liveLink: "https://willbethere.netlify.app",
    codeLink: "https://willbethere.netlify.app",
    tasks: [],
    category: "web development",
    challenges: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    solutions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    highlights: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    conclusion:
      "In conclusionLorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "4",
    slug: "will-be-there-4",
    title: "Will be There",
    desc: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem a rerum corporis fugit dolores!",
      "",
    ],
    imageUrl: "/projects/willbethere.netlify.app.jpeg",
    images: ["", ""],
    isFeatured: false,
    stacks: ["ReactJS", "Tailwind"],
    liveLink: "https://willbethere.netlify.app",
    codeLink: "https://willbethere.netlify.app",
    tasks: [],
    category: "web development",
    challenges: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    solutions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    highlights: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    conclusion:
      "In conclusionLorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "5",
    slug: "will-be-there-5",
    title: "Will be There",
    desc: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem a rerum corporis fugit dolores!",
      "",
    ],
    imageUrl: "/projects/willbethere.netlify.app.jpeg",
    images: ["", ""],
    isFeatured: false,
    stacks: ["ReactJS", "Tailwind"],
    liveLink: "https://willbethere.netlify.app",
    codeLink: "https://willbethere.netlify.app",
    tasks: [],
    category: "wordpress-design",
    challenges: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    solutions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    highlights: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    conclusion:
      "In conclusionLorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "6",
    slug: "npfl-update-6",
    title: "Sport Blog",
    desc: ["A sport website for a sport brand, NPFL Updates", ""],
    imageUrl: "/projects/npflupdates.com.jpeg",
    images: ["", ""],
    isFeatured: false,
    stacks: ["Wordpress"],
    liveLink: "https://www.npflupdates.com",
    // codeLink: "https://willbethere.netlify.app",

    tasks: [],
    category: "wordpress-design",
    challenges: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    solutions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    highlights: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    conclusion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];