import React from "react";
import NextHead from "next/head";
import { DefaultSeo } from "next-seo";
import CustomSeo from "../next-seo.config";

const Head = () => {
  return (
    <>
      <NextHead>
        <DefaultSeo {...CustomSeo} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.seqfirst.org" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3fb95a" />
        <meta name="msapplication-TileColor" content="#3fb95a" />
      </NextHead>
    </>
  );
}

export default Head;
