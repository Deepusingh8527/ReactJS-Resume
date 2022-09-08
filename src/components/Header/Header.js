import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A Resume that stands out!!
        </p>
        <p className={styles.zip}>
        Standing out Professional. 
        Get your Resume ready in minutes with our step-by-step builder.
        </p>
      </div>
      <div className={styles.right}>
        <img src="./col.png" style={{height: "450px"}} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
