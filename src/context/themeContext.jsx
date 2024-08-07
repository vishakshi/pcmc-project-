import { createContext, useContext, useState } from "react";

const MyThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [theme,setTheme] = useState("saqlain");
    return(
        <MyThemeContext.Provider value={{theme}}>
            {children}
        </MyThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(MyThemeContext);
}


