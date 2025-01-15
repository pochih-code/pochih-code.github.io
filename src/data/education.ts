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
    institution: "National Yang Ming Chiao Tung University | Hsinchu, Taiwan",
    degree: "Bachelor of Science in Information Management and Finance | GPA: 4.12/4.3 (Overall/Scale)",
  },
  {
    year: "September.2021 - July.2024",
    institution: "Taipei Municipal Zhong-Lun High School | Taipei, Taiwan",
    degree: "GPA: 81.10/100 (Overall/Scale)",
  },
];
