import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conrad Preston | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in AI-powered tools, high-throughput data pipelines, and React/TypeScript full-stack development.",
  keywords: [
    "software engineer",
    "AI",
    "data pipelines",
    "React",
    "TypeScript",
    "AWS",
    "freelance",
  ],
  authors: [{ name: "Conrad Preston" }],
  openGraph: {
    title: "Conrad Preston | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in AI-powered tools, high-throughput data pipelines, and React/TypeScript full-stack development.",
    url: "https://conradpreston.dev",
    siteName: "Conrad Preston",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
