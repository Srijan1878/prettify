import React from "react";
import styles from "./ControlSettingWrapper.module.css";

function ControlSettingWrapper({ children }) {
  return <div className={styles.controlSettingWrapper}>{children}</div>;
}

export default ControlSettingWrapper;
