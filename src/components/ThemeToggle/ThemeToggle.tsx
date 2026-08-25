import { MdOutlineWbSunny, MdOutlineDarkMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import styles from "./ThemeToggle.module.css";


function ThemeToggle () {

    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("ThemeToggle deve estar dentro de ThemeProvider");
    }

    const { theme, toggleTheme } = context;
    
    return (
        <button onClick={toggleTheme} className={styles.themeToggle}>
            {theme === "dark" ? <MdOutlineDarkMode size={20}/> : <MdOutlineWbSunny size={20}/>}
        </button>
    )
}

export default ThemeToggle