import autoRecordingImg1 from "./assets/img/AutoRecording1.png";
import autoRecordingImg2 from "./assets/img/AutoRecording2.png";
import autoRecordingImg3 from "./assets/img/AutoRecording3.png";
import therGeniusImg1 from "./assets/img/TherGeniusLogo.png";
import therGeniusImg2 from "./assets/img/TherGeniusGame.png";
import therGeniusImg3 from "./assets/img/TherGeniusGameRoom.png";
import therGeniusArch from "./assets/img/TherGeniusArch.png";

const projectsData = [
  {
    id: "microsoft-team-auto-recording-system",
    title: "Microsoft Team Auto Recording System",
    devType: "Web Development",
    description:
      "In response to the growing demand for streamlined meeting management within Microsoft Teams, AutoRecord Teams aims to provide a seamless solution for configuring and automating the recording of specific Teams Meetings. This application, designed to be deployed within a client's Microsoft 365 tenant, offers a user-friendly interface, deep integration with Microsoft Graph API, and adherence to Microsoft security standards.",
    githubUrl: "https://github.com/JeonJiw/AutoRecordTeams",
    youtubeUrl: "https://www.youtube.com/watch?v=your-video-id",
    architecture: "Frontend: React, Backend: Node.js, GraphQL",
    imgUrl: autoRecordingImg1,
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
    devType: "Web Development",
    description:
      "A web game inspired by the popular Genius show, with multiple puzzles and strategies built into the platform.",
    githubUrl: "https://github.com/THERgeniusGame",
    youtubeUrl: "https://www.youtube.com/watch?v=your-video-id",
    architecture: "Frontend: React, Backend: Node.js, Database: Firebase",
    imgUrl: therGeniusImg1,
  },
  {
    id: "safecam",
    title: "SafeCam",
    devType: "Web Development",
    description:
      "A project for monitoring theft in public places using a laptop and phone cameras for real-time monitoring.",
    githubUrl: "https://github.com/your-repo/safecam",
    youtubeUrl: "https://www.youtube.com/watch?v=your-video-id",
    architecture:
      "Frontend: React, Backend: NestJS, Database: PostgreSQL, Real-time: Socket.io",
    imgUrl: therGeniusImg2,
  },
  {
    id: "calory-calculator",
    title: "Calory Calculator",
    devType: "Android App Development",
    description:
      "An Android app to help users calculate and track their calorie intake on a daily basis.",
    githubUrl: "https://github.com/JhenyfferCristo/FoodCalorieExplorer",
    youtubeUrl: "https://www.youtube.com/watch?v=your-video-id",
    architecture:
      "Android app built using Kotlin, Room Database for data storage.",
    imgUrl: therGeniusImg3,
  },
];

export default projectsData;
