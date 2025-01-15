import autoRecordingImg1 from "./assets/img/AutoRecording1.png";
import autoRecordingImg2 from "./assets/img/AutoRecording2.png";
import autoRecordingImg3 from "./assets/img/AutoRecording3.png";
import therGeniusImg1 from "./assets/img/TherGeniusLogo.png";
import therGeniusImg2 from "./assets/img/TherGeniusGame.png";
import therGeniusImg3 from "./assets/img/TherGeniusGameRoom.png";
import therGeniusArch from "./assets/img/TherGeniusArch.png";
import safeCamActivity from "./assets/img/SafeCam-Activities.png";
import safeCamMonitoring from "./assets/img/SafeCam-Monitoring.png";
import safeCamDevices from "./assets/img/SafeCam-Devices.png";
import safeCamMain from "./assets/img/SafeCam-Main.png";
import safeCamMain2 from "./assets/img/SafeCam-Main2.png";

const projectsData = [
  {
    id: "safecam",
    title: "SafeCam",
    subtitle: "Real-time Theft Monitoring System",
    devType: "Web Development",
    description:
      "A project for monitoring theft in public places using a laptop and phone cameras for real-time monitoring.",
    githubUrl: "https://github.com/JeonJiw/SafeCam",
    youtubeUrl: "https://www.youtube.com/watch?v=your-video-id",
    techStack: ["React", "NestJS", "Python", "YOLO", "WebSocket"], // Ensure names are properly capitalized
    architecture:
      "Frontend: React, Backend: NestJS, Database: PostgreSQL, Real-time: Socket.io",
    imgUrl: [
      safeCamMain,
      safeCamMain2,
      safeCamActivity,
      safeCamMonitoring,
      safeCamDevices,
    ],
  },
  {
    id: "microsoft-team-auto-recording-system",
    title: "Microsoft Team Auto Recording System",
    subtitle: "Auto Recording App",
    devType: "Web Development",
    description:
      "In response to the growing demand for streamlined meeting management within Microsoft Teams, AutoRecord Teams aims to provide a seamless solution for configuring and automating the recording of specific Teams Meetings. This application, designed to be deployed within a client's Microsoft 365 tenant, offers a user-friendly interface, deep integration with Microsoft Graph API, and adherence to Microsoft security standards.",
    githubUrl: "https://github.com/JeonJiw/AutoRecordTeams",
    youtubeUrl: "https://www.youtube.com/watch?v=your-video-id",
    techStack: ["React", "GraphQL", "NodeJS"], // Ensure names are properly capitalized
    architecture: "Frontend: React, Backend: Node.js, GraphQL",
    imgUrl: [autoRecordingImg1, autoRecordingImg2, autoRecordingImg3],
    features: [
      "User-friendly interface within Microsoft Teams to configure meeting recording settings",
      "Integration with Microsoft Graph API to fetch all meetings within the client's tenant",
      "Programmatically enable automatic recording settings for all meetings in the client's tenant using the Teams API",
      "Resource-efficient and scalable deployment within the client's Microsoft 365 environment",
    ],
  },
  {
    id: "ther-genius-game",
    title: "Ther Genius Game",
    subtitle: "Interactive Web Game Inspired by the Genius Show",
    devType: "Web Development",
    description:
      "A web game inspired by the popular Genius show, with multiple puzzles and strategies built into the platform.",
    githubUrl: "https://github.com/THERgeniusGame",
    youtubeUrl: "https://www.youtube.com/watch?v=your-video-id",
    techStack: ["React", "NodeJS", "JavaScript", "MySQL", "Amazon", "GitHub"], // Ensure names are properly capitalized
    architecture: "Frontend: React, Backend: Node.js, Database: Firebase",
    imgUrl: [therGeniusImg1, therGeniusImg2, therGeniusImg3, therGeniusArch],
  },

  {
    id: "calory-calculator",
    title: "Calory Calculator",
    subtitle: "Android App for Calorie Tracking",
    devType: "Android App Development",
    description:
      "An Android app to help users calculate and track their calorie intake on a daily basis.",
    githubUrl: "https://github.com/JhenyfferCristo/FoodCalorieExplorer",
    youtubeUrl: "https://www.youtube.com/watch?v=your-video-id",
    techStack: ["Kotlin"], // Ensure names are properly capitalized
    architecture:
      "Android app built using Kotlin, Room Database for data storage.",
    imgUrl: [therGeniusImg3],
  },
];

export default projectsData;
