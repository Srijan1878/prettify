import { dark, dracula, solarizedLight, solarizedDark, monokai, monoBlue, monokaiSublime, paraisoDark, shadesOfPurple, docco, gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const DEFAULT_CODE = `
function shuffleObjValues() {

    let randomObj = {};

    let valuesArray = Object.values(obj[0].answers);

    function populateObject(key) {
        let randomIndex = Math.floor(Math.random() * valuesArray.length);
        let randomValue = valuesArray[randomIndex];
        randomObj[key] = randomValue;
        valuesArray.splice(randomIndex, 1);
    }

    Object.keys(obj[0].answers).forEach((key) => {
        populateObject(key);
    });
}`

export const CODE_STYLES = {
    padding: "1rem",
    fontSize: "clamp(12px, 1.6vw, 16px)",
    textAlign: "left",
    marginBlock: "0",
    minHeight: "20px",
    height: "inherit",
};

export const THEME_CONFIG = {
    dark,
    dracula,
    solarizedLight,
    solarizedDark,
    monokai,
    monoBlue,
    monokaiSublime,
    paraisoDark,
    shadesofpurple: shadesOfPurple,
    docco,
    gradientDark
}