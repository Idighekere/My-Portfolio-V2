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
    desc: "Studying computer engineering. Currently in the second year of the degree.",
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
    degree: "WASSCE & NECO",
    desc: "SSS1-SSS3: Senior school certificate obtained. (West African Secondary School Certificate).",
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
    degree: "BECE",
    desc: "JSS1-JSS3: Junior Secondary School certificate obtained (Basic Education Certificate Examination)",
    school: "Federal Government College, Ikot Ekpene, AKS, Nigeria",
    duration: {
      start: "September 2015",
      end: "July 2018",
    },
    status: "pursuing",
    logo: "",
  },
];
