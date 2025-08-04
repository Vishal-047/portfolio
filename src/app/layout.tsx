import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Vishal Singh - Software Developer & Cybersecurity Enthusiast",
  description: "Professional portfolio of Vishal Singh, a software developer and cybersecurity enthusiast passionate about web technologies and innovative projects.",
  keywords: ["software developer", "cybersecurity", "web development", "React", "Next.js", "Python", "JavaScript"],
  authors: [{ name: "Vishal Singh" }],
  creator: "Vishal Singh",
  openGraph: {
    title: "Vishal Singh - Software Developer & Cybersecurity Enthusiast",
    description: "Professional portfolio of Vishal Singh, a software developer and cybersecurity enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased aurora-bg`}>
        {children}
      </body>
    </html>
  );
}
