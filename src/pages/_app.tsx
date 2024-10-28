import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
export default function App({ Component, pageProps }: AppProps) {
  return <>
      <Script
        src="https://tma-demo.dmtp.tech/sdk/0.0.7/bec.js?walletAddress=39oXQfuzAVeV2QaqYzmAWC8w9sgl7Bvvhu%2FnrBf2bYw%3D"
        strategy="afterInteractive" // Loads the script after the page is interactive
      />
     <Component {...pageProps} />;
  </>
 
}
