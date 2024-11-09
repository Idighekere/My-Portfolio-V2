type duration = {
  start: string;
  end: string;
};
export type ExperienceType = {

  id: string;
  company: string;
  desc: string;
  role: string;
  duration: duration;
  tasks: string[];
  logo?: string;
};
