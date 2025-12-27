import { createContext,useContext } from "react";

export const ThemeContext  = createContext({
    themeMode:"light",
    darkTheme :()=>{},
    lightTheme :()=>{},
})



export const ThemeProvider = ThemeContext.Provider


// hmne ye esliye likha kyoki like in previous project hme 2 chhije import krni pdti thi (useConext and user context) but abb hmne ise ek hook me wrap kr diya orr bs ek hook ko hr jgh import kr lenge
export default function useTheme(){
    return useContext(ThemeContext)
}