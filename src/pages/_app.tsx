// src/pages/_app.tsx

import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { ThemeProvider } from "~/lib/theme-provider";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>React Duolingo Clone</title>
        <meta
          name="description"
          content="Duolingo web app clone written with React"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0" />
        <link rel="manifest" href="/app.webmanifest" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
