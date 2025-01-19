export interface Experience {
  date: string;
  title: string;
  company?: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "July.2024 - Present",
    title: "Undergaduate research",
    company: "NCKU AI System Lab",
    advisor: "with Asst. Prof. Chia-Chi Tsai",
    description:
    "Artificial Intelligence Talent Cultivation Program (AITC)",
  },
  {
    date: "July.2024",
    title: "Taipei City Mayor Award",
    company: "Taipei City Government",
    description:
    "Highest Distinction, Top 1% Graduates",
  },
];
