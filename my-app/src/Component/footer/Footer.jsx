import React from 'react'
import './FooterStyle.css'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoGithub} from 'react-icons/io'
export default function Footer() {
    return (
        <>
            <div className="footer_container">
                <div className="footer_content">
                    <h1>Awais Qureshi </h1>
                    <div className="showList">
                        <h4>Home| </h4>
                        <h4>About|</h4>
                        <h4>Service|</h4>
                        <h4>Portofolio|</h4>
                        <h4>Contact|</h4>
                        <h4>Testimonial </h4>
                        


                    </div>
                    <div className="show_icon">
                        <BsLinkedin className='iconX'/>
                        <IoLogoGithub className='iconX'/>
                    </div>
                    <hr />
                    <p className='copywrite'>&copy;Copyright 2023 Awais Qureshi. | All Rights Reserved.</p>
                </div>
            </div>

        </>
    )
}
