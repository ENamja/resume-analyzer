import type { Metadata } from "next";
import "./globals.css";
import NavBarComponent from "./NavBarComponent";

export const metadata: Metadata = {
  title: "AI Resume Analyzer",
  description: "Compare resumes against a job description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"flex items-center w-screen min-h-screen bg-[#121212] pt-16"}
      >
        <NavBarComponent></NavBarComponent>
        {children}
      </body>
    </html>
  );
}
