import { useState } from "react"
import { useCookies } from "react-cookie"

const useDarkMode = (defaultTheme = 'dark') => {
    const [_, setCookie] = useCookies(['theme']);


    const [theme, setTheme] = useState(defaultTheme)
    const setAndSaveTheme = (theme) => {
        setTheme(theme)
        document.documentElement.classList.remove('light',
            'dark')
        document.documentElement.classList.add(theme)
        setCookie('theme', theme)
    }
    const toggleTheme = () => {
        setAndSaveTheme(theme == 'dark' ? 'light' : 'dark')
    }

    return { theme, toggleTheme }
}

export default useDarkMode