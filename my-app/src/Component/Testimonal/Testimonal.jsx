import React from 'react'
import Img2 from "../../assets/Images/pfp1.jpg";
import Img3 from "../../assets/Images/fadur.jpeg";
import {FaQuoteRight} from 'react-icons/fa'
import './TestimonalStyle.css'
export default function Testimonal() {
    return (
        <>
        <section className='allTestimonal_part'>

     
            <div className="testimonalSectionHeading " style={{ textAlign: 'center' }}>
                <div className="testimonials-content__title">
                    <h4>Reviewed by People</h4>
                    <h2>Client's Testimonials</h2>
                    <p>
                        Discover the positive impact we've made on the our clients by
                        reading through their testimonials. Our clients have experienced
                        our service and results, and they're eager to share their
                        positive experiences with you.
                    </p>
                </div>
            </div>




            <div className="all-testimonials">
                <div className="all-testimonials__box">
                    <span className="quotes-icon">
                       <FaQuoteRight className='icon'/>
                    </span>
                    <p>
                        "Awais Qureshi is a great freelancer.He understands well what is asked of him and does a good job. I recommend him. "
                    </p>
                    <div className="all-testimonials__box__name">
                        <div className="all-testimonials__box__name__profile">
                            <img src={Img3} alt="user_img" />
                            <span>
                                <h4>Daniel Fadur</h4>
                                <p style={{fontSize:'20px'}}>videotenerife</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}
