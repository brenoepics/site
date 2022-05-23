import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Sophia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default App;
