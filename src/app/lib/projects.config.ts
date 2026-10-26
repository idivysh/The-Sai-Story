
export interface ProjectConfig {
  repo: string;
  featured: boolean;
  order: number;
  visible: boolean;
  title?: string;
  description?: string;
  image?: string;
}

const projectConfig: ProjectConfig[] = [
  // Add your repository names here.
  // The repo value must exactly match the GitHub repository name.
  {
    repo: "Secure-Messaging-Application-using-Blockchain-Technology",
    featured: true,
    order: 1,
    visible: true,
    title: "Secure Messaging Application using Blockchain Technology",
    description: "A secure and decentralized messaging application built using React Native (Expo) that leverages blockchain principles to ensure privacy, integrity, and tamper-proof communication.",
    image: "/assets/projects/smaubct.png",
  },

  {
    repo: "Age-And-Gender-Prediction-In-Facial-Images-Using-Deep-Learning",
    featured: true,
    order: 2,
    visible: true,
    title: "Age And Gender Prediction In Facial Images Using Deep Learning",
    description: "Predicts age group and gender from facial images using a CNN model. Uses OpenCV DNN for face detection. Built with TensorFlow/Keras and optionally integrated into a Django web app for real-time predictions.",
    image: "/assets/projects/aagpifiudl.png",
  },

  {
    repo: "Retail-Sales-Analytics",
    featured: true,
    order: 3,
    visible: true,
    title: "Retail Sales Analytics",
    description: "End-to-end retail sales analytics and customer insights dashboard using Python, FastAPI, and Next.js.",
    image: "/assets/projects/rsa.png",
  },

  {
    repo: "RTDS-Website",
    featured: true,
    order: 4,
    visible: true,
    title: "RTDS Website",
    description: "Professional website for Rasavika Typing & Digital Services, offering typing, data entry, resume creation, translation, and other digital services.",
    image: "/assets/projects/rtdsw.png",
  },
];

export default projectConfig;
