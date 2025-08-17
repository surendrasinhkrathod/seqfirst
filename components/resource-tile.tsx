import React from "react"
import Link from "next/link"

import { IResourceTile } from "../@types/types"

import styles from "../styles/resource-tile.module.scss"
import IconExternal from "../images/icon-external.svg"


const ResourceTile = ({ resourceTile }: { resourceTile: IResourceTile }) => {
  return (
    <>
      <div className={'col-md-6 col-lg-4'}>
        <div className={styles.resourceTile}>
          <div className={styles.resourceImageWrap} style={{ backgroundImage: `url(${resourceTile.imageUrl})` }}></div>
          <div className={styles.resourceTextWrap}>
            <p className={`h3 mb-2 mb-md-4 ${styles.resourceTitle}`}>{resourceTile.title}</p>
            <p className={`caption ${styles.resourceBody}`}>{resourceTile.body}</p>
            <Link href={resourceTile.url} target="_blank">View Resource <IconExternal /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResourceTile;
