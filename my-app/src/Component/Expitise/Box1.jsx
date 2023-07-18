import React, { useState } from 'react'
import './experticeStyle.css'
import services1 from '../../assets/Images/service-icon1.png'
import PopUpModal from './PopUpModal'
export default function Box1(props) {
    const [showPop, SetPopUp] = useState(false)
    const read_more_content = () => {

        SetPopUp(true);
    }
    const closeModal = () => {
        SetPopUp(false);
    }
    return (
        <>
            <div className="col_content">
                <div className="box_icon">
                    <img src={props.images} alt="no image found " />
                    {/* <img src="" alt="" /> */}
                </div>
                <div className="box_content">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    {/* <h5 style={{paddingTop:'1rem',cursor:'pointer'}} onClick={read_more_content}>Read More</h5> */}
                    {/* {showPop && (<PopUpModal closeModalx={closeModal} />)} */}
                </div>
            </div>

        </>
    )
}
