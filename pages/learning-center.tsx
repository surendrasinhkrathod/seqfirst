import React from "react";
import { useRouter } from "next/router";
import { NextSeo, DefaultSeo } from "next-seo";
import CustomSeo from "../next-seo.config";

import SimpleHero from "../components/simple-hero";
import ResourceTile from "../components/resource-tile";
import { ILearningCenter } from "../@types/types";
import LearnMore from "../components/learn-more";

const data: ILearningCenter = {
  hero: [{
    title: 'Learning Center',
    description: ''
  }],
  resources: [{
    imageUrl: '/images/resource-intro-to-genetics.png',
    title: 'Introduction to Genetics',
    body: 'Learn about DNA and whole genome sequencing.',
    url: 'https://www.my46.org/intro/what-is-genetics'
  }, {
    imageUrl: '/images/resource-genetics-glossary.png',
    title: 'Genetics Glossary',
    body: 'Find genetics related words.',
    url: 'https://www.my46.org/glossary/all'
  }, {
    imageUrl: '/images/resource-more-resources.png',
    title: 'More Resources',
    body: 'Resources by scientists, clinicians, and family support groups',
    url: 'https://www.my46.org/learning-center/more-resources'
  }],
  learnMore: [{
    id: 1,
    headline: 'Learning modules',
    body: '<p class="large">SeqFirst created six short educational modules to help explain what participating in SeqFirst looks like for families, including information about whole genome sequencing. These modules are part of the enrollment process for families in the SeqFirst "Newborns" program.</p>',
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

const LearningCenter = () => {
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

      {data.hero.map((hero, i) => {
        return (
          <SimpleHero
            title={hero.title}
            description={hero.description}
            key={i}
          />
        )
      })}
      {data?.learnMore?.map(learnMore => (
        <LearnMore
          learnMore={learnMore}
          key={learnMore?.id}
          border={'standard'}
        />
      ))}
      <section>
        <div className={'container'}>
          <div className={'row'}>
            {data.resources.map((resource, i) => {
              return (
                <ResourceTile
                  resourceTile={resource}
                  key={i}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default LearningCenter;
