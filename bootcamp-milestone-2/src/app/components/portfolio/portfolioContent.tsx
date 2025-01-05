import React from "react";
import portfolioEntries from "./portfolioData";
import styles from "./portfolioContent.module.css"

const Portfolio: React.FC = () => {
  return (
    <main>
      <h1 className="portfolio">Portfolio</h1>
      <div className={styles["project-container"]}>
        {portfolioEntries.map((project) => (
          <div
            key={project.slug}
            className={`${styles.project} ${
              project.status === "coming-soon" ? styles["coming-soon"] : ""
            }`}
          >
            <img src={project.image} alt={project.imageAlt} />
            <div className={styles["project-details"]}>
              <p className={styles["project-name"]}>{project.title}</p>
              <p className={styles["project-description"]}>
                {project.description}
              </p>
              <a
                href={`/portfolio/${project.slug}`}
                className={styles["learn-more"]}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
