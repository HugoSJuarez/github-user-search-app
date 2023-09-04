import { createContext, useState, useContext} from "react";

export const ThemeContext = createContext(null);
export const ThemeSetContext = createContext(null);

export function ThemeProvider( { children }){
    const [theme, setTheme] = useState("dark");


    return(
        <ThemeContext.Provider value={theme}>
            <ThemeSetContext.Provider value={setTheme}>
                {children}
            </ThemeSetContext.Provider>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
  
export function useSetTheme() {
    return useContext(ThemeSetContext);
}