export interface Education {
  year: string;
  institution: string;
  location: string;
  GPA: string;
  degree?: string;
  department?: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "September.2024 - Present",
    institution: "National Yang Ming Chiao Tung University",
    department: "Department of Information Management and Finance",
    degree: "Bachelor of Science",
    GPA: "GPA: 4.12/4.3 (Overall/Scale)",
    location: "Hsinchu, Taiwan",
  },
  {
    year: "September.2021 - July.2024",
    institution: "Taipei Municipal Zhong-Lun High School",
    GPA: "GPA: 81.10/100 (Overall/Scale)",
    location: "Taipei, Taiwan"
  },
];
