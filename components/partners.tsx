import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/partners.module.scss";
import { IPartners } from "../@types/types";

const Partners = ({ partners }: { partners: IPartners }) => {
  return (
    <section className={'sectionWhiteDoubleRight'}>
      <div className={'container'}>
        <div className={styles.partners}>
          <h1>{partners.headline}</h1>
          <div className={styles.partnersWrap}>
            <div className={'row'}>
              {partners.partner.map((partner, i) => {
                return (
                  <div className={'col-sm-6 col-md-4'} key={i}>
                    { partner.url !== '' ?
                    <>
                      <Link href={partner.url} target="_blank">
                        <div className={styles.logo}>
                          <Image
                            className="img-fluid"
                            src={partner.imageUrl}
                            width={198}
                            height={158}
                            alt="Program Icon"
                          />
                        </div>
                      </Link>
                    </>
                    : <>
                      <div className={styles.logo}>
                        <Image
                          className="img-fluid"
                          src={partner.imageUrl}
                          width={198}
                          height={158}
                          alt="Program Icon"
                        />
                      </div>
                    </> }
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </ section>
  )
}

export default Partners;
