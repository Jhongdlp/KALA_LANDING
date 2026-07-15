import type { Metadata } from "next";
import { Anton, Archivo, JetBrains_Mono } from "next/font/google";
import KalaThemeProvider from "@/components/kala/KalaThemeProvider";
import KalaHeader from "@/components/kala/KalaHeader";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "KALA — Infrastructure. Anywhere.",
  description:
    "An open-source, mobile-first workspace for developers. SSH client, terminal, file explorer and code editor — one Flutter app for Android and Linux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <KalaThemeProvider>
          <KalaHeader />
          {children}
        </KalaThemeProvider>
      </body>
    </html>
  );
}
