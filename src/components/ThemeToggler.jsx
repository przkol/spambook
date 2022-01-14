import { useContext } from "react"
import { themeToggler } from "../App"
import { StyledThemeToggler } from "./styled/ThemeToggler.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export const ThemeToggler=()=>{

    const toggleTheme=useContext(themeToggler)

return(
    <StyledThemeToggler onClick={toggleTheme.toggleFunction}>
        <FontAwesomeIcon icon={toggleTheme.themeFlag? faSun:faMoon} />

    </StyledThemeToggler>
)

}