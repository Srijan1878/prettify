import React from "react";
import { useMemo } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Watermark.module.css";

function Watermark() {
  const { activeWatermark, watermarkColor: color } =
    React.useContext(ThemeContext);
  return useMemo(() => {
    console.log("Rendering Watermark Component");

    if (!activeWatermark.trim().length) return;

    return (
      <div className={styles.watermark} style={{ color }}>
        @{activeWatermark}
      </div>
    );
  }, [activeWatermark, color]);
}

export default Watermark;
