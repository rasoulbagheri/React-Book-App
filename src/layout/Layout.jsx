import React from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p> React Js course training</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <span>developed By rasoul bagheri</span>
      </footer>
    </>
  );
}

export default Layout;
