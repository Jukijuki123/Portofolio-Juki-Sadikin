import "./globals.css";

export const metadata = {
  title: "Juki Sadikin",
  description: "Portfolio of Juki Sadikin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logoJS.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
