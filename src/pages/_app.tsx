import "tailwindcss/tailwind.css";
import "@/styles/main.css";

import { AppProps } from "next/app";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});

const taytex = localFont({
  src: [
    {
      path: "../../public/fonts/Taytex.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-handwriting",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-handwriting: ${taytex.style.fontFamily};
          --font-montserrat: ${montserrat.style.fontFamily};
        }
      `}</style>
      <main
        className={`${montserrat.variable} ${taytex.variable} font-sans`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
