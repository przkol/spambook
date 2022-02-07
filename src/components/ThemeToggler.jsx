import { useContext } from "react"
import { themeToggler } from "../App"
import { StyledThemeToggler } from "./styled/ThemeToggler.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

export const ThemeToggler = () => {

    const toggleTheme = useContext(themeToggler)

    return (
        <StyledThemeToggler onClick={toggleTheme.toggleFunction}>
            <p>Night mode:</p><FontAwesomeIcon icon={toggleTheme.themeFlag ? faToggleOn : faToggleOff} />

        </StyledThemeToggler>
    )

}