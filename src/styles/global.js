import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        text-decoration: none;
    }

    :root{
        --purple: #403CAA;
        --green: #11995E;
        --grey100: #333333;
        --grey50: #999999;
        --grey0: #F5F5F5;
        --red: #FF0000;

    }

    body, input, button, h1,h2,h3,h4,h4,p{
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    button{
        cursor: pointer;
    }
`;
