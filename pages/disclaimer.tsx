import React from 'react';
import { useRouter } from "next/router";
import { NextSeo, DefaultSeo } from "next-seo";
import CustomSeo from "../next-seo.config";

import styles from "../styles/disclaimer.module.scss";
import SimpleHero from '../components/simple-hero'

const data = { title: 'Disclaimer', description: '' }

const Disclaimer = () => {
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
      <div className={`container ${styles.disclaimer}`}>
        <h3>Content Disclaimer</h3>
        <ul>
          <li>The SeqFirst website provides basic educational material in graphics, images, and text. You should not substitute information on this website for professional advice. You should never disregard or delay seeking medical advice because of what you have read on this website. All information provided in this website is for information purposes only. Although every reasonable effort is made to present current and accurate information, the SeqFirst Team and the University of Washington make no guarantees of any kind.</li>
          <li>The SeqFirst Team and the University of Washington shall not be responsible or liable, directly or indirectly, for any damage or loss resulting from any matter related to your use of this website.</li>
          <li>Health related topics found on the SeqFirst website should not be used for diagnosis purposes or be substituted for medical advice. As with any medical treatment, always consult your professional healthcare provider before beginning any new treatment. It is your responsibility to research the accuracy, completeness, and usefulness of all opinions, services, and other information found on this website, and to consult with your professional healthcare providers as to whether the information can benefit you.</li>
          <li>The SeqFirst Team and the University of Washington assume no responsibility or liability for any consequence resulting directly or indirectly for any action or inaction you take based on or made in reliance on the information, services, or material on or linked to this website.</li>
          <li>Since medical developments and advances occur frequently, this website may contain outdated material. While the SeqFirst Team makes every reasonable effort to present current and accurate information, no guarantee of any kind is made. The SeqFirst Team and the University of Washington is not liable for any damage or loss related to the accuracy, completeness or timeliness of any information contained on this website.</li>
        </ul>
        <h3>Link Disclaimer</h3>
        <ul>
          <li>Any links to external websites should not be construed as an endorsement by the SeqFirst Team or the University of Washington of the content or views of the linked materials.</li>
        </ul>
      </div>
    </>
  );
}

export default Disclaimer;
