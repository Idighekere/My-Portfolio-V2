type duration = {
  start: string;
  end: string;
};
export type experienceType = {
  id: string;
  company: string;
  desc: string;
  role: string;
  duration: duration;
  tasks: string[];
  logo?: string;
};
export const experience: experienceType[] = [
  {
    id: "1",
    company: "NPFL Update",
    desc: "Lorem ",
    role: "Wordpress Developer",
    duration: {
      start: "January 2022",
      end: "Present",
    },
    tasks: [
      "Created a fully functional and visually appealing sports website using WordPress, tailored to the organization’s needs.",
      "Regularly update and manage the website to ensure smooth operation",
      "Identify and resolve any issues that arise, from plugin conflicts to server errors, ensuring minimal downtime.",
    ],
    logo: "",
  },
  {
    id: "2",
    company: "Google",
    desc: "Lorem ",
    role: "Frontend Developer",
    duration: {
      start: "January 2022",
      end: "Present",
    },
    tasks: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      " Minus, voluptatem a rerum corporis fugit dolores!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    logo: "",
  },
  {
    id: "3",
    company: "Waga",
    desc: "Lorem ",
    role: "Backend Developer",
    duration: {
      start: "March 2024",
      end: "June 2024",
    },
    tasks: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      " Minus, voluptatem a rerum corporis fugit dolores!",
    ],
    logo: "",
  },
];
