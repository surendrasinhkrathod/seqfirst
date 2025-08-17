import React from "react"

import styles from "../styles/text-column.module.scss"
import { ITextColumn } from "../@types/types"

const TextColumn = ({ textColumn, border = '' }: { textColumn: ITextColumn, border: string }) => {
  return (
    <>
      <section className={`${border}`}>
        <div className={border === "standard" ? `${styles.textColumn} ${styles.standard}` : `${styles.textColumn}`}>
          <div className="container">
            <div className="row">
              <div className={`col-12`}>
                <h2 className={styles.title}>{textColumn.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: textColumn.description }} className={'body-feature'}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TextColumn;
