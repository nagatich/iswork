import { createGlobalStyle } from 'styled-components'
import { up } from 'styled-breakpoints'

export default createGlobalStyle`
  * {
    /* фикс шрифта для safari IOS 14+ */
    -webkit-locale: auto;
  }

  body,
  html,
  #root {
    height: 100%;
  }

  html {
    font-size: ${({ theme }) => theme.fontSizeGlobal.regular};
    ${up('md')} {
      font-size: ${({ theme }) => theme.fontSizeGlobal.xl};
    }
    ${up('xl')} {
      font-size: ${({ theme }) => theme.fontSizeGlobal.xxl};
    }
    ${up('xxl')} {
      font-size: ${({ theme }) => theme.fontSizeGlobal.regular};
    }
  }

  body {
    background-color: ${(props) => props.theme.body.bg};
    color: ${(props) => props.theme.body.color};
    font-family: ${(props) => props.theme.body.fontFamily};
    font-size: 1rem;
    font-weight: ${(props) => props.theme.body.fontWeight};
    margin: 0;
    padding: 0;
    line-height: 1.65;
    overflow-x: hidden;
    &.fixed {
      overflow: hidden;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: 1.2;
  }
  
  p {
    margin: 0;
  }
  
  a {
    color: ${(props) => props.theme.textColor.base};
    text-decoration: none;
    &:focus {
      color: ${(props) => props.theme.textColor.base};
    }
  }
  
  img {
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 1rem;
  }
  
  svg {
    display: block;
  }
  
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    font-weight: inherit;

    &:focus {
      outline: none;
    }
  }

  *:focus {
    outline: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`
