export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Po-Chih Wu",
  title: "A Undergraduate Student",
  institution: "National Yang Ming Chiao Tung University",
  // Note that links work in the description
  description: "Test",
  // I am Po-Chih Wu, a first-year undergraduate student in Information Management and Finance at National Yang Ming Chiao Tung University. I am conducting undergraduate research about machine learning, advised by Chia-Chi Tsai in AI System Lab, Department of Electrical Engineering, National Cheng Kung University. My research interests focus on computer vision.
  email: "pochihwu1118@gmail.com",
  imageUrl:
    "https://github.com/pochih-code/pochih-code.github.io/blob/main/src/data/miku.png?raw=true",
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "pochih-code",
  // linkedinUsername: "janesmith",
  twitterUsername: "puchi1118",
  blogUrl: "https://pochih-code.github.io/",
  // cvUrl: "https://",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
