import React from "react";

import styles from "../styles/simple-hero.module.scss";

const SimpleHero = (props: any) => {
  return (
    <>
      <div className={styles.simpleHero}>
        <div className={'container'}>
          <h1>{props.title}</h1>
          {props.description && <p>{props.description}</p>}
        </div>
      </div>
    </>
  )
}

export default SimpleHero;
