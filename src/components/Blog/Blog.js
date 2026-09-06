import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Blog.module.css";
import mobileAppsImage from "../../assets/images/blog/mobileAppsImage.png";
import startingJobImage from "../../assets/images/blog/startingJobImage.png";
import reactNativeImage from "../../assets/images/blog/reactNativeImage.png";
import developerSuitcaseImage from "../../assets/images/blog/developerSuitcaseImage.png";
import debuggingGuideImage from "../../assets/images/blog/debuggingGuideImage.png";
import softwareAdventureImage from "../../assets/images/blog/2023SoftwareAdventureImage.png";
import motivationHurdleImage from "../../assets/images/blog/motivationHurdleImage.png";
import aiDevCampNotesImage from "../../assets/images/blog/aiDevCampNotesImage.png";
import recap2024Image from "../../assets/images/blog/recap2024Image.png";
import experienceAboutYears from "../../assets/images/blog/experienceaboutyears.png";
import reactlibraries from "../../assets/images/blog/reactlibraries.png";
import reactnativeperformance from "../../assets/images/blog/reactnativeperformance.png";
import optimizingReactNative from "../../assets/images/blog/optimizingReactNative.png";
import aiGrowsYou from "../../assets/images/blog/aiGrowsYou.png";
import expoforReactNative from "../../assets/images/blog/expoforReactNative.png";
import juniorPortfolyo from "../../assets/images/blog/juniorPortfolio.png";
import watchTutorials from "../../assets/images/blog/watchTutorials.png";
import whyYouStill from "../../assets/images/blog/whyYouStill.png";
import whyYouWaiting from "../../assets/images/blog/whyYouWaiting.png";
import aboutMe from "../../assets/images/blog/aboutMe.png";
import theRealStart from "../../assets/images/blog/theRealStart.png";
import halfTheYear from "../../assets/images/blog/halfTheYear.png";
import howDevelopers from "../../assets/images/blog/howDevelopers.png";



