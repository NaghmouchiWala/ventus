import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ventus-fr.com"),
  title: "VENTUS — L'air d'un meilleur quotidien",
  description:
    "VENTUS conçoit des ventilateurs sur pied, de table, muraux, plafonniers et sans pales — silencieux, puissants et au design moderne.",
};

const themeInitScript = `
  try {
    var stored = localStorage.getItem('ventus-theme');
    var theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full antialiased" data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
