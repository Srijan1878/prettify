import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./ColorSelector.module.css";

function ColorSelector({ label, stateType, setStateType }) {
  const { [setStateType]: setState } = useContext(ThemeContext);

  const setColorHandler = (e) => {
    setState(e.target.value);
  };

  return (
    <>
      <label className={styles.label}>{label}</label>
      <input
        defaultValue={"#ffb743"}
        type="color"
        name="colorInput"
        id={label}
        onChange={setColorHandler}
        className={styles.colorInput}
      />
    </>
  );
}

export default ColorSelector;
