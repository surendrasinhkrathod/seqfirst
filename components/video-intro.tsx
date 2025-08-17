import React, { useState } from "react"
import Image from 'next/image'
import Modal from 'react-modal'
import ReactPlayer from 'react-player/youtube'

import IconPlay from "../images/icon-play.svg"

import styles from "../styles/video-intro.module.scss"
import { IVideoIntro } from "../@types/types"


const VideoIntro = ({ videoIntro }: { videoIntro: IVideoIntro }) => {

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
      <section className="negative sectionWhiteBlueDoubleRight pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {videoIntro?.sections?.map((section, key) => (
                <div className={styles.sectionWrap} key={key}>
                  <h2>{section.headline}</h2>
                  <p className="body-feature">{section.body}</p>
                </div>
              ))}
              <div className={`col-xl-8 offset-xl-2 ${styles.videoTileWraper}`}>
                <Image
                  className={`img-fluid ${styles.videoTileImage}`}
                  src="/images/preview-intro.jpg"
                  width={858}
                  height={480}
                  alt="team member photo"
                  onClick={() => openModal(videoIntro.videoUrl)}
                />
                <a className={styles.icon} onClick={() => openModal(videoIntro.videoUrl)}><IconPlay /></a>
              </div>
            </div>
          </div>
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

export default VideoIntro;
