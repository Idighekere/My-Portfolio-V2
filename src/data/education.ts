type duration = {
  start: string;
  end: string;
};
export type educationType = {
  id: string;
  degree: string;
  desc: string;
  school: string;
  duration: duration;
  status?: "completed" | "pursuing";
  //   tasks: string[];
  logo?: string;
};
export const education: educationType[] = [
  {
    id: "1",
    degree: "Bachelor of Engineering",
    desc: "Studying computer engineering ",
    school: "University of Uyo",
    duration: {
      start: "January 2022",
      end: "Present",
    },
    status: "pursuing",
    logo: "",
  },
  {
    id: "2",
    degree: "West African Secondary School Certificate",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    school: "African Christian Sec. Sch. Usung Atiat",
    duration: {
      start: "September 2018",
      end: "December 2021",
    },
    status: "pursuing",
    logo: "",
  },
  {
    id: "3",
    degree: "Basic Education Certificate Examination",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    school: "Federal Government College, Ikot Ekpene, AKS, Nigeria",
    duration: {
      start: "September 2015",
      end: "July 2018",
    },
    status: "pursuing",
    logo: "",
  },
];
