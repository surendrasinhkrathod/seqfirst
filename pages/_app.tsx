import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { Anuphan } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/_global.scss";

import Head from "../components/head";
import Header from "../components/header";
import Footer from "../components/footer";
import HeaderEnroll from "../components/header-enroll";
import FooterEnroll from "../components/footer-enroll";

const anuphan = Anuphan({
  subsets: ['latin'],
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const router = useRouter();

  return (
    <>
      <main className={anuphan.className}>
        <Head />
        {router.pathname == "/enroll" ? <HeaderEnroll /> : <Header />}
        <div className={router.pathname == "/enroll" ? 'page-wrap page-wrap--enroll' : 'page-wrap'}>
          <Component {...pageProps} />
          <Analytics />
        </div>
        {router.pathname == "/enroll" ? <FooterEnroll /> : <Footer />}
      </main>
    </>
  );
}

export default MyApp;
