import React, { useContext } from "react";
import { useMemo } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Slider.module.css";

function Slider({ label, stateType, setStateType, min, max, step }) {
  const { [stateType]: currentState, [setStateType]: setState } =
    useContext(ThemeContext);
  return useMemo(() => {
    const setRangeValue = (e) => {
      setState((prevTheme) => e.target.value);
    };
    return (
      <>
        <div className={styles.labelWrapper}>
          <label className={styles.label} htmlFor={"slider"}>
            {label}
          </label>
          <span>{currentState}</span>
        </div>
        <input
          type="range"
          name="slider"
          id="slider"
          onChange={setRangeValue}
          value={currentState}
          className={styles.slider}
          {...{ min, max, step }}
        />
      </>
    );
  }, [currentState, setState]);
}

export default Slider;
