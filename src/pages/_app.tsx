import "@/styles/globals.css";
import type { AppProps } from "next/app";
import KofiWidget from "@/components/KofiWidget";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { LangProvider } from "@/components/LangContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <title>Bottoms Up!</title>
      <LangProvider>
        <Navbar currentPage={router.pathname} />
        <Component {...pageProps} />
        <KofiWidget />
      </LangProvider>
    </>
  );
}
