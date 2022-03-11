import { FC } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { Head } from "@components/core";
import "dayjs/locale/de";

dayjs.locale("de");

import theme from "../styles/theme";

import "@fontsource/space-grotesk/index.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import dayjs from "dayjs";
import "leaflet/dist/leaflet.css";
import { ManagedUIContext } from "@components/context";
import { RecoilRoot } from "recoil";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head />
      <ChakraProvider theme={theme}>
        <ManagedUIContext>
          <RecoilRoot>
            <Layout pageProps={pageProps}>
              <AnimatePresence
                exitBeforeEnter
                onExitComplete={handleExitComplete}
              >
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </Layout>
          </RecoilRoot>
        </ManagedUIContext>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
