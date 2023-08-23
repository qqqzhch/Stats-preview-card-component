import { Inter, Lexend_Deca } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const LexendDeca = Lexend_Deca({
  subsets: ['latin'],
  display: 'swap',
});
/*
.text {
  font-family: var(--font-inter);
  font-weight: 200;
  font-style: italic;
}
*/
