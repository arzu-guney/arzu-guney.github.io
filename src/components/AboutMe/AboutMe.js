import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styles from "./AboutMe.module.css";

function AboutMe() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const notes = [
    "2022: Started my journey as a developer, leaving behind a successful SEO career.",
    "2022: Learned coding at Lonca, where logic meets creativity and transforms into a craft.",
    "2022: Completed my first project, igniting a passion for problem-solving and innovation.",
    "2022: Published my first technical article, sharing knowledge with the tech community.",    
    "2023: Participated in two hackathons with teams, earning awards for innovative solutions.",
    "2023: Collaborated on open-source projects to create impactful global solutions.",
    "2023: Supporting and mentoring developers at Women Coding Community.",
    "2024: Spoke on International Women’s Day about empowering women in technology.",
    "2024: Launched a knitting app (KnittMates) to promote mental health post-COVID.",
    "2025: Received the AI Visionary Award from the Frontend Queens Community.",
    "2025: Participated in AI Safety Hackathon and created Safeai Academy.",
    "2025: Participated in and created Mind Garden: AI-Powered Multi-Agent.(with amazing team)", 
    "2025: Participated in and created BrainBloom: AI-Powered Multi-Agent.(with amazing team)",    
  ];

  return (
    <>
      <Helmet>
        <title>About Arzu Guney Caner | Developer's Desk</title>
        <meta
          name="description"
          content="Learn more about Arzu Guney Caner, her journey in software development, and her contributions to the coding world."
        />
        <meta
          name="keywords"
          content="About Arzu Guney Caner, Web Developer, Detective Mind, CodeArz"
        />
        <meta name="author" content="Arzu Guney Caner" />
        <link
          rel="canonical"
          href="https://arzu-guney.github.io/about"
        />
      </Helmet>
      <div className={styles.aboutMeContainer}>
        <h1 className={styles.title}>Arzu's Desk</h1>

        <div className={styles.notesBoard}>
          {notes.map((note, index) => (
            <div
              key={index}
              className={styles.note}
              style={{
                "--rotation": `${(index % 2 === 0 ? -1 : 1) * (3 + index)}deg`,
              }}
            >
              <div className={styles.pin}></div>
              <p className={styles.noteText}>{note}</p>
            </div>
          ))}
        </div>

        <button className={styles.contactButton} onClick={toggleForm}>
          {isFormVisible ? "Close Contact Form" : "Get in Touch"}
        </button>

        <div
          className={`${styles.contactForm} ${
            isFormVisible ? styles.contactFormVisible : ""
          }`}
        >
          <h2 className={styles.contactTitle}>Contact Me</h2>
          <form
            action="https://formspree.io/f/mgvepvko"
            method="POST"
            className={styles.form}
          >
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              required
            />

            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              required
            />

            <label htmlFor="message" className={styles.label}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              required
            ></textarea>

            <button type="submit" className={styles.button}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
