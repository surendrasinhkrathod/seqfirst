import React from "react";
import { useRouter } from "next/router";
import { NextSeo, DefaultSeo } from "next-seo";
import CustomSeo from "../next-seo.config";

import EnrollHero from "../components/enroll-hero";
import VideoIntro from "../components/video-intro";
import TextColumn from "../components/text-column";

import { IEnroll } from "../@types/types";

const data: IEnroll = {
  hero: [{
    id: 1,
    imageUrl: '/images/home-hero.jpg',
    title: 'Increasing access to a',
    title2: 'precise genetic diagnosis',
    buttonLabel: 'Get Started'
  }],
  videoIntro: [{
    id: 1,
    sections: [{
      headline: 'Welcome to SeqFirst',
      body: 'SeqFirst is a research study that aims to increase access to genetic testing for children with a variety of health conditions. Genetic testing is used to find the exact genetic changes (i.e., a precise genetic diagnosis) that underlie a child’s health condition. This information can help determine what is the best way to care for a child, what sort of challenges to expect, and how to best treat such challenges. We want to make it easier to get genetic testing and to get it quickly.',
    }],
    videoUrl: 'https://www.youtube.com/watch?v=xHD_nbMkce4',
  }],
  textColumn: [{
    id: 1,
    title: 'Why am I being asked to participate in SeqFirst?',
    description: 'You are being asked to participate in SeqFirst because your child is receiving care in the neonatal intensive care unit (NICU), and genetic testing might help explain their health condition.',
  }, {
    id: 2,
    title: 'How could a precise genetic diagnosis affect my child?',
    description: 'A precise genetic diagnosis might help your child’s NICU team provide better care by determining what medications to use, the type of doctors to involve, and whether certain types of procedures might be necessary. It might also help predict how your child will grow and develop and help plan for their future care needs. A precise genetic diagnosis may allow you to learn how likely it is to have another baby in the future with the same medical condition.',
  }, {
    id: 3,
    title: 'What happens if I participate in SeqFirst?',
    description: '<p>If you want to participate in SeqFirst, click on the “Get Started” button. You will be asked to create an account on this site, watch some short educational videos, and sign a consent form for your child and for you. The whole process takes about 20 minutes. Next, a blood sample will be obtained from your child and both genetic parents (if available). These samples will be used to do whole genome sequencing. Results will be returned to you and your NICU team in 1-2 weeks.</p> <p>If you would like to learn more about SeqFirst before creating an account, <a href="/learning-center" target="_blank">click here</a> to watch some short educational videos. Please note that even if you watch these videos before you make your account, you will be asked to watch them again before signing the consent form.</p>',
  }, {
    id: 4,
    title: 'What happens if I don’t participate in SeqFirst? ',
    description: 'Participating in SeqFirst is voluntary. If you don’t join SeqFirst, your child will continue to receive the same medical care.',
  }]
}

const Enroll = () => {
  const router = useRouter();
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <>
      <DefaultSeo {...CustomSeo} />
      <NextSeo
        title="Enroll"
        openGraph={{
          url: `${baseUrl}${router.pathname}`,
        }}
      />

      {data?.hero?.map(hero => (
        <EnrollHero
          enrollHero={hero}
          key={hero?.id}
        />
      ))}

      {data?.videoIntro?.map(videoIntro => (
        <VideoIntro
          videoIntro={videoIntro}
          key={videoIntro.id}
        />
      ))}

      <TextColumn
        textColumn={data.textColumn[0]}
        border={'standard'}
        key={data.textColumn[0].id}
      />

      <TextColumn
        textColumn={data.textColumn[1]}
        border={'standard'}
        key={data.textColumn[1].id}
      />

      <TextColumn
        textColumn={data.textColumn[2]}
        border={'sectionBlueDoubleLeft sectionBlueDoubleLeft--enroll'}
        key={data.textColumn[2].id}
      />

      <TextColumn
        textColumn={data.textColumn[3]}
        border={'sectionWhiteDoubleRight'}
        key={data.textColumn[3].id}
      />
    </>
  );
}

export default Enroll;
