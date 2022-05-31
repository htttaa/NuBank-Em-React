import { createGlobalStyle } from "styled-components";

// Em projetos React ou NextJS, ou React Native, existem várias formas de usarmos estilo CSS. Como:
// Import file.css e chamar com o ClassName; Register.module.css comum para NextJS - CSS Module; Sass - é um pré-processador CSS. .sass ou .scss compila um css final; Styled Components


export default createGlobalStyle `
    *{
        box-sizing: border-box;  
        font-family: 'Roboto', 'Lato', 'Open Sans', sans-serif;
    }

        html, body{
            margin:0;
            padding: 0;
            outline:0;
    }

    input[type='text'],
    input[type='tel'],
    input[type='email']
    input[type='password']{
        border: none;
        width: 100%;
        max-width: 500px;
        border-bottom: 1px solid #333;
        outline: 0;
        padding-bottom: 5px;
        margin-bottom: 10px;
        &:focus {  
            border-color: green;
            caret-color: green;
            color: green;
        }
    }
`

// o & significa selecionar o que é preciso, por exemplo: ali em cima o & está direcionado ao text, tel e email.