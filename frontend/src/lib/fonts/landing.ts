import { Archivo, Jockey_One, Tiny5 } from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "800"],
  display: "swap",
});

export const jockeyOne = Jockey_One({
  subsets: ["latin"],
  variable: "--font-jockey",
  weight: "400",
  display: "swap",
});

export const tiny5 = Tiny5({
  subsets: ["latin"],
  variable: "--font-tiny5",
  weight: "400",
  display: "swap",
});

export const landingFontVariables = `${archivo.variable} ${jockeyOne.variable} ${tiny5.variable}`;
