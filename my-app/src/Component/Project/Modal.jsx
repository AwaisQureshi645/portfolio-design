import React, { useState, useRef, useEffect } from 'react'
import './ModalStyle.css'
import { ImCross } from 'react-icons/im'
import mobile from '../../assets/Images/mobile.mp4'
import products from './ProjectData'
// import React,{useState} from 'react'
import demo1 from '../../assets/Images/demo1.mp4'

export default function Modal(props) {

  const [videoData, setVideoData] = useState('')
  console.log(videoData)
  const handleCloseModal = () => {
    props.closeModal()
  }
  useEffect(() => {
    const item = products.find((item) => item.id == props.data);
    if (item) {
      const displayVideo = item.video;
      setVideoData(demo1);
    }
  }, [props.data]);

  return (
    // <div>Modal</div>
    <>
      <div className="modal_style_container">
        <div className="close_icon">
          <ImCross onClick={handleCloseModal} />
        </div>
        <div className="video_container">
          {/* {videoData && <video src={'d'} controls />} */}

          {<video muted controls className='videoContent'>

            <source src={mobile}  type="video/mp4" />
            Your browser does not support the video tag.
          </video>}
        </div>
      </div>
      {/* this is a modal container */}
    </>
  )
}
