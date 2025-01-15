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
    title: "Undergaduate research",
    company: "AI System Lab",
    advisor: "with <link href=\"https://www.ee.ncku.edu.tw/teacher/index2.php?teacher_id=170\" rel=\"Asst. Prof. Chia-Chi Tsai\" />",
    description:
    "Artificial Intelligence Talent Cultivation Program (AITC)",
  },
];
