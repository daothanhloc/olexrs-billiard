import React from "react";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
};

export default SectionTitle;
