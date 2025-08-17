import React from "react";
import { useRouter } from "next/router";
import { NextSeo, DefaultSeo } from "next-seo";
import CustomSeo from "../next-seo.config";

import SimpleHero from "../components/simple-hero";
import C404 from "../components/c404";

const data = { title: 'Page Not Found', description: 'The requested page could not be found.' }

export default function Custom404() {
  const router = useRouter();
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <>
      <DefaultSeo {...CustomSeo} />
      <NextSeo
        title={data.title}
        openGraph={{
          url: `${baseUrl}${router.pathname}`,
        }}
      />

      <SimpleHero
        title={data.title}
        description={data.description}
      />
      <C404 />
    </>
  );
}
