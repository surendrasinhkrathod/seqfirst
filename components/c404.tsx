import React from "react";
import Link from 'next/link'

import IconHome from "../images/icon-home.svg";





// Component 404 body message
const C404 = () => {
  return (
    <div className={'container mb-5'}>
      <p className={'large'}>Visit our home page to learn more about SeqFirst</p>
      <Link href="/" className={'btn btn--home'}><IconHome /> SeqFirst Home</Link>
    </div>
  )
}

export default C404;
