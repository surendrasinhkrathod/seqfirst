import React from "react";
import { useRouter } from "next/router";
import { NextSeo, DefaultSeo } from "next-seo";
import CustomSeo from "../next-seo.config";

import { IDevelopmentalDifferences } from "../@types/types";

import ProjectHero from "../components/project-hero";
import Faq from "../components/faq";
import FiftyFifty from "../components/fiftyfifty";

const data: IDevelopmentalDifferences = {
  hero: [{
    id: 1,
    imageUrl: '/images/di-hero.jpg',
    title: 'Developmental Differences',
  }],
  fiftyfifty: [{
    id: 1,
    imageUrl: '/images/dd-1.jpg',
    imageAlt: 'This photo',
    width: 550,
    height: 400,
    title: 'Why was my child invited to participate in SeqFirst?',
    body: '<p>Your child was invited to participate in the SeqFirst research study because:</p><ul><li>they were recently found to have a developmental difference,</li><li>their developmental difference could be explained by a genetic condition, and</li><li>they are under 3 years old.</li></ul><p>Children with developmental differences usually go through many evaluations and tests before they are offered genetic testing. This means that finding a genetic cause for their developmental difference (a precise genetic diagnosis) is often complicated, expensive, and takes a lot of time.</p>'
  },
  {
    id: 2,
    imageUrl: '/images/dd-2.jpg',
    imageAlt: 'This photo',
    width: 550,
    height: 400,
    title: 'How could SeqFirst help my family?',
    body: '<p>By providing genetic testing earlier and to more children, SeqFirst hopes to increase the number of families who have access to a precise genetic diagnosis.</p><p>Having a precise genetic diagnosis may:</p><ul><li>help find the best treatments,</li><li>reduce unnecessary testing and treatments,</li><li>allow parents to make informed family planning choices, and</li><li>give families, doctors, and teachers a better understanding of what to expect as a child grows up. </li></ul>'
  },
  {
    id: 3,
    imageUrl: '/images/dd-3.jpg',
    imageAlt: 'This photo',
    width: 550,
    height: 400,
    title: 'What does SeqFirst involve?',
    body: '<p>To explore the long-term benefits of early genetic testing, SeqFirst families participate in the study for 2 years. Over that time, your family may be asked to:</p><ul><li>answer questions about your child’s health, development, and medical bills, </li><li>give a sample of blood or spit from your child and from you (i.e., parents), and</li><li>visit with a genetics doctor.</li></ul><p>If you decide to participate in SeqFirst, you can leave the research study at any time.</p>'
  }],
  FAQ: [{
    id: 1,
    title: 'Other FAQs',
    imageUrl: '/images/ddi-faq-icon.png',
    body: [{
      headline: 'What type of genetic test is done in SeqFirst?',
      body: 'The genetic test used in SeqFirst is called “whole genome sequencing”. This test is able to look at nearly all of someone’s genetic information. Children in SeqFirst may receive whole genome sequencing either immediately after signing up or at the end of the study. This will help us to learn more about the impact of whole genome sequencing. You can learn more about this genetic test in our <a href="/learning-center">Learning Center</a>.',
    },
    {
      headline: 'Will SeqFirst find a reason for my child’s developmental concerns?',
      body: 'Not necessarily. Genetic testing through SeqFirst (or outside of SeqFirst) might not find a genetic cause for your child’s developmental differences. This may mean that there is a genetic cause for your child’s developmental difference that hasn’t been discovered yet, or there may not be a genetic cause at all.',
    },
    {
      headline: 'What happens if we decide not to participate in SeqFirst?',
      body: 'Your child will receive routine care if you don’t participate in SeqFirst. This may or may not include genetic testing, depending on if your child’s doctors think that genetic testing could be helpful for them. If you have questions about what routine care looks like for your child, we encourage you to speak with their doctors.',
    }]
  }]
}

const DevelopmentalDifferences = () => {
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

      <div>
        {data?.hero?.map(hero => (
          <ProjectHero
            projectHero={hero}
            icon='ddi'
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
      </div>
    </>
  );
}

export default DevelopmentalDifferences;
