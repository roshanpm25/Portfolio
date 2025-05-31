import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.text}>
        <p>© 2025 ROSHAN P M. All rights reserved.</p>
      </div>
      <div className={styles.icons}>
        <a href="mailto:arsrosh@example.com" aria-label="Email">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
};
