"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { IHomeHero } from "../@types/types";

import styles from "../styles/home-hero.module.scss";

const EnrollHero = ({ enrollHero }: { enrollHero: IHomeHero }) => {
  const searchParams = useSearchParams();
  const location = searchParams.get('location');
  const enrollDestination = `${process.env.NEXT_PUBLIC_ADMIN_PORTAL_URL}/enrollfirstparent?location=${location}`;

  return (
    <>
      <div className={styles.homeHero} style={{ backgroundImage: `url(${enrollHero.imageUrl})` }}>
        <div className={'container h-100'}>
          <div className={styles.homeHeroTextBoxWrap}>
            <div className={styles.homeHeroTextBox}>
              <h1 className={'title-hero'}>{enrollHero.title}<span>{enrollHero.title2}</span></h1>
              <Link href={enrollDestination} target="_blank" className={'btn feature'}>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EnrollHero;
