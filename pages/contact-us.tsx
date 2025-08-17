import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo, DefaultSeo } from "next-seo";
import CustomSeo from "../next-seo.config";

import { IContact } from "../@types/types";
import SimpleHero from "../components/simple-hero";
import ContactForm from "../components/contact-form";

import styles from "../styles/contact.module.scss";

const data: IContact = {
  pageTitle: 'Contact Us',
  heading: 'Contact options',
  body: 'Contact the SeqFirst study team to learn more about our research or find out if you qualify.',
  address: [{
    name: 'SeqFirst',
    line1: '1959 NE Pacific St.',
    line2: 'Box 357371',
    cityStateZip: 'Seattle, WA 98195'
  }],
  email: 'seqfirst@uw.edu',
  phone: '(206) 221-9335',
  phoneUrl: '2062219335',
  description: 'University of Washington Dept. of Pediatrics/ Div. of Genetic Medicine',
}

const Contact = () => {
  const router = useRouter();
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <>
      <DefaultSeo {...CustomSeo} />
      <NextSeo
        title={data.pageTitle}
        openGraph={{
          url: `${baseUrl}${router.pathname}`,
        }}
      />

      <div className={styles.contact}>
        <SimpleHero
          title={data.pageTitle}
        />
        <div className={'container'}>
          <div className={styles.contentWrapper}>
            <div className={'row'}>
              <div className={`col-12 col-lg-6 ${styles.contactInfo}`}>
                <h3 className={styles.heading}>{data.heading}</h3>
                <p className={styles.subsection}>{data.body}</p>
                <div>
                  <p className={'large'}>
                    <span className={'bold'}>{data?.address[0]?.name}</span><br></br>
                    {data?.address[0]?.line1}<br></br>
                    {data?.address[0]?.line2}<br></br>
                    {data?.address[0]?.cityStateZip}
                  </p>
                </div>
                <p className={styles.subsection}><Link href={`mailto:${data.email}`} target="_blank" className={styles.link}>{data.email}</Link></p>
                <p className={styles.subsection}><Link href={`tel:${data.phoneUrl}`} className={styles.link}>{data.phone}</Link></p>
                <p className={styles.subsection}>{data.description}</p>
              </div>
              <div className={'col-12 col-lg-6'}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
