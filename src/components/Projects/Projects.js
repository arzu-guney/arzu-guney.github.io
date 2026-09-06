import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Projects.module.css";
import quickCuisineImage from "../../assets/images/projects/quickCuisineImage.png";
import whenWomenUnderstandImage from "../../assets/images/projects/whenWomenUnderstandImage.png";
import travelBrewImage from "../../assets/images/projects/travelBrewImage.png";
import triviaQuestImage from "../../assets/images/projects/triviaQuestImage.png";
import wwCodeImage from "../../assets/images/projects/wwCodeImage.png";
import goodnessOfNatureImage from "../../assets/images/projects/goodnessOfNatureImage.png";
import habitMasterImage from "../../assets/images/projects/habitMasterImage.png"; 
import chirpXImage from "../../assets/images/projects/chirpXImage.png"; 
import innoaiTS from "../../assets/images/projects/innoaiTS.png";
import knittmates from "../../assets/images/projects/knittmates.png";
import safeaiAcademyImage from "../../assets/images/projects/safeaiAcademyImage.png";
import devprep from "../../assets/images/projects/devprep.png";
import mindGardenImg from "../../assets/images/mind-garden-preview.png";

const projects = [
  {
    title: "MindGarden: AI-Powered Mental Health Support Agents",
    description:
      "Built during The Agent Development Kit Hackathon with Google Cloud. A modular AI-powered multi-agent system designed to deliver scalable, real-time mental health support. From risk detection to resource matching and peer support, MindGarden operates with safety and care at its core.",
    image: mindGardenImg,    
    githubLink:"https://github.com/smart-stacks/mindgarden",
    liveLink: "https://mindgarden-app-6xntrakg7q-nw.a.run.app/chat", 
    videoLink: "https://youtu.be/7wsr1mDZekg"
  },
  {
    title: "Devprep",
    description:
      "Web app built to help developers prepare for technical interviews. It features categorised questions, concise answers, role-based filters (Junior to Lead), and mini quizzes with real-time scoring.",
    image: devprep,    
    githubLink:"https://github.com/arzu-guney/devprep",
    liveLink: "https://arzu-guney.github.io/devprep/", 
    videoLink: "https://www.youtube.com/watch?v=9R6JbeWdJGA"
  },
  {
    title: "Safeai Academy",
    description:
      "Women in AI Safety Hackathon Project: An interactive AI Safety learning platform featuring educational modules, scenario-based simulations, and quizzes.",
    image: safeaiAcademyImage,    
    githubLink:"https://github.com/arzu-guney/safeai-academy",
    liveLink: "https://arzu-guney.github.io/safeai-academy/", 
    videoLink: "https://youtu.be/qiOpm2WbYPo"
  },
  {
    title: "KnittMates",
    description:
      "Your personalized knitting calculator & guide! KnittMates is a web application that helps knitters calculate the number of stitches and rows needed for their projects. It also provides a guide for knitting abbreviations and terms, making it easier for users to understand patterns.",
    image: knittmates,    
    liveLink: "https://knittmates.com/",    
  },
  {
    title: "InnoAl Tech Solution",
    description:
      "InnoAl Tech Solution provides cutting-edge solutions in web design, AI, database development, and software innovation. The website is designed to showcase the company's services and projects, with a clean and professional look.",
    image: innoaiTS,    
    liveLink: "https://innoaitechsolution.com/",    
  },
  {
    title: "QuickCuisine - Fast and Delicious Recipes",
    description:
      "QuickCuisine is a React-based web application designed to provide a fast, efficient way to explore and share delicious recipes. This application utilizes a service worker to enhance performance through API caching and offers a dark mode feature for a customizable user experience.",
    image: quickCuisineImage,
    githubLink: "https://github.com/arzu-guney/react-recipe-app",
    liveLink: "https://equickcuisinerecipe.netlify.app/",
    videoLink: "https://youtu.be/xQQ9HRjpgSA",
  },
  {
    title: "When Women Understand",
    description:
      "A website initiative aimed at helping women recognize both physical violence and psychological abuse, empowering them to protect themselves. This project underscores the silent and hidden nature of psychological abuse, making it easy for women to recognize.",
    image: whenWomenUnderstandImage,
    githubLink: "https://github.com/arzu-guney/when-women-understand",
    liveLink: "https://when-women-understand.netlify.app/",
    videoLink: "https://youtu.be/XOcTClDCNPI",
  },
  {
    title: "TravelBrew",
    description:
      "A mobile app to assist travellers in discovering the best coffee and cosy spots while visiting new cities. It highlights venues with essential needs like coffee, seating areas, and restrooms.",
    image: travelBrewImage,
    githubLink: "https://github.com/arzu-guney/travel-brew",
    videoLink: "https://youtu.be/A1DmeX5OwPI",
  },
  {
    title: "React TriviaQuest Challenge",
    description:
      "An interactive trivia quiz application developed using React. It provides a fun experience to test general knowledge.",
    image: triviaQuestImage,
    githubLink: "https://github.com/arzu-guney/react-triviaquest-challenge",
    liveLink: "https://react-triviaquest-challenge.netlify.app/",
    videoLink: "https://youtu.be/ViAYjc-SEtA",
  },
  {
    title: "Women Who Code's Days of Code Challenge",
    description:
      "Successfully completed the Women Who Code's Days of Code Challenge by coding for 100 consecutive days, creating numerous projects, and learning advanced concepts like Redux, Alpine.js, and Firebase.",
    image: wwCodeImage,
    githubLink: "https://github.com/arzu-guney/wwcode-days-of-code-challenge",
  },
  {
    title: "Goodness of Nature",
    description:
      "A practice project for the 'Push Your Imagination with CSS Animation' event, showcasing creative use of CSS animations and HTML structure. Hosted on Netlify.",
    image: goodnessOfNatureImage,
    githubLink: "https://github.com/arzu-guney/goodness-of-nature",
    liveLink: "https://fastidious-cascaron-b161bc.netlify.app/",
  },
  {
    title: "Habit Master Elite",
    description:
      "The Challenge App is designed to help users track their challenges in a more organized and disciplined way. It provides a user-friendly interface for making commits and monitoring progress towards set goals.",
    image: habitMasterImage,
    githubLink: "https://github.com/arzu-guney/habit-master-elite",
    liveLink: "https://dynamic-axolotl-49c244.netlify.app/",
  },
  {
    title: "ChirpX",
    description:
      "ChirpX is a simple Twitter clone application where users can create tweets, like them, retweet them, and reply to them.",
    image: chirpXImage,
    githubLink: "https://github.com/arzu-guney/ChirpX--Twitter-Clone-",
    liveLink: "https://mellow-cocada-a14e15.netlify.app/",
  },
];

function Projects() { 
  return (
    <>
  <Helmet>
        <title>Projects - Solved Cases</title>
        <meta
          name="description"
          content="Explore a collection of completed projects, showcasing innovative ideas and creative problem-solving in web and app development."
        />
        <meta
          name="keywords"
          content="Projects, React, Web Development, App Development, Open Source, Programming"
        />
        <meta name="author" content="Arzu Guney Caner" />
        <link
          rel="canonical"
          href="https://arzu-guney.github.io/"
        />
      </Helmet>
    <div className={styles.projects}>
      <h1 className={styles.title}>Solved Cases</h1>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>
                {project.description}
              </p>
              <div className={styles.projectLinks}>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  GitHub
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Live
                  </a>
                )}
                {project.videoLink && (
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Video
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Projects;


