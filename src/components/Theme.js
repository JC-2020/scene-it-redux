import React, { useState } from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import ThemeContext from '../context/ThemeContext';

const darkTheme = {
    palette: {
        type: 'dark',
    },
}

const lightTheme = {
    palette: {
        type: 'light',
    },
}

export default function Theme(props) {
    const [darkMode, setDarkMode] = useState();
    const Theme = createMuiTheme(darkMode ? darkTheme : lightTheme);
    const toggle = () => {
        setDarkMode(!darkMode);
    }
    return (
        <ThemeContext.Provider value={{
            darkMode,
            toggle
        }}>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                { props.children }
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}