import { createContext,useContext } from "react";
export const ThemeContext=createContext({
    themeMode:"Light",
    darkTheme:()=>{

    },
    lightTheme:()=>{

    },
})
export const ThemeProvider=ThemeContext.Provider
// custom hooks-> 
export default function useTheme(){
    return useContext(ThemeContext)
}