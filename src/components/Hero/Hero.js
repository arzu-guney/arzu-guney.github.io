import React from "react";
import CVAssistant from "../CVAssistant/CVAssistant";
import MiniGame from "../MiniGame/MiniGame";
import { Helmet } from "react-helmet";
import { FaSearch } from "react-icons/fa";
import { RiCompass3Line } from "react-icons/ri";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <Helmet>
        <title>CodeArz: Enter Baker Street - Modern Detective Mind</title>
        <meta
          name="description"
          content="Welcome to CodeArz! Discover the modern detective mind, solving mysteries in the digital age with innovative coding techniques and interactive experiences."
        />
        <meta
          name="keywords"
          content="CodeArz, Baker Street, Detective, Coding, Web Development"
        />
        <meta name="author" content="Arzu Guney Caner" />
        <link
          rel="canonical"
          href="https://arzu-guney.github.io/"
        />
      </Helmet>

      <div className={styles.shootingStar}></div>
      <div className={styles.shootingStar}></div>
      <div className={styles.shootingStar}></div>

      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span className={styles.titleText}>
            Enter Baker Street: The Mind of a Modern Detective
          </span>
          <span className={styles.magnifyingGlassWrapper}>
            <FaSearch className={styles.magnifyingGlass} />
          </span>
        </h1>

        <p className={styles.subtitle}>
          <span>
            Welcome to Arzu's world
            <RiCompass3Line className={styles.subtitleIcon} />
          </span>
          <br />
          <em className={styles.italicLine}>
            On a relentless quest to solve the mysteries of code with precision
            and creativity.
          </em>
        </p>
      </div>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}> Lab Intelligence Updates</h2>    
      </div>

      <div className={styles.extraContent}>
        <CVAssistant />
        <MiniGame />
      </div>
    </div>
  );
}

export default Hero;
