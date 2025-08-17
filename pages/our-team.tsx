import React from "react";
import { useRouter } from "next/router";
import { NextSeo, DefaultSeo } from "next-seo";
import CustomSeo from "../next-seo.config";

import SimpleHero from "../components/simple-hero";
import BioTile from "../components/bio-tile";
import { ITeam } from "../@types/types";

const data: ITeam = {
  title: 'Our Team',
  description: 'The SeqFirst team is comprised of multiple experts in genetics, pediatrics, health economics, and bioethics, uniting to better serve families facing genetic related health conditions.',
  teamMain: [{
    imageUrl: '/images/MBamshad.jpg',
    name: 'Michael Bamshad, MD',
    title: 'Principal Investigator',
    bio: 'Professor and Head of Genetic Medicine in the Department of Pediatrics at the University of Washington and Seattle Children’s Hospital.'
  }, {
    imageUrl: '/images/TWenger.jpg',
    name: 'Tara Wenger, MD, PhD',
    title: 'Co-Investigator',
    bio: 'Associate Professor and Associate Medical Director for Inpatient Services in the Department of Pediatrics at the University of Washington and Seattle Children’s Hospital.'
  }, {
    imageUrl: '/images/DDoherty.jpg',
    name: 'Daniel Doherty, MD, PhD',
    title: 'Co-Investigator',
    bio: 'Professor and Interim Head of the Division of Developmental Medicine in the Department of Pediatrics at the University of Washington and Seattle Children’s Hospital.'
  }, {
    imageUrl: '/images/KDipple.jpg',
    name: 'Katrina Dipple, MD, PhD',
    title: 'Co-Investigator',
    bio: 'Professor and Associate Division Head of the Division of Genetic Medicine and Medical Director for Genetics in the Department of Pediatrics at the University of Washington and Seattle Children’s Hospital.'
  }, {
    imageUrl: '/images/JChong.jpg',
    name: 'Jessica Chong, PhD',
    title: 'Co-Investigator',
    bio: 'Assistant Professor in the Division of Genetic Medicine in the Department of Pediatrics at the University of Washington.'
  }, {
    imageUrl: '/images/JHYu.jpg',
    name: 'Joon-Ho Yu, PhD',
    title: 'Co-Investigator',
    bio: 'Assistant Professor in the Divisions of Genetic Medicine and Bioethics & Palliative Care in the Department of Pediatrics at the University of Washington.'
  }, {
    imageUrl: '/images/KMacDuffie.jpg',
    name: 'Kate MacDuffie, PhD',
    title: 'Co-Investigator',
    bio: 'Assistant Professor, Treuman Katz Center for Pediatric Bioethics at Seattle Children’s Hospital.'
  }, {
    imageUrl: '/images/DMiller.jpg',
    name: 'Danny Miller, MD, PhD',
    title: 'Co-Investigator',
    bio: 'Assistant Professor in the Division of Genetic Medicine in the Department of Pediatrics at the University of Washington and Seattle Children’s Hospital.'
  }, {
    imageUrl: '/images/PKruszka.jpg',
    name: 'Paul Kruszka, MD, MPH, FACMG',
    title: 'Co-Investigator',
    bio: 'Chief Medical Officer, GeneDx.'
  },{
    imageUrl: '/images/DVeenstra.jpg',
    name: 'David Veenstra, PharmD, PhD',
    title: 'Co-Investigator',
    bio: 'Professor and Associate Director, Comparative Health Outcomes, Policy & Economics (CHOICE) Institute and Department of Pharmacy at the University of Washington.'
  }],
  teamSecondary: [{
    imageUrl: '/images/KAnderson.jpg',
    name: 'Kailyn Anderson, MS, CGC',
    title: 'Genetic Counselor',
    bio: 'Genetic counselor in the Department of Pediatrics at the University of Washington.'
  }, {
    imageUrl: '/images/HGildersleeve.jpg',
    name: 'Heidi Gildersleeve, MS',
    title: 'Research Coordinator',
    bio: 'Research coordinator in the Department of Pediatrics at the University of Washington.'
  }, {
    imageUrl: '/images/LK.jpg',
    name: 'Luke Kruidenier, MS, CGC',
    title: 'Genetic Counselor',
    bio: 'Genetic counselor in the Department of Genetic Medicine at Seattle Children’s Hospital.'
  }, {
    imageUrl: '/images/JLoveNichols.jpg',
    name: 'Jamie Love-Nichols, MS, MPH, CGC',
    title: 'Genetic Counselor',
    bio: 'Genetic counselor in the Department of Genetic Medicine at Seattle Children’s Hospital.'
  }, {
    imageUrl: '/images/OSommers.jpg',
    name: 'Olivia Sommers, MPH',
    title: 'Research Coordinator',
    bio: 'Research coordinator in the Department of Pediatrics at the University of Washington.'
  }],
}

const OurTeam = () => {
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
      <div className={'container'}>
        <div className={'row'}>
          {data.teamMain.map((team, i) => {
            return (
              <BioTile
                teamBio={team}
                columns={4}
                imgSize={240}
                key={i}
              />
            )
          })}
        </div>
      </div>
      <section className={'sectionBlueLeft'}>
        <div className={'container'}>
          <div className={'row'}>
            {data.teamSecondary.map((team, i) => {
              return (
                <BioTile
                  teamBio={team}
                  columns={3}
                  imgSize={180}
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

export default OurTeam;
