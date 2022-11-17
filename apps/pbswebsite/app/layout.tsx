import Link from "next/link";
import "../styles/globals.css";
import { Space_Grotesk } from "@next/font/google";

const spaceGrotesk = Space_Grotesk();

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
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
