import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shishuai-y.github.io"),
  title: "杨士帅 | Shishuai Yang",
  description:
    "杨士帅，郑州航空工业管理学院讲师，研究方向包括自动化漏洞挖掘、LLM 驱动安全分析、移动生态安全和物联网系统安全。",
  authors: [{ name: "Shishuai Yang" }],
  keywords: [
    "Shishuai Yang",
    "杨士帅",
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
    title: "杨士帅 | Shishuai Yang",
    description: "Cybersecurity Researcher · Lecturer",
    url: "https://shishuai-y.github.io",
    siteName: "Shishuai Yang",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "zh_CN",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
