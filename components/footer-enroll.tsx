"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import styles from "../styles/footer.module.scss";

import Logo from "../images/logo-seqfirst-white.svg";

const FooterEnroll = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get('location');
  const enrollDestination = `${process.env.NEXT_PUBLIC_ADMIN_PORTAL_URL}/enrollfirstparent?location=${location}`;

  return (
    <footer className={`${styles.footer} ${styles.footerEnroll}`}>
      <div className={`container-fluid`}>
        <div className={`row align-items-center`}>
          <div className={`col-6`}>
            <Logo alt={`SeqFirst logo`} />
          </div>
          <div className={`col-6 ${styles.ctaWrapper}`}>
            <Link href={enrollDestination} target="_blank" className={`button feature`}>
              Get Started
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default FooterEnroll;
