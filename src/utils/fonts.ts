import { Merriweather, Montserrat } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap'
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

const montserrat400 = Montserrat({ 
  subsets: ['latin'],
  weight: '400' 
});

const montserrat700 = Montserrat({ 
  subsets: ['latin'],
  weight: '700' 
});

export { merriweather, montserrat, montserrat400, montserrat700 };
