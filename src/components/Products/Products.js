import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Products.module.css";
import knittMatesImage from "../../assets/images/products/knittmates.png";
import dottinooImage from "../../assets/images/products/dottinoo.png";
import motinoImage from "../../assets/images/products/motino.png";

const products = [
  {
    title: "KnittMates: Your Knitting Calculator",
    description:
      "A practical knitting companion with calculators and guides that make planning projects, measurements, and patterns easier.",
    image: knittMatesImage,
    imageAlt: "KnittMates App",
    buttons: [
      {
        label: "Google Play Store",
        href: "https://play.google.com/store/apps/details?id=com.innoaits.knitmate&hl=en_GB",
      },
      {
        label: "Learn More",
        href: "https://play.google.com/store/apps/details?id=com.innoaits.knitmate&hl=en_GB",
      },
    ],
  },
  {
    title: "Dottinoo",
    description:
      "A personalized learning platform for ages 14–24, with class management, AI-assisted tasks, submissions, feedback, and accessibility support.",
    image: dottinooImage,
    imageAlt: "Dottinoo",
    buttons: [
      {
        label: "Learn More",
        href: "https://dottinoo.co.uk/",
      },
    ],
  },
  {
    title: "Motino",
    description:
      "A daily motivation app where users spin once a day to receive an original quote, then save, copy, share, or download it.",
    image: motinoImage,
    imageAlt: "Motino",
    buttons: [
      {
        label: "Learn More",
        href: "https://motino.netlify.app/",
      },
    ],
  },
];

function Products() {
  return (
    <>
      <Helmet>
        <title>Inventor's Lab | KnittMates, Dottinoo & Motino</title>
        <meta
          name="description"
          content="Explore Crafting Innovations from the Inventor's Lab: KnittMates knitting companion, Dottinoo personalized learning platform, and Motino daily motivation app."
        />
        <meta
          name="keywords"
          content="Inventor's Lab, Crafting Innovations, KnittMates, Dottinoo, Motino, Products, Knitting App, Learning Platform, Motivation App"
        />
        <meta name="author" content="Arzu Guney Caner" />
        <link rel="canonical" href="https://arzu-guney.github.io/" />
      </Helmet>

      <div className={styles.products}>
        <h1 className={styles.title}>Crafting Innovations</h1>

        {products.map((product, index) => (
          <div
            key={product.title}
            className={`${styles.productContainer} ${
              index % 2 === 1 ? styles.productContainerReversed : ""
            }`}
          >
            <div className={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.imageAlt}
                className={styles.productImage}
              />
            </div>
            <div className={styles.contentContainer}>
              <h2 className={styles.subtitle}>{product.title}</h2>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.buttons}>
                {product.buttons.map((button) => (
                  <a
                    key={button.label}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
