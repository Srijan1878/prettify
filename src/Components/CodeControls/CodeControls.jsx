import React, { memo, useContext } from "react";
import CONTROL_SETTINGS from "../../config/ControlSettings";
import ThemeContext from "../../context/ThemeContext";
import downloadHandler from "../../utils/download";
import get from "../../utils/get";
import Button from "../Button/Button";
import ColorSelector from "../ColorSelector/ColorSelector";
import ControlSettingWrapper from "../ControlSettingWrapper/ControlSettingWrapper";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import Slider from "../Slider/Slider";
import styles from "./CodeControls.module.css";

function getControlSettingComponent({ type, ...props }) {
  switch (type) {
    case "dropdown":
      return <Dropdown {...props} />;
    case "colorSelector":
      return <ColorSelector {...props} />;
    case "slider":
      return <Slider {...props} />;
    case "input":
      return <Input {...props} />;
    default:
      return;
  }
}

function CodeControls() {
  const { codeElementRef } = useContext(ThemeContext);

  const handleDownload = () => downloadHandler(codeElementRef);

  return (
    <div className={styles.CodeControlsContainer}>
      <h4 className={styles.controlSettingsHeader}>Settings</h4>
      {CONTROL_SETTINGS.map((controlSetting) => (
        <ControlSettingWrapper key={get(controlSetting, "label")}>
          {getControlSettingComponent(controlSetting)}
        </ControlSettingWrapper>
      ))}
      <div className={styles.buttonWrapper}>
        <Button title={"download"} onClick={handleDownload} />
      </div>
    </div>
  );
}

export default memo(CodeControls);
