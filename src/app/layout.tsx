import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ventus-fr.com"),
  title: "VENTUS — L'air d'un meilleur quotidien",
  description:
    "VENTUS conçoit des ventilateurs sur pied, de table, muraux, plafonniers et sans pales — silencieux, puissants et au design moderne.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full bg-[#050505] text-[#f5f5f5]">
        {children}
      </body>
    </html>
  );
}
