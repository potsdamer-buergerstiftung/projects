import Link from "next/link";
import "../styles/globals.css";
import { Space_Grotesk } from "@next/font/google";

const spaceGrotesk = Space_Grotesk({weight: ["400", "700"], subsets: ["latin"], style: ["normal"]});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={spaceGrotesk.className}>
      <body>
        <main>
          <nav>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
