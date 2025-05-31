import React from "react";
import { getImageUrl } from "../../utils";
import { Typewriter } from "react-simple-typewriter";
import styles from "./About.module.css";


export const About = () => {
  return (
 <section id="about" className={styles.container}>
  <div className={styles.content}>
    <h1 className={styles.title}>
      I'm ROSHAN P M
      <span className={styles.typingEffect}>
        <Typewriter
          words={['MERN Stack Developer']}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>

    <p className={styles.description}>
     A Computer Science student with a strong interest in web development and programming. I enjoy building useful projects, learning new tools, and continuously improving my skills.  I have experience working with technologies like HTML, CSS, JavaScript, React, and MongoDB. Reach out if you'd like to learn more!
    </p>

    <div className={styles.buttonsContainer}>
      <a href="mailto:arsrosh@email.com" className={styles.contactBtn}>
        Contact Me
      </a>
      <a href="/RESUME.pdf" download className={styles.resumeBtn}>
        Resume
      </a>
    </div>
  </div>

  <img
    src={getImageUrl("hero/HeroImage.jpg")}
    alt="Hero image of me"
    className={styles.heroImg}
  />
</section>

  );
};
