import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaMedium, FaChalkboardTeacher } from "react-icons/fa";
import { BiCoffee } from "react-icons/bi";

function Footer() {
    const socialLinks = [
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/arzucaner/", name: "LinkedIn" },
        { icon: <FaChalkboardTeacher />, link: "https://topmate.io/arzu_guney/", name: "Topmate" },
        { icon: <FaGithub />, link: "https://github.com/arzu-guney", name: "GitHub" },
        { icon: <FaMedium />, link: "https://arzugny.medium.com/", name: "Medium" },
        { icon: <FaYoutube />, link: "https://www.youtube.com/@Codearz", name: "YouTube" },
        { icon: <FaTwitter />, link: "https://x.com/arz_ugny", name: "Twitter" },
        { icon: <BiCoffee />, link: "https://buymeacoffee.com/arzuguney?status=1", name: "Buymecoffee" },
      ];      

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} CodeArz. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
