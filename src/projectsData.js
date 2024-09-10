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
      "A system to automate recording in Microsoft Teams meetings. Developed using React, Node.js, and integrated with Microsoft Graph API.",
    githubUrl: "https://github.com/JeonJiw/AutoRecordTeams",
    youtubeUrl: "https://www.youtube.com/watch?v=your-video-id",
    architecture: "Frontend: React, Backend: Node.js, Database: MongoDB",
    imgUrl: autoRecordingImg1,
  },
  {
    id: "ther-genius-game",
    title: "Ther Genius Game",
    devType: "Web Development",
    description:
      "A web game inspired by the popular Genius show, with multiple puzzles and strategies built into the platform.",
    githubUrl: "https://github.com/your-repo/the-genius-game",
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
