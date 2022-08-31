import SyntaxHighlighter from "react-syntax-highlighter";
import { THEME_CONFIG } from "../constants";

const CONTROL_SETTINGS = [
    {
        data: SyntaxHighlighter.supportedLanguages,
        label: "languages",
        type: "dropdown",
        stateType: "activeLanguage",
        setStateType: "setActiveLanguage"
    },
    {
        data: Object.keys(THEME_CONFIG),
        label: "themes",
        type: "dropdown",
        stateType: "activeTheme",
        setStateType: "setActiveTheme"
    },
    {
        data: null,
        label: "background Color",
        type: "colorSelector",
        stateType: 'backgroundColor',
        setStateType: 'setBackgroundColor'
    },
    {
        label: "Padding",
        type: "slider",
        stateType: "activePadding",
        step: 2,
        min: 2,
        max: 32,
        setStateType: "setActivePadding"
    },
    {
        label: "Watermark",
        type: "input",
        stateType: "activeWatermark",
        setStateType: "setActiveWatermark",
    },
    {
        data: null,
        label: "Watermark Color",
        type: "colorSelector",
        stateType: 'watermarkColor',
        setStateType: 'setWatermarkColor'
    }
]

export default CONTROL_SETTINGS