import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Products.module.css";
import knittMatesImage from "../../assets/images/products/knittmates.png";

function Products() {
  return (
    <>
      <Helmet>
        <title>
          KnittMates: Your Knitting Calculator - Crafting Innovations
        </title>
        <meta
          name="description"
          content="Explore KnittMates, the ultimate knitting calculator that helps you plan and track your knitting projects while finding inspiration and inner peace."
        />
        <meta
          name="keywords"
          content="Knitting App, KnittMates, Crafting Innovations, Knitting Calculator, Knitting Projects, Creative Knitting"
        />
        <meta name="author" content="Arzu Guney Caner" />
        <link
          rel="canonical"
          href="https://arzu-guney.github.io/products"
        />
      </Helmet>

      <div className={styles.products}>
        <h1 className={styles.title}>Crafting Innovations</h1>        

        <div className={styles.productContainer}>
          <div className={styles.imageContainer}>
            <img
              src={knittMatesImage}
              alt="KnittMates App"
              className={styles.productImage}
            />
          </div>
          <div className={styles.contentContainer}>
            <h2 className={styles.subtitle}>
              KnittMates: Your Knitting Calculator
            </h2>
            <p className={styles.description}>
              KnittMates is not just a knitting app; it's a lifestyle. Knitting
              a cosy blanket or a soft scarf is not just a hobby but also a
              process of taking a breath and finding oneself. KnittMates allows
              users to plan and track knitting projects while offering the key
              to inner peace and happiness.
            </p>
            <p className={styles.description}>
              Behind every stitch, there is a story. KnittMates encourages users
              to weave their own stories and turn their dream projects into
              reality. This app creates a world filled with knitting yarns,
              hope, love, and creativity.
            </p>
            <p className={styles.description}>
              Welcome to the knitting world of KnittMates. We invite you to
              embark on a journey where every stitch tells a story. KnittMates
              is the perfect environment for you to document your own story and
              find inspiration to create your most beautiful projects.
            </p>
            <div className={styles.buttons}>
              <a
                href="https://play.google.com/store/apps/details?id=com.innoaits.knitmate&hl=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Google Play Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.innoaits.knitmate&hl=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
