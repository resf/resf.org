import { appWithTranslation } from "next-i18next";
import PlausibleProvider from "next-plausible";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <PlausibleProvider trackOutboundLinks domain="resf.org">
        <Component {...pageProps} />
      </PlausibleProvider>
  );
}

export default appWithTranslation(MyApp);
