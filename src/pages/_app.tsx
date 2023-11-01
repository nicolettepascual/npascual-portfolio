import "tailwindcss/tailwind.css";
import "@/styles/main.css";

import { AppProps } from "next/app";
import { Roboto, Just_Another_Hand } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto",
});

const justAnotherHand = Just_Another_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handwriting",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-handwriting: ${justAnotherHand.style.fontFamily};
        }
      `}</style>
      <main
        className={`${roboto.variable} ${justAnotherHand.variable} font-sans`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
