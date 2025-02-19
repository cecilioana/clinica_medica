import "./globals.css";
import Header from '../components/Header';

export const metadata = {
  title: "Clínica Médica",
  description: "Clínica Médica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Ana Paula Cecilio" />
        <meta name="keywords" content="médicos, clínica" />
        <link rel="icon" href="/images/hospital.png" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
