import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shishuai-y.github.io"),
  title: "Shishuai Yang",
  description:
    "Shishuai Yang is a lecturer at Zhengzhou University of Aeronautics researching automated vulnerability discovery, LLM-driven security analysis, mobile ecosystems, and IoT security.",
  authors: [{ name: "Shishuai Yang" }],
  keywords: [
    "Shishuai Yang",
    "Cybersecurity",
    "Android Security",
    "Vulnerability Discovery",
    "IoT Security",
  ],
  icons: {
    icon: "./profile.jpg",
    shortcut: "./profile.jpg",
  },
  openGraph: {
    title: "Shishuai Yang",
    description: "Cybersecurity Researcher · Lecturer",
    url: "https://shishuai-y.github.io",
    siteName: "Shishuai Yang",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
