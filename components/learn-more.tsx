import React, { useState } from "react"
import Image from 'next/image'
import Link from "next/link"
import Modal from 'react-modal'
import ReactPlayer from 'react-player/youtube'

import styles from "../styles/learn-more.module.scss"
import IconPlay from "../images/icon-play.svg"
import Arrow from "../images/icon-arrow.svg"

import { ILearnMore } from "../@types/types"

const LearnMore = ({ learnMore, border = '' }: { learnMore: ILearnMore, border: string }) => {

  Modal.setAppElement("body")
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      width: '90%',
      aspectRatio: '16 / 9',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      overflow: 'hidden',
      border: 'none'
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | undefined>();

  function openModal(url: string) {
    setIsOpen(true);
    setVideoUrl(url);
  }

  function closeModal() {
    setVideoUrl(undefined);
    setIsOpen(false);
  }

  return (
    <>
      <section className={`${border}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="h1 mb-4">{learnMore.headline}</h2>
              <div className="mb-2" dangerouslySetInnerHTML={{ __html: learnMore.body }}></div>
            </div>
          </div>
          <div className="row">
            {learnMore.tile.map((tile, i) => {
              return (
                <div className={'col-md-6 col-lg-4'} key={i}>
                  <div className={styles.videoTileWraper}>
                    <Image
                      className={`img-fluid ${styles.videoTileItem}`}
                      src={tile.imageUrl}
                      width={540}
                      height={220}
                      alt="Video Tile"
                      onClick={() => openModal(`${tile.videoUrl}`)}
                    />
                    <a className={styles.icon} onClick={() => openModal(`${tile.videoUrl}`)}><IconPlay /></a>
                  </div>
                  <p className={`large bold ${styles.TileHeadline}`}>{tile.title}</p>
                  <p className={`large`}>{tile.body}</p>
                </div>
              )
            })}
          </div>
          {learnMore.linkUrl &&
            <div className="row mt-5">
              <Link href={learnMore.linkUrl} className={'arrow-link'}>{learnMore.linkText}<Arrow /></Link>
            </div>
          }
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Video Modal"
      >
        <ReactPlayer
          url={videoUrl}
          playing={true}
          controls={true}
          width={'100%'}
          height={'100%'}
        />
      </Modal>
    </>
  )
}

export default LearnMore;
