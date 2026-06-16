import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinkar Pai | Cloud, AI & IT Systems",
  description:
    "IT Operations professional with 4+ years of enterprise experience, combining cloud infrastructure knowledge with postgraduate training in Cloud Computing and Artificial Intelligence to build reliable, production-ready systems.",
  icons: {
    icon: "/dp-favicon.svg",
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