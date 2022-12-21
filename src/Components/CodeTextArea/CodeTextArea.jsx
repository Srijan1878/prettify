import React, { useContext, useEffect, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import styles from "./CodeTextArea.module.css";
import { ReactComponent as MacNav } from "../../assets/MacNav.svg";
import { CODE_STYLES, DEFAULT_CODE, THEME_CONFIG } from "../../constants";
import ThemeContext from "../../context/ThemeContext";
import get from "../../utils/get";
import Watermark from "../Watermark/Watermark";

const StyledCodeContainer = ({ children }) => {
  return <div className={styles.styledCodeContainer}>{children}</div>;
};

function CodeTextArea() {
  const [code, setCode] = React.useState(DEFAULT_CODE);
  const {
    backgroundColor,
    activeTheme,
    activePadding,
    activeLanguage,
    setCodeElementRef,
  } = useContext(ThemeContext);

  let bg = get(THEME_CONFIG[activeTheme], "hljs.background");
  const BeautifiedCodeRef = useRef();

  useEffect(() => {
    if (BeautifiedCodeRef.current) setCodeElementRef(BeautifiedCodeRef);
  }, []);

  return (
    <>
      <StyledCodeContainer>
        <div
          className={styles.codeTextContainer}
          style={{ backgroundColor, padding: activePadding + "px" }}
          ref={BeautifiedCodeRef}
        >
          <div
            className={styles.codeTextOutsideWrapper}
            style={{
              background: bg,
            }}
          >
            <MacNav />
            <div className={styles.codeTextAreaWrapper}>
              <textarea
                spellCheck="false"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              ></textarea>
              <SyntaxHighlighter
                language={activeLanguage}
                style={THEME_CONFIG[activeTheme]}
                customStyle={CODE_STYLES}
                codeTagProps={{ className: styles.codeTag }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
            <Watermark />
          </div>
        </div>
      </StyledCodeContainer>
    </>
  );
}

export default CodeTextArea;
