import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme["blue"]};
    }

    body {
        background-color: ${props => props.theme["base-background"]};
        color:${props => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textearea, button {
        font: 400 1rem 'Nunito', sans-serif;//define o weight, width e por fim a familia da fonte.
    }
`