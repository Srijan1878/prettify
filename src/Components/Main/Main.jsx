import React from "react";
import { ThemeProvider } from "../../context/ThemeContext";
import CodeControls from "../CodeControls/CodeControls";
import CodeTextArea from "../CodeTextArea/CodeTextArea";
import Description from "../Description/Description";
import styles from "./Main.module.css";

function Main() {
  return (
    <>
      <Description />
      <ThemeProvider>
        <div className={styles.mainContainer}>
          <CodeTextArea />
          <CodeControls />
        </div>
      </ThemeProvider>
    </>
  );
}

export default Main;
