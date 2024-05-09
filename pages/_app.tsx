import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from '@/src/Components/core/layout'
import ContextApis from '@/src/store/ContextApi'

export default function App({ Component, pageProps }: AppProps) {
  return <ContextApis>
    <>
      <Component {...pageProps} />
    </>
  </ContextApis>

}


