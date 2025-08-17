"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import styles from "../styles/header.module.scss";

import Logo from "../images/logo-seqfirst.svg";

const HeaderEnroll = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get('location');
  const enrollDestination = `${process.env.NEXT_PUBLIC_ADMIN_PORTAL_URL}/enrollfirstparent?location=${location}`;

  return (
    <header className={`${styles.header} ${styles.headerEnroll} navbar`}>
      <div className={`container-fluid`}>
        <div className={`${styles.headerEnrollLogo}`}>
          <Logo alt={`SeqFirst logo`} />
          <span className={styles.navType}>Enroll</span>
        </div>
        <div>
          <Link href={enrollDestination} target="_blank" className={`button primary`}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderEnroll;
