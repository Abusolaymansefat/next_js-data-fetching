import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Nabvar from "./components/Nabvar";

// ✅ Font config
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Default site metadata
export const metadata = {
  title: {
    default: "Learning Next js",
    template: "%s | Learning Next js",
  },
  keywords: ["next.js", "React", "JavaScript", "Learning", "playGround"],
  description: "Trying to learn Next.js as best as we can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
      <body className="antialiased font-sans">
        <Nabvar />
        <main className="min-h-screen px-4 py-8">{children}</main>
        <footer className="bg-slate-800 text-white py-6 mt-10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg font-medium">🚀 Awesome Next.js Project</p>
            <p className="text-sm text-gray-300 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
