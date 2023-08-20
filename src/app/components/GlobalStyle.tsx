'use client';
import { Inter } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const GlobalStyle = createGlobalStyle`
body{
 font-family : ${inter.style.fontFamily};
 background-color:green;
}
`;

export default GlobalStyle;
