import { Playfair_Display, Inter } from "next/font/google";
import VideoBackground from "@/components/VideoBackground";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Ayomide Apeh — Geospatial Analyst & Developer",
  description:
    "Portfolio of Ayomide Apeh — final-year Geology student and developer specializing in GIS/remote sensing, AI systems engineering, and Web3 infrastructure.",
  keywords: ["geospatial analyst", "geology", "GIS", "remote sensing", "AI systems", "developer", "web3", "next.js", "python", "typescript"],
  openGraph: {
    title: "Ayomide Apeh — Geospatial Analyst & Developer",
    description:
      "Portfolio of Ayomide Apeh — specializing in GIS/remote sensing, AI systems, and blockchain development.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <VideoBackground />
        {children}
      </body>
    </html>
  );
}
