import React from "react";
import Link from "next/link";

import { IHomeHero } from "../@types/types";

import styles from "../styles/home-hero.module.scss";
import IconLogin from "../images/icon-login.svg";

const HomeHero = ({ homeHero }: { homeHero: IHomeHero }) => {
  const adminPortalUrl = `${process.env.NEXT_PUBLIC_ADMIN_PORTAL_URL}`;
  const participantLogin = `${process.env.NEXT_PUBLIC_PARTICIPANT_LOGIN}`;

  return (
    <>
      <div className={styles.homeHero} style={{ backgroundImage: `url(${homeHero.imageUrl})` }}>
        <div className={'container h-100'}>
          <div className={styles.homeHeroTextBoxWrap}>
            <div className={styles.homeHeroTextBox}>
              <h1 className={'title-hero'}>{homeHero.title}<span>{homeHero.title2}</span></h1>
              <Link href={`${adminPortalUrl}${participantLogin}`} className={'btn feature'} target="_blank">{homeHero.buttonLabel} <IconLogin /></Link>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default HomeHero;
