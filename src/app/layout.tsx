import "./globals.css";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Nicolette Pascual",
  description:
    "A custom-built portfolio website for a web developer, featuring a variety of components, including an experience timeline, a skills section, and a contact footer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-D8E24n/Lw7Jv0nV0U7oYp3zcZv4LsmeRuQE+3XE3f5pAeYYGDMN0eNwxE0sso5DJOz0Jr8cC2kHgi1kbQbpYiQ=="
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${roboto.variable} ${justAnotherHand.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
