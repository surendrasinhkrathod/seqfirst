import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArticleJsonLd } from "next-seo";

import styles from "../styles/header.module.scss";

import Logo from "../images/logo-seqfirst.svg";
import DropdownCaret from "../images/icon-dropdown-caret.svg";
import MobileMenu from "../images/icon-mobile-menu.svg";
import MobileMenuClose from "../images/icon-clear-x.svg";
import LoginIcon from "../images/icon-login.svg";

const Header = () => {
  const router = useRouter();

  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;
  const adminPortalUrl = `${process.env.NEXT_PUBLIC_ADMIN_PORTAL_URL}`;
  const participantLogin = `${process.env.NEXT_PUBLIC_PARTICIPANT_LOGIN}`;
  const adminLogin = `${process.env.NEXT_PUBLIC_ADMIN_LOGIN}`;

  useEffect(() => {
    let size = window.innerWidth;
    const navLinks = document.querySelectorAll(".nav-link");

    const updateWindowDimensions = () => {
      size = window.innerWidth;
    };

    function setLinkAttr() {
      if (size > 992) {
        navLinks.forEach((link) => {
          link.removeAttribute("data-bs-toggle");
          link.removeAttribute("data-bs-target");
        });
      } else {
        navLinks.forEach((link) => {
          link.setAttribute("data-bs-toggle", "collapse");
          link.setAttribute("data-bs-target", "#mobileNav");
        });
      }
    }

    setLinkAttr();

    window.addEventListener("resize", () => {
      updateWindowDimensions();
      setLinkAttr();
    });
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const linkTarget = e.target as HTMLAnchorElement;
    router.push(linkTarget.href);
  };

  return (
    <>
      <ArticleJsonLd
        useAppDir={false}
        type="Article"
        url={baseUrl}
        title="SeqFirst"
        images={[
          `${baseUrl}/images/logo-seqfirst.svg`,
        ]}
        description="Increasing access to a precise genetic diagnosis"
        datePublished="2023-08-24"
        authorName="SeqFirst"
      />
      <header className={`${styles.header} navbar navbar-expand-lg`}>
        <div className={`container-fluid`}>
          <Link className={`${styles.navBrand}`} href="/">
            <Logo alt={`SeqFirst logo`} />
          </Link>
          <div>
            <div className={`${styles.utility} d-none d-sm-inline-block d-lg-none`}>
              <Link href="#" data-bs-toggle="dropdown" data-bs-target="#utility-dropdown" aria-expanded="false">
                Login <DropdownCaret className={styles.loginCaret} />
              </Link>
              <div className={`${styles.dropdownMenu} dropdown-menu dropdown-menu-end`} id="utility-dropdown">
                <Link href={`${adminPortalUrl}${participantLogin}`} className={styles.dropdownMenuItem} target="_blank">
                  <LoginIcon className={styles.loginIcon} />Participant Login
                </Link>
                <Link href={`${adminPortalUrl}${adminLogin}`} className={styles.dropdownMenuItem} target="_blank">
                  <LoginIcon className={styles.loginIcon} />Admin Login
                </Link>
              </div>
            </div>
            <button className={`${styles.mobileNavButton} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#mobileNav" aria-controls="mobileNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className={`${styles.mobileNavButtonIcon} navbar-toggler-icon`}>
                <MobileMenu className={`${styles.mobileNavButtonMenu}`} />
                <MobileMenuClose className={`${styles.mobileNavButtonClose}`} />
              </span>
            </button>
          </div>
          <nav className={`${styles.navigation} collapse navbar-collapse`} id="mobileNav">
            <Link href="/" className={router.pathname == "/" ? `${styles.active} nav-link` : "nav-link"} onClick={handleClick}>About SeqFirst</Link>
            <div className={styles.dropdown}>
              <Link href="#" className={router.pathname == "/seqfirstnewborns" || router.pathname == "/seqfirstddi" ? `${styles.active} d-none d-lg-flex` : "d-none d-lg-flex"} data-bs-toggle="dropdown" data-bs-target="#projects-dropdown" aria-expanded="false">Projects <DropdownCaret className={styles.dropdownCaret} /></Link>
              <div className={`${styles.dropdownMenu} dropdown-menu`} id="projects-dropdown">
                <Link href="/seqfirstnewborns" className={router.pathname == "/seqfirstnewborns" ? `${styles.active} ${styles.dropdownMenuItem} d-block` : `${styles.dropdownMenuItem}`}>Newborns</Link>
                <Link href="/seqfirstddi" className={router.pathname == "/seqfirstddi" ? `${styles.active} ${styles.dropdownMenuItem} d-block` : `${styles.dropdownMenuItem}`}>Developmental Differences</Link>
              </div>
              <div className={`d-block d-lg-none`}>
                <Link href="/seqfirstnewborns" className={router.pathname == "/seqfirstnewborns" ? `${styles.active} nav-link` : "nav-link"} onClick={handleClick}>Newborns</Link>
                <Link href="/seqfirstddi" className={router.pathname == "seqfirstddi" ? `${styles.active} nav-link` : "nav-link"} onClick={handleClick}>Developmental Differences</Link>
              </div>
            </div>
            <Link href="/our-team" className={router.pathname == "/our-team" ? `${styles.active} nav-link` : "nav-link"} onClick={handleClick}>Our Team</Link>
            <Link href="/learning-center" className={router.pathname == "/learning-center" ? `${styles.active} nav-link` : "nav-link"} onClick={handleClick}>Learning Center</Link>
            <Link href="/contact-us" className={router.pathname == "/contact-us" ? `${styles.active} nav-link` : "nav-link"} onClick={handleClick}>Contact</Link>
            <div className="d-sm-none">
              <div className={`${styles.utilityMobile}`}>
                <Link href={`${adminPortalUrl}${participantLogin}`} target="_blank">
                  <LoginIcon className={styles.loginIcon} />Participant Login
                </Link>
                <Link href={`${adminPortalUrl}${adminLogin}`} target="_blank">
                  <LoginIcon className={styles.loginIcon} />Admin Login
                </Link>
              </div>
            </div>
          </nav>
          <div className={`${styles.utility} collapse navbar-collapse`}>
            <div>
              <Link href="#" data-bs-toggle="dropdown" data-bs-target="#utility-dropdown" aria-expanded="false">
                Login <DropdownCaret className={styles.loginCaret} />
              </Link>
              <div className={`${styles.dropdownMenu} dropdown-menu dropdown-menu-end`} id="utility-dropdown">
                <Link href={`${adminPortalUrl}${participantLogin}`} className={styles.dropdownMenuItem} target="_blank">
                  <LoginIcon className={styles.loginIcon} />Participant Login
                </Link>
                <Link href={`${adminPortalUrl}${adminLogin}`} className={styles.dropdownMenuItem} target="_blank">
                  <LoginIcon className={styles.loginIcon} />Admin Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
