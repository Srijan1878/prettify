import React, { useContext } from "react";
import { useMemo } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./ColorSelector.module.css";

function ColorSelector({ label, setStateType }) {
  const { [setStateType]: setState } = useContext(ThemeContext);

  return useMemo(() => {
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
  }, [setStateType]);
}

export default ColorSelector;
