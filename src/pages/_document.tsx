import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
         <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive" // Loads the script after the page is interactive
          onLoad={() => {
          console.log("Telegram Web App loaded");
          }}
        />
      </body>
    </Html>
  );
}
