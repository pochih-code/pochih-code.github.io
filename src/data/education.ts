export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "Sep 2024 - Present",
    institution: "National Yang Ming Chiao Tung University",
    degree: "Department of Information Management and Finance",
  // advisor: "Prof. Sarah Johnson",
  },
];
