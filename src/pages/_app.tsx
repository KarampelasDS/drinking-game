import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { LangProvider } from "@/components/LangContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <LangProvider>
        <Navbar currentPage={router.pathname} />
        <Component {...pageProps} />
      </LangProvider>
    </>
  );
}
