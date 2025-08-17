import React from "react"
import Image from 'next/image'

import styles from "../styles/faq.module.scss"
import { IFAQ } from "../@types/types"

const Faq = ({ faq, textLeft = false }: { faq: IFAQ, textLeft: boolean }) => {
  return (
    <>
      <section className={'sectionWhiteRight'}>
        <div className={styles.faq}>
          <div className="container">
            <div className="row">
              <div className={`col-12 col-lg-4 ${textLeft === true ? 'order-sm-2' : 'order-sm-1'}`}>
                <div className={'d-flex justify-content-lg-center'} >
                  <Image
                    className={`img-fluid ${styles.image}`}
                    src={faq.imageUrl}
                    width={240}
                    height={240}
                    alt="Program Icon"
                  />
                </div>
              </div>
              <div className={`col-12 col-lg-8 ${textLeft === true ? 'order-sm-1' : 'order-sm-2'}`}>
                <h2 className={'h1'}>{faq.title}</h2>
                {faq.body?.map((body, i) => (
                  <div className={styles.faqWrap} key={i}>
                    <h3 className={'body-large body-large--bold'}>{body.headline}</h3>
                    <p dangerouslySetInnerHTML={{ __html: body.body }}></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq;
