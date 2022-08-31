import React from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Watermark.module.css";

function Watermark() {
  const { activeWatermark, watermarkColor: color } =
    React.useContext(ThemeContext);

  if (!activeWatermark.trim().length) return;

  return (
    <div className={styles.watermark} style={{ color }}>
      @{activeWatermark}
    </div>
  );
}

export default Watermark;
