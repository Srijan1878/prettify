import { createContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [activeTheme, setActiveTheme] = useState("monokai")
    const [backgroundColor, setBackgroundColor] = useState("#ffb743")
    const [activeLanguage, setActiveLanguage] = useState("javascript")
    const [activePadding, setActivePadding] = useState(64)
    const [activeWatermark, setActiveWatermark] = useState('')
    const [watermarkColor, setWatermarkColor] = useState('#fff')
    const [codeElementRef, setCodeElementRef] = useState(null);

    return <ThemeContext.Provider value={{
        activeTheme,
        setActiveTheme,
        backgroundColor,
        setBackgroundColor,
        activeLanguage,
        setActiveLanguage,
        activePadding,
        setActivePadding,
        activeWatermark,
        setActiveWatermark,
        watermarkColor,
        setWatermarkColor,
        codeElementRef,
        setCodeElementRef,
    }}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContext