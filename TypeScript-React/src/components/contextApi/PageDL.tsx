import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'

function PageDL() {
    const { state, dispatch } = useContext(ThemeContext)
    const [theme, setTheme] = useState<string>("light")
    const [fontSize, setFontSize] = useState<number>(16)

    useEffect(() => {
        setTheme(state.theme)
        setFontSize(state.fontSize)
        if (fontSize > 100) {
            setFontSize(16)
        }
    }, [state])

    console.log(state)
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, height: 100, width: '100%', background: theme === "dark" ? 'black' : 'grey' }}>
                <h1 style={{ color: theme === 'dark' ? 'white' : 'black', fontSize: fontSize }}>Sample Text</h1>
                <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>Change Theme</button>
                <button onClick={() => dispatch({ type: "CHANGE_FONTSIZE", payload: fontSize + 4 })}>Change FontSize</button>
            </div>
        </>
    )
}

export default PageDL