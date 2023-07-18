import React from 'react'
import './experticeStyle.css'
import { ImCross } from 'react-icons/im'
export default function PopUpModal(props) {
      
  const handleCloseModal = () => {
    props.closeModalx()
  }
  return (
    <div className="modal_style_containerx">
    <div className="close_icon">
      <ImCross onClick={handleCloseModal} />
    </div>

  </div>
  )
}
