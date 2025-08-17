import React from "react"
import Image from 'next/image'

import styles from "../styles/fiftyfifty.module.scss"
import { IFiftyFifty } from "../@types/types"


const FiftyFifty = ({ fiftyFifty, textLeft = true, border = '' }: { fiftyFifty: IFiftyFifty, textLeft: boolean, border: string }) => {
  return (
    <>
      <section className={`${border}`}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-sm-6 ${textLeft === true ? 'order-sm-2' : 'order-sm-1'}`}>
              <div className={`${styles.fiftyfifty}`}>
                <Image
                  className="img-fluid mb-4"
                  src={fiftyFifty.imageUrl}
                  width={fiftyFifty.width}
                  height={fiftyFifty.height}
                  alt={fiftyFifty.imageAlt}
                />
              </div >
            </div >
            <div className={`col-sm-6 ${textLeft === true ? 'order-sm-1' : 'order-sm-2'}`}>
              <h2 className={`mb-4 h1`}>{fiftyFifty.title}</h2>
              <div className={`${styles.fiftyfiftyBody}`} dangerouslySetInnerHTML={{ __html: fiftyFifty.body }}></div>
            </div>
          </div >
        </div >
      </section>
    </>
  )
}

export default FiftyFifty;
