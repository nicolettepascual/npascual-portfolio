import "tailwindcss/tailwind.css";
import "@/styles/main.css";

import { AppProps } from "next/app";
import { Cloudinary } from "@cloudinary/url-gen";

export default function App({ Component, pageProps }: AppProps) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dhxirx75d",
    },
  });

  return <Component {...pageProps} />;
}