const blogs = [
  {    
    title: "How Developers Stay Focused During Summer",
    image: howDevelopers,
    readMoreLink:
      "https://arzugny.medium.com/how-developers-stay-focused-during-summer-b6e94e16df81",
  },
  {    
    title: "Highlights from the First Half of the Year",
    image: halfTheYear,
    readMoreLink:
      "https://arzugny.medium.com/highlights-from-the-first-half-of-the-year-3e08c342b9c6",
  },
  {    
    title: "The Interview Isn’t the Finish Line — It’s the Real Start",
    image: theRealStart,
    readMoreLink:
      "https://arzugny.medium.com/the-interview-isnt-the-finish-line-it-s-the-real-start-b6bb585c8b51",
  },
  {    
    title: "Hi, I’m Arzu — Here’s a Bit About Me",
    image: aboutMe,
    readMoreLink:
      "https://arzugny.medium.com/hi-im-arzu-here-s-a-bit-about-me-6fd7e129da52",
  },
   {    
    title: "Why You’re Waiting for Permission to Build Something",
    image: whyYouWaiting,
    readMoreLink:
      "https://arzugny.medium.com/why-youre-waiting-for-permission-to-build-something-7b7386713ef8",
  },
   {    
    title: "Why You Still Don’t Understand Git",
    image: whyYouStill,
    readMoreLink:
      "https://arzugny.medium.com/why-you-still-dont-understand-git-07bfaa649a4a",
  },
  {    
    title: "Why You’re Not Learning Enough by Just Watching Tutorials",
    image: watchTutorials,
    readMoreLink:
      "https://arzugny.medium.com/why-youre-not-learning-enough-by-just-watching-tutorials-d6784a87b76f",
  },
  {    
    title: "Why Your Junior Portfolio Isn’t Helping You Get Hired",
    image: juniorPortfolyo,
    readMoreLink:
      "https://arzugny.medium.com/why-your-junior-portfolio-isnt-helping-you-get-hired-5e1ee207107e",
  },
  {    
    title: "Why I Still Choose Expo for React Native in 2025",
    image: expoforReactNative,
    readMoreLink:
      "https://arzugny.medium.com/why-i-still-choose-expo-for-react-native-in-2025-45d8803e8b2f",
  },
  {    
    title: "How to Build a Relationship with AI That Grows You",
    image: aiGrowsYou,
    readMoreLink:
      "https://arzugny.medium.com/how-to-build-a-relationship-with-ai-that-grows-you-21b2f7ba6fee",
  },
  {    
    title: "Optimizing Animation Performance in React Native",
    image: optimizingReactNative,
    readMoreLink:
      "https://arzugny.medium.com/optimizing-animation-performance-in-react-native-fc5a59445aae",
  },
  {    
    title: "Optimizing React Native Performance",
    image: reactnativeperformance,
    readMoreLink:
      "https://arzugny.medium.com/optimizing-react-native-performance-3d979d9f373b",
  },
  {    
    title: "Boost Your Web Projects with React Libraries",
    image: reactlibraries,
    readMoreLink:
      "https://arzugny.medium.com/boost-your-web-projects-with-react-libraries-b7023e376e16",
  },
  {
    title: "Is Experience About Years or Growth?",
    image: experienceAboutYears,
    readMoreLink:
      "https://arzugny.medium.com/is-experience-about-years-or-growth-91c0a8e4cc18",
  },
  {
    title: "Behind the Scenes of 2024!",
    image: recap2024Image,
    readMoreLink:
      "https://arzugny.medium.com/behind-the-scenes-of-2024-ffbdee9dcc45",
  },
  {
    title: "How to Create Engaging and Functional Mobile Apps?",
    image: mobileAppsImage,
    readMoreLink:
      "https://arzugny.medium.com/how-to-create-engaging-and-functional-mobile-apps-7f35b6145db0",
  },
  {
    title: "Starting a Job: The End or Just the Beginning?",
    image: startingJobImage,
    readMoreLink:
      "https://arzugny.medium.com/starting-a-job-the-end-or-just-the-beginning-cdfe7ecb0edd",
  },
  {
    title: "A Beginner’s Guide to React Native",
    image: reactNativeImage,
    readMoreLink:
      "https://engineering.teknasyon.com/a-beginners-guide-to-react-native-769ef818e1b0",
  },
  {
    title: "A Developer’s Suitcase",
    image: developerSuitcaseImage,
    readMoreLink:
      "https://arzugny.medium.com/a-developers-suitcase-eeda8530863c",
  },
  {
    title: "Cracking Software Puzzles: Debugging Guide",
    image: debuggingGuideImage,
    readMoreLink:
      "https://arzugny.medium.com/cracking-software-puzzles-debugging-guide-87da909b1283",
  },
  {
    title: "My Software Development Adventure: Behind the Scenes of 2023!",
    image: softwareAdventureImage,
    readMoreLink:
      "https://arzugny.medium.com/my-software-development-adventure-behind-the-scenes-of-2023-15e835fe92f1",
  },
  {
    title: "First Hurdle When Learning to Code: Loss of Motivation",
    image: motivationHurdleImage,
    readMoreLink:
      "https://arzugny.medium.com/first-hurdle-when-learning-to-code-loss-of-motivation-a300d7a3adb3",
  },
  {
    title:
      "AI DevCamp Notes: Journey into the World of Artificial Intelligence",
    image: aiDevCampNotesImage,
    readMoreLink:
      "https://arzugny.medium.com/i-devcamp-notes-journey-into-the-world-of-artificial-intelligence-f171f6b38159",
  },  
];

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - Developer's Journal</title>
        <meta
          name="description"
          content="Dive into the Developer’s Journal and explore articles about web development, mobile app creation, and personal journeys in coding."
        />
        <meta
          name="keywords"
          content="Developer Blog, Web Development, Mobile Apps, Coding, React Native, Debugging, Developer Journey"
        />
        <meta name="author" content="Arzu Guney Caner" />
        <link
          rel="canonical"
          href="https://arzu-guney.github.io/blog"
        />
      </Helmet>

      <div className={styles.blog}>
        <h1 className={styles.title}>Developer’s Journal</h1>
        <div className={styles.blogContainer}>
          {blogs.map((blog, index) => (
            <div key={index} className={styles.blogCard}>
              <img
                src={blog.image}
                alt={blog.title}
                className={styles.blogImage}
              />
              <h2 className={styles.blogTitle}>{blog.title}</h2>
              <a
                href={blog.readMoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.readMore}
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
