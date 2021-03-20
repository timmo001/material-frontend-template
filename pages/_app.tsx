import { ReactElement, useEffect } from "react";
import { AppProps } from "next/app";

import "../assets/css/style.css";
import "fontsource-roboto";

function App({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    document.documentElement.lang = "en-GB";
  }, []);

  return <Component {...pageProps} />;
}

export default App;
