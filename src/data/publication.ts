export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "",
    title: "Evaluating the Performance of Open-Vocabulary Object Detection in Low-quality Image",
    authors: "Po-Chih Wu, Chia-Chi Tsai",
    paperUrl: "",
    codeUrl: "https://github.com/pochih-code/Low-quality-image-dataset",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: " In this study, we aim to evaluate the performance of existing models on open-vocabulary object detection tasks under low-quality image conditions.",
    imageUrl:
      "https://storage.googleapis.com/kaggle-datasets-images/7424982/11820620/ab92f283a1415c330b46a0458dc66d0e/dataset-cover.png?t=2025-05-17-13-30-52",
    award: "",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
