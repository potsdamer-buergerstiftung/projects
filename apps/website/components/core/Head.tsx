import { FC } from "react";
import NextHead from "next/head";
import { DefaultSeo } from "next-seo";
import config from "@config/seo.json";

const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {process.env.NODE_ENV === "production" && (
          <script
            async
            defer
            data-website-id="1b0d1b14-b2bd-4d55-bba7-103f92c44166"
            src="https://analytics.potsdamer-buergerstiftung.org/umami.js"
          ></script>
        )}
      </NextHead>
    </>
  );
};

export default Head;
