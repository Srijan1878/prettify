import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Input.module.css";

function Input({ label, stateType, setStateType }) {
  const { [stateType]: currentState, [setStateType]: setState } =
    useContext(ThemeContext);

  const setInputValue = (e) => setState(e.target.value);

  return (
    <>
      <label htmlFor={"input"}>
        {label}
      </label>
      <input
        type="text"
        id="input"
        onChange={setInputValue}
        value={currentState}
        className={styles.input}
      />
    </>
  );
}

export default Input;
