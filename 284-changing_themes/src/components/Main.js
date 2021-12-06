import React, {useContext} from "react"
import { ThemeContext } from "../themeContext"

function Main() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <main className={`${theme}-main`}>
            <h1 className={`${theme}-mode`}>{theme === "light" ? "Light" : "Dark"} Mode</h1>
            <button 
                onClick={toggleTheme} 
                className={`${theme}-button`}
            >
                Switch Theme
            </button>
        </main>
    )    
}

export default Main