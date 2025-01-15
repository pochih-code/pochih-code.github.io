export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "July.2024 - Present",
    title: "Artificial Intelligence Talent Cultivation Program (AITC)",
    company: "AI System Lab",
    description:
      "Computer Vision, Machine Learning, AI-based Vision Application",
    advisor: "Asst. Prof. Chia-Chi Tsai",
  },
];
