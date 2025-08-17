'use client'

import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Modal from "react-modal";
import Link from "next/link";
import { NextSeo, DefaultSeo } from "next-seo";

import HomeHero from "../components/home-hero";
import Partners from "../components/partners";
import Programs from "../components/programs";
import BioTile from "../components/bio-tile";
import VideoIntro from "../components/video-intro";
import LearnMore from "../components/learn-more";
import customSeo from "../next-seo.config";

import { IHome } from "../@types/types";

import Arrow from "../images/icon-arrow.svg";

const data: IHome = {
  hero: [{
    id: 1,
    imageUrl: '/images/home-hero.jpg',
    title: 'Increasing access to a',
    title2: 'precise genetic diagnosis',
    buttonLabel: 'Participant Login'
  }],
  videoIntro: [{
    id: 1,
    sections: [{
      headline: 'What is SeqFirst?',
      body: 'SeqFirst is a research study. We want to know if doing a genetic test called “whole genome sequencing” as soon as a child is found to have a health condition is more useful than standard testing and referral to specialists.',
    }, {
      headline: 'What is a precise genetic diagnosis?',
      body: 'If someone has a precise genetic diagnosis, it means that they have specific genetic differences that explain their health condition. Finding a precise genetic diagnosis for a child can help to plan for their future needs and take advantage of new treatments. Learn more about SeqFirst and the importance of a precise genetic diagnosis in the video below.',
    }],
    videoUrl: 'https://www.youtube.com/watch?v=xHD_nbMkce4',
  }],
  partners: [{
    id: 1,
    headline: 'SeqFirst is working with:',
    partner: [{
      imageUrl: '/images/brotmanbaty.png',
      imageAlt: 'brotman baty institute logo',
      url: ''
    },
    {
      imageUrl: '/images/uw.png',
      imageAlt: 'university of washington logo',
      url: ''
    },
    {
      imageUrl: '/images/seattlechildrens.png',
      imageAlt: 'seattle childrens hospital logo',
      url: ''
    },
    {
      imageUrl: '/images/illumina.png',
      imageAlt: 'illumina logo',
      url: ''
    },
    {
      imageUrl: '/images/genedx.png',
      imageAlt: 'gene DX logo',
      url: 'https://www.genedx.com/'
    },
    {
      imageUrl: '/images/mygene2.png',
      imageAlt: 'myGene2 logo',
      url: ''
    }]
  }],
  programs: [{
    id: 1,
    imageUrl: '/images/home-programs.jpg'
  }],
  learnMore: [{
    id: 1,
    headline: 'Where can I learn more?',
    body: '<p class="body-feature">You can learn more about genetics and genetic testing in our <a href="/learning-center">Learning Center</a>.</p><p class="body-feature">We’ve made some short modules to help explain what being a part of this study looks like for families. These modules are part of the sign-up process for families in the SeqFirst “Newborns” program.</p>',
    linkText: 'View all modules for the SeqFirst "Newborns" program',
    linkUrl: '/learning-center',
    tile: [{
      imageUrl: '/images/preview1-participant-tasks.jpg',
      title: 'Participant Tasks',
      body: 'Learn more about what it looks like to be a participant in the SeqFirst “Newborns” program.',
      videoUrl: 'https://www.youtube.com/watch?v=p4BRvZyk8tM',
    }, {
      imageUrl: '/images/preview3-test-results.jpg',
      title: 'Genetic Test Results',
      body: 'Learn more about the types of results that participants might receive.',
      videoUrl: 'https://www.youtube.com/watch?v=ES3m0dtKJJk',
    }, {
      imageUrl: '/images/preview6-seqfirst-family.jpg',
      title: 'Is SeqFirst a Good Fit for My Family?',
      body: 'Learn more about things to consider as a possible participant in SeqFirst.',
      videoUrl: 'https://www.youtube.com/watch?v=bzRZYPKMTbk',
    }]
  }],
  team: [{
    imageUrl: '/images/MBamshad.jpg',
    name: 'Michael Bamshad, MD',
    title: 'Principal Investigator',
    bio: 'Professor and Head of Genetic Medicine in the Department of Pediatrics at the University of Washington and Seattle Children’s Hospital.'
  },
  {
    imageUrl: '/images/TWenger.jpg',
    name: 'Tara Wenger, MD, PhD',
    title: 'Co-Investigator',
    bio: 'Associate Professor and Associate Medical Director for Inpatient Services in the Department of Pediatrics at the University of Washington and Seattle Children’s Hospital.'
  },
  {
    imageUrl: '/images/KDipple.jpg',
    name: 'Katrina Dipple, MD, PhD',
    title: 'Co-Investigator',
    bio: 'Professor and Associate Division Head of the Division of Genetic Medicine and Medical Director for Genetics in the Department of Pediatrics at the University of Washington and Seattle Children’s Hospital.'
  }]
}

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | undefined>();

  function openModal(url: string) {
    setIsOpen(true);
    setVideoUrl(url);
  }

  function closeModal() {
    setVideoUrl(undefined);
    setIsOpen(false);
  }

  return (
    <>
      <DefaultSeo {...customSeo} />
      <NextSeo
        title="About SeqFirst"
      />

      {data?.hero?.map(hero => (
        <HomeHero
          homeHero={hero}
          key={hero?.id}
        />
      ))}
      {data?.videoIntro?.map(videoIntro => (
        <VideoIntro
          videoIntro={videoIntro}
          key={videoIntro.id}
        />
      ))}
      {data?.programs?.map(programs => (
        <Programs
          programs={programs}
          key={programs?.id}
        />
      ))}
      {data?.learnMore?.map(learnMore => (
        <LearnMore
          learnMore={learnMore}
          key={learnMore?.id}
          border='sectionWhiteDoubleRight'
        />
      ))}
      <section className={'sectionBlueDoubleLeft'}>
        <div className={'container'}>
          <div className={'row'}>
            <h2 className={'h1 mb-3'}>Our team</h2>
            <p className={'body-feature mb-5'}>The SeqFirst team is comprised of multiple experts in genetics, pediatrics, health economics, and bioethics, uniting to better serve families facing genetic related health conditions.</p>
            {data.team.map((team, i) => {
              return (
                <BioTile
                  teamBio={team}
                  columns={4}
                  imgSize={240}
                  key={i}
                />
              )
            })}
            <Link href="/our-team" className={'arrow-link'}>Meet the whole team <Arrow /></Link>
          </div>
        </div>
      </section>
      {data?.partners?.map(partners => (
        <Partners
          partners={partners}
          key={partners?.id}
        />
      ))}
    </>
  );
}

export default Home;
