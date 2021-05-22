import {} from 'styled-components';
interface ThemeType{
    body:string,
    text:string,
    toggleBorder:string,
    gradient:string,
    isLight:boolean,
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}