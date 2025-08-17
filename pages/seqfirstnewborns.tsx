import React from "react";

import { useRouter } from "next/router";
import { NextSeo, DefaultSeo } from "next-seo";
import CustomSeo from "../next-seo.config";

import ProjectHero from "../components/project-hero";
import FiftyFifty from "../components/fiftyfifty";
import { INewborn } from "../@types/types";
import Faq from "../components/faq";
import LearnMore from "../components/learn-more";

const data: INewborn = {
  hero: [{
    id: 1,
    imageUrl: '/images/newborns-hero-flipped.jpg',
    title: 'Newborns',
  }],
  fiftyfifty: [{
    id: 1,
    imageUrl: '/images/newborn-1.png',
    imageAlt: 'This photo',
    width: 550,
    height: 400,
    title: 'Why was my child invited to participate?',
    body: '<p>Your child was invited to participate in the SeqFirst research study because:</p><ul><li>they are in the neonatal intensive care unit (NICU),</li><li>their health concerns could be explained by a genetic condition, and</li><li>they are less than 6 months old.</li></ul><p>We know that having access to high quality and rapid genetic testing in newborns can improve health care for children like your own. We want to make finding a genetic cause for a child’s health concerns (a precise genetic diagnosis) easier to access for families.</p>'
  },
  {
    id: 2,
    imageUrl: '/images/newborn-2.png',
    imageAlt: 'This photo',
    width: 550,
    height: 400,
    title: 'How could SeqFirst help families like my own?',
    body: '<p>Having a precise genetic diagnosis may:</p><ul><li>help identify the best treatments,</li><li>reduce unnecessary testing and treatments,</li><li>allow parents to make informed family planning choices, and</li><li>give families, doctors, and teachers a better understanding of what to expect as your child grows up.</li></ul><p>Many families have limited access to a precise genetic diagnosis. SeqFirst is looking at how healthcare teams can increase access to a precise genetic diagnosis for families who may have limited access to this type of care.</p>'
  },
  {
    id: 3,
    imageUrl: '/images/newborn-3.jpg',
    imageAlt: 'This photo',
    width: 550,
    height: 400,
    title: 'What does SeqFirst involve?',
    body: '<p>To explore the long-term benefits of early genetic testing, SeqFirst families participate in the study for 18 months. Over that time, your family may be asked to:</p><ul><li>answer questions about your child’s health, development, and medical bills, </li><li>give a sample of blood or spit from your child and from you (i.e., parents), and</li><li>speak with a genetics doctor or genetic counselor.</li></ul><p>If you decide to participate in SeqFirst, you can leave the research study at any time.</p>'
  }],
  FAQ: [{
    id: 1,
    title: 'Other FAQs',
    imageUrl: '/images/newborns-faq-icon.png',
    body: [{
      headline: 'What type of genetic test is done in SeqFirst?',
      body: 'The genetic test used in SeqFirst is called “whole genome sequencing”. This test is able to look at nearly all of someone’s genetic information. You can learn more about this genetic test in our <a href="/learning-center">Learning Center</a>.',
    },
    {
      headline: 'Will SeqFirst find a reason for my child’s hospitalization?',
      body: 'Not necessarily. Genetic testing through SeqFirst (or outside of SeqFirst) might not find a genetic cause for your child’s health concerns. This may mean that there is a genetic cause for your child’s health concerns that hasn’t been discovered yet, or there may not be a genetic cause at all.',
    },
    {
      headline: 'What happens if we decide not to participate in SeqFirst?',
      body: 'Your child will receive routine care if you don’t participate in SeqFirst. This may or may not include genetic testing, depending on if your child’s doctors think that genetic testing could be helpful for them. If you have questions about what routine care looks like for your child, we encourage you to speak with their doctors.',
    }]
  }],
  learnMore: [{
    id: 1,
    headline: 'Where can I learn more?',
    body: '<p class="large">We’ve made some short modules to help explain what being a part of this study looks like for families. These modules are part of the sign-up process for families in the SeqFirst “Newborns” program.</p>',
    linkText: '',
    linkUrl: '',
    tile: [{
      imageUrl: '/images/preview1-participant-tasks.jpg',
      title: 'Participant Tasks',
      body: 'Learn more about what it looks like to be a participant in the SeqFirst “Newborns” program.',
      videoUrl: 'https://www.youtube.com/watch?v=p4BRvZyk8tM',
    }, {
      imageUrl: '/images/preview2-genetic-testing.jpg',
      title: 'Genetic Testing',
      body: 'Learn more about whole genome sequencing.',
      videoUrl: 'https://www.youtube.com/watch?v=RHYGP2ocbXw',
    }, {
      imageUrl: '/images/preview3-test-results.jpg',
      title: 'Genetic Test Results',
      body: 'Learn more about the types of results that participants might receive.',
      videoUrl: 'https://www.youtube.com/watch?v=ES3m0dtKJJk',
    }, {
      imageUrl: '/images/preview4-privacy.jpg',
      title: 'Privacy',
      body: 'Learn more about privacy related to genetic test results.',
      videoUrl: 'https://www.youtube.com/watch?v=aooLivTXtk8',
    }, {
      imageUrl: '/images/preview5-data-sharing.jpg',
      title: 'Data Sharing and Future Studies',
      body: 'Learn more about how participant data is handled in SeqFirst.',
      videoUrl: 'https://www.youtube.com/watch?v=uk0CwDheEDI',
    }, {
      imageUrl: '/images/preview6-seqfirst-family.jpg',
      title: 'Is SeqFirst a Good Fit for My Family?',
      body: 'Learn more about things to consider as a possible participant in SeqFirst.',
      videoUrl: 'https://www.youtube.com/watch?v=bzRZYPKMTbk',
    }]
  }],
}

const Newborn = () => {
  const router = useRouter();
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <>
      <DefaultSeo {...CustomSeo} />
      <NextSeo
        title={data.hero[0].title}
        openGraph={{
          url: `${baseUrl}${router.pathname}`,
        }}
      />

      {data?.hero?.map(hero => (
        <ProjectHero
          projectHero={hero}
          icon='newborns'
          key={hero?.id}
        />
      ))}
      <FiftyFifty
        fiftyFifty={data.fiftyfifty[0]}
        textLeft={true}
        border={'negative sectionBlueLeft'}
        key={data.fiftyfifty[0].id}
      />

      <FiftyFifty
        fiftyFifty={data.fiftyfifty[1]}
        textLeft={false}
        border={'sectionWhiteRight'}
        key={data.fiftyfifty[1].id}
      />

      <FiftyFifty
        fiftyFifty={data.fiftyfifty[2]}
        textLeft={true}
        border={'sectionBlueLeft'}
        key={data.fiftyfifty[2].id}
      />

      {data?.FAQ?.map(faq => (
        <Faq
          faq={faq}
          textLeft={false}
          key={faq.id}
        />
      ))}

      {data?.learnMore?.map(learnMore => (
        <LearnMore
          learnMore={learnMore}
          key={learnMore?.id}
          border={'sectionBlueLeft'}
        />
      ))}
    </>
  );
}

export default Newborn;
