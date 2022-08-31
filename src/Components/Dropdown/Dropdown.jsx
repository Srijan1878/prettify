import React, { memo, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Dropdown.module.css";

const Dropdown = ({ data, label, stateType, setStateType }) => {
  const { [stateType]: currentState, [setStateType]: setState } =
    useContext(ThemeContext);

  const filterMenu = (e) => {
    setState(() => e.target.value);
  };

  return (
    <>
      <label htmlFor={label} className={styles.dropdownLabel}>
        {label}
      </label>
      <select
        className={styles.dropdown}
        type="text"
        id={label}
        onChange={filterMenu}
        value={currentState}
        placeholder={label}
      >
        {data.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </>
  );
};

export default memo(Dropdown);
