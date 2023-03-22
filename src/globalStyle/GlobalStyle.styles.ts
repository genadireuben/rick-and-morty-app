import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 

    .grecaptcha-badge { 
        visibility: hidden;
    }
    
    :root {
        --headerHeight: 70px;
        --textGrey: #333;
    }

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #fff
        font-size: 14px;
        font-family: 'Roboto';
        font-style: normal;
        color: #000;
     
    }

    body::-webkit-scrollbar {
        width: 8px;
    }
 
    body::-webkit-scrollbar-thumb {
        background-color: #1abed6;
        border-radius: 8px;
    }


`;
