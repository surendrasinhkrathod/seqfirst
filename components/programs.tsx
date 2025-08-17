import React from "react";
import Link from "next/link";

import { IPrograms } from "../@types/types";

import styles from "../styles/programs.module.scss";
import IconArrow from "../images/icon-arrow.svg";
import IconNewborns from "../images/icon-newborns.svg";
import IconDdi from "../images/icon-ddi.svg";

const Programs = ({ programs }: { programs: IPrograms }) => {
  return (
    <section>
      <div className={`sectionImageClipYellowLeft ${styles.programs}`} style={{ backgroundImage: `url(${programs.imageUrl})` }}>
        <div className={styles.programsWrap}>
          <div className={styles.programsTile}>
            <div className={styles.programsTileContent}>
              <IconNewborns
                className={styles.programTileIcon}
              />
              <h3 className={'mb-2'}>Newborns</h3>
              <p>Less than 6 months old</p>
              <Link href="/seqfirstnewborns" className={'btn'}><IconArrow /></Link>
            </div>
          </div>
          <div className={styles.programsTile}>
            <div className={styles.programsTileContent}>
              <IconDdi
                className={styles.programTileIcon}
              />
              <h3 className={'mb-2'}>Developmental Differences</h3>
              <p>Less than 3 years old</p>
              <Link href="/seqfirstddi" className={'btn'}><IconArrow /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs;
