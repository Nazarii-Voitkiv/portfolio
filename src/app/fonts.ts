import { Ubuntu, Titillium_Web } from 'next/font/google';

export const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-ubuntu',
});

export const titilliumWeb = Titillium_Web({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
    variable: '--font-titillium',
});