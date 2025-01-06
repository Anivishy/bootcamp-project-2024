// /components/portfolio/portfolioContent.tsx

import React from "react";
import styles from "./portfolioContent.module.css"; // Ensure you have the necessary styles

type PortfolioContentProps = {
  portfolioItems: { title: string; description: string; imageUrl: string }[];
};

const PortfolioContent: React.FC<PortfolioContentProps> = ({ portfolioItems }) => {
  return (
    <div className={styles["project-container"]}>
      {portfolioItems.map((item) => (
        <div key={item.title} className={styles.project}>
          <img
            src={item.imageUrl} // Assumes you have an imageUrl field
            alt={item.title}
            className={styles["project-img"]}
          />
          <div className={styles["project-details"]}>
            <h2 className={styles["project-name"]}>{item.title}</h2>
            <p className={styles["project-description"]}>{item.description}</p>
            {/* Optional: Add a button or link */}
            <a href="#" className={styles["learn-more"]}>
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioContent;
