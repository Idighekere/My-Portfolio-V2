type duration = {
  start: string;
  end: string;
};
type experience = {
  company: string;
  desc: string;
  duration: duration;
  tasks: string[];
  logo?: string;
};
export const experience: experience[] = [
  {
    company: "Google",
    desc: "Lorem ",
    duration: {
      start: "January 2022",
      end: "Present",
    },
    tasks: [""],
    logo: "",
  },
  {
    company: "Waga",
    desc: "Lorem ",
    duration: {
      start: "March 2024",
      end: "June 2024",
    },
    tasks: [""],
    logo: "",
  },
];
