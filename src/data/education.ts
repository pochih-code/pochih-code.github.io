export interface Education {
  year: string;
  institution: string;
  degree?: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "September.2024 - Present",
    institution: "National Yang Ming Chiao Tung University | Taiwan",
    degree: "Bachelor of Science in Information Management and Finance",
  },
  {
    year: "September.2021 - July.2024",
    institution: "Taipei Municipal Zhong-Lun High School | Taiwan",
    degree: "General Subjects",
  },
];
