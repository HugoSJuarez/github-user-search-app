import { createContext, useState, useContext} from "react";

export const ThemeContext = createContext(null);
export const ThemeSetContext = createContext(null);

export function ThemeProvider({children}){
    const [theme, setTheme] = useState("dark");

    return(
        <ThemeContext.Provider value={theme}>
            <ThemeSetContext value={setTheme}>
                {children}
            </ThemeSetContext>
        </ThemeContext.Provider>
    );

}

export function useTasks() {
    return useContext(ThemeContext);
}
  
export function useTasksDispatch() {
    return useContext(ThemeSetContext);
}