import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin", "cyrillic"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Юрий | Backend Developer",
  description: "Портфолио backend-разработчика (Node.js/Nest.js)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
