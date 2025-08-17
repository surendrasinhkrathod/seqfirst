import React from "react";

import { IProjectHero } from "../@types/types";

import styles from "../styles/project-hero.module.scss";
import IconNewborns from "../images/icon-newborns.svg";
import IconDdi from "../images/icon-ddi.svg";


const ProjectHero = ({ projectHero, icon = '' }: { projectHero: IProjectHero, icon: string }) => {
  return (
    <>
      <div className={styles.projectHero} style={{ backgroundImage: `url(${projectHero.imageUrl})` }}>
        <div className={'h-100'}>
          <div className={'row h-100 w-100'}>
            <div className={'col-9 col-sm-8 col-md-7 col-lg-6 gx-0 align-self-end'}>
              <div className={styles.projectHeroTextboxWrap}>
                <div className={icon == 'newborns' ? `${styles.projectHeroTextbox} ${styles.newborns}` : `${styles.projectHeroTextbox}`}>
                  <div className={styles.projectHeroTitleWrap}>
                    { icon == 'newborns' ?
                      <IconNewborns
                        className={`${styles.newbornsIcon}`}
                      />
                    : <IconDdi/> }
                    <h1 className={`title-hero`}>{projectHero.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectHero;
