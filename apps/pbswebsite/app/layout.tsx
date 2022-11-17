import "../styles/globals.css";
import Head from "next/head";

import { Space_Grotesk } from "@next/font/google";

const font = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <style
          dangerouslySetInnerHTML={{__html: `
          :root {
            --font-header: ${font.style.fontFamily};
          }
        `}}
        ></style>
      </head>
      <body>
        <main>
          <nav></nav>
          {children}
        </main>
      </body>
    </html>
  );
}
