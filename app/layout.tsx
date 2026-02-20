import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$NICHIJOU — My Ordinary Life, On Chain",
  description: "The most chaotic everyday moments, tokenized. A Solana memecoin inspired by Nichijou.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
