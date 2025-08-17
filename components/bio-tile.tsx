import React from "react"
import Image from 'next/image'

import styles from "../styles/bio-tile.module.scss"
import { ITeamBio } from "../@types/types"

const BioTile = ({ teamBio, columns = 3, imgSize = 240 }: { teamBio: ITeamBio, columns: number, imgSize: number }) => {
  return (
    <>
      <div className={`col-sm-6 col-md-4 col-lg-${columns}`}>
        <div className={`${styles.bioTile} ${columns === 4 ? styles.bioTileLarge : styles.bioTileSmall}`}>
          <Image
            className="img-fluid"
            src={teamBio.imageUrl}
            width={imgSize}
            height={imgSize}
            alt="team member photo"
          />
          <div className={styles.bioTileTextWrap}>
            <p className={`${styles.bioTileName} large bold`}>{teamBio.name}</p>
            <p className={`${styles.bioTileTitle} large`}>{teamBio.title}</p>
            <p className={`${styles.bioTileBio} large`}>{teamBio.bio}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BioTile;
