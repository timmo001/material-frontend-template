import { useEffect } from "react";
import { AppProps } from "next/app";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../assets/css/style.css";
import "fontsource-roboto";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.lang = "en-GB";
  }, []);

  return <Component {...pageProps} />;
}

export default App;
