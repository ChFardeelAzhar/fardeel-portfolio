import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GutterFrame } from "@/components/GutterFrame";
import { BottomBlurOverlay } from "@/components/BottomBlurOverlay";
import { FloatingResumeButton } from "@/components/FloatingResumeButton";

export const metadata: Metadata = {
  title: "Fardeel Azhar — Android Engineer & AI Automation",
  description:
    "Portfolio of Fardeel Azhar, Android Engineer specializing in Kotlin, Jetpack Compose, Clean Architecture, Multi-Module engineering, and Agentic AI developer pipelines.",
  keywords: [
    "Fardeel Azhar",
    "Android Engineer",
    "Kotlin",
    "Jetpack Compose",
    "Clean Architecture",
    "Multi-Module",
    "Agentic AI",
    "CrewAI",
    "Mobile Developer",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Fardeel Azhar", url: "https://github.com/ChFardeelAzhar" }],
  openGraph: {
    title: "Fardeel Azhar — Android Engineer & AI Automation",
    description:
      "Android Engineer specializing in Kotlin, Jetpack Compose, Clean Architecture, and Agentic AI developer pipelines.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>" />
      </head>
      <body className="min-h-screen flex flex-col relative selection:bg-slate-900 selection:text-white">
        <GutterFrame />
        <Navbar />
        <main id="main-content" className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
        <BottomBlurOverlay />
        <FloatingResumeButton />
      </body>
    </html>
  );
}
