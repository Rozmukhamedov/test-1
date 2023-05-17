import "@/styles/globals.css";
import type { AppProps } from "next/app";
import variables from "../styles/variables.module.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div color={variables.primaryColor}>
      <Component {...pageProps} />
    </div>
  );
}
