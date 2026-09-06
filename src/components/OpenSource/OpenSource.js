import React from "react";
import { Helmet } from "react-helmet";
import styles from "./OpenSource.module.css";
import accessibilityImage from "../../assets/images/general/accessibility-guide.png";

function OpenSource() {
  return (
    <>
      <Helmet>
        <title>Open Source Projects - Accessibility Guide</title>
        <meta
          name="description"
          content="Explore our open-source accessibility guide designed for developers to implement inclusive and accessible web applications with tutorials and WCAG standards."
        />
        <meta
          name="keywords"
          content="Open Source, Accessibility Guide, Inclusive Web Development, WCAG Standards, ARIA, Web Tutorials"
        />
        <meta name="author" content="Arzu Guney Caner" />
        <link
          rel="canonical"
          href="https://arzu-guney.github.io/opensource"
        />
      </Helmet>

      <div className={styles.openSource}>
        <h1 className={styles.title}>Open Source Projects</h1>
        <div className={styles.projectContainer}>
          <div className={styles.imageContainer}>
            <img
              src={accessibilityImage}
              alt="Accessibility Guide"
              className={styles.projectImage}
            />
          </div>
          <div className={styles.contentContainer}>
            <h2 className={styles.projectTitle}>Accessibility Guide</h2>
            <p className={styles.projectDescription}>
              This guide is a comprehensive resource for developers looking to
              implement accessibility best practices in their projects. It
              includes tutorials, code examples, and a step-by-step guide to
              building inclusive web applications. I’d love for you to join us
              on this journey! Whether it’s suggesting improvements, fixing
              issues, or adding new features, your contribution can make a
              difference. Let’s work together to make the web accessible to
              everyone!
            </p>
            <ul className={styles.featuresList}>
              <li>🟦 Comprehensive Accessibility Checklist</li>
              <li>🟦 Tutorials and Practical Examples</li>
              <li>🟦 Compatible with WCAG and ARIA Standards</li>
              <li>🟦 Dynamic Components for Accessibility</li>
            </ul>
            <div className={styles.links}>
              <a
                href="https://github.com/arzu-guney/web-accessibility-guide"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
              <a
                href="https://arzu-guney.github.io/web-accessibility-guide/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Live Demo
              </a>
              <a
                href="https://youtu.be/PHxfQKHagNM"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenSource;
