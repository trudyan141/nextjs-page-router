import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useState , useEffect} from "react";
declare const TE;

export default function App({ Component, pageProps }: AppProps) {
   const [env, setEnv] = useState<string | null>(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const envParam = urlParams.get("env") || "prod";
    setEnv(envParam);
  }, []);
  const scriptSrc =
    env === "dev"
      ? "https://bec-dev.apps-network.net/latest/bec.js?walletAddress=QnLOYksIDhA3MfBLoRL%2ByIa8jRggeovB3NtN3d7LD7g%3D"
      : "https://bec.apps-network.net/latest/bec.js?walletAddress=QnLOYksIDhA3MfBLoRL%2ByIa8jRggeovB3NtN3d7LD7g%3D";
  return <>
    {env && <Script
      src={scriptSrc}
      strategy="afterInteractive" // Loads the script after the page is interactive
      onLoad={() => {
        if (typeof TE.onLoad === "function") {
          TE.onLoad();
        } else {
          console.error('TE.onLoad is not a function');
        }
      }}
    />}
     <Component {...pageProps} />;
  </>
 
}
