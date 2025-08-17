import React from "react";
import Link from "next/link";

import styles from "../styles/footer.module.scss";

import Logo from "../images/logo-seqfirst-white.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container-fluid`}>
        <div className={`row justify-content-between`}>
          <div className={`col-12 col-md-8 col-lg-6`}>
            <div className={`row justify-content-between`}>
              <div className={styles.innerColumn}>
                <Link href="/" className={styles.footerNavLink}>About SeqFirst</Link>
                <Link href="/seqfirstnewborns" className={styles.footerNavLink}>Newborns</Link>
                <Link href="/seqfirstddi" className={styles.footerNavLink}>Developmental Differences</Link>
              </div>
              <div className={styles.innerColumn}>
                <Link href="/our-team" className={styles.footerNavLink}>Our Team</Link>
                <Link href="/learning-center" className={styles.footerNavLink}>Learning Center</Link>
                <Link href="/contact-us" className={styles.footerNavLink}>Contact</Link>
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-4 col-lg-6`}>
            <div className={`row justify-content-between justify-content-xl-end mt-3 mt-md-0`}>
              <div className={`${styles.innerColumnRight} ${styles.contactInfo}`}>
                <p className={styles.address}>
                  SeqFirst<br></br>
                  1959 NE Pacific St.<br></br>
                  Box 357371<br></br>
                  Seattle, WA 98195
                </p>
                <Link href="tel:2062219335" target="_blank" className={styles.phone}>(206) 221-9335</Link>
              </div>
              <div className={`${styles.innerColumnRight} ${styles.brand}`}>
                <Link href="/" className={`${styles.footerLogoWrapper}  d-none d-md-block`}>
                  <Logo alt={`SeqFirst logo`} className={styles.footerLogo} />
                </Link>
                <div className={styles.privacyLinksWrapper}>
                  <hr className={`${styles.divider}  d-none d-md-block`}></hr>
                  <Link href="https://www.washington.edu/online/privacy/" target="_blank" className={styles.footerLink}>UW Privacy Statement</Link>
                  <Link href="https://www.washington.edu/online/terms/" target="_blank" className={styles.footerLink}>UW Website Terms and Conditions of Use</Link>
                  <Link href="/disclaimer" className={styles.footerLink}>Disclaimer</Link>
                </div>
              </div>
              <div className={`d-block d-md-none ${styles.logoMobile}`}>
                <Link href="/" className={styles.footerLogoWrapper}>
                  <Logo alt={`SeqFirst logo`} className={styles.footerLogo} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
