import ContextApis from "@/src/Store/ContextApi";
import ThemeRegistry from "@/src/theme/ThemeRegistry";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <ThemeRegistry>
    <ContextApis>
      <Component {...pageProps} />
    </ContextApis>
  </ThemeRegistry>;
}
