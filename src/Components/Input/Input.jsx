import React, { useContext } from "react";
import { useMemo } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Input.module.css";

function Input({ label, stateType, setStateType }) {
  const { [stateType]: currentState, [setStateType]: setState } =
    useContext(ThemeContext);

  return useMemo(() => {
    const setInputValue = (e) => setState(e.target.value);

    console.log('Rendering Input Component')

    return (
      <>
        <label htmlFor={"input"}>{label}</label>
        <input
          type="text"
          id="input"
          onChange={setInputValue}
          value={currentState}
          className={styles.input}
        />
      </>
    );
  }, [currentState, setState, label]);
}

export default Input;
