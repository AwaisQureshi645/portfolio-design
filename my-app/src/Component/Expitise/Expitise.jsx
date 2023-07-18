import React from 'react'
import './experticeStyle.css'
import services1 from '../../assets/Images/service-icon1.png'
import services2 from '../../assets/Images/service-icon2.png'
import services3 from '../../assets/Images/service-icon3.png'
import services4 from '../../assets/Images/service-icon4.png'
import circle from '../../assets/Images/circle-bg-left-img.png'
import Box1 from './Box1'
export default function Expitise() {
    return (
        <>
            <div className="container_expertices" id='ServicesPage'>
                <div className="expert_heading">
                <h4>My Expertise</h4>
                <h1>Provide Wide Range of
                    Digital Services</h1>
                </div>
              
               <img src={circle} alt=""  className='left_circle'/>
               <div className="container_content_expertice">
             <Box1  name={'Ui/UX Design'} images={services1} description={'Through Figma, I create beautiful and intuitive user interfaces that bring ideas to life.'}/>
             <Box1  name={'Web Design'} images={services2}  description={'As a skilled web designer, I have meticulously crafted your website using  of WordPress.'}/>
             <Box1  name={'Web Development'} images={services3}  description={' I bring your web development ideas to fruition by leveraging the power of MongoDB, Express.js, React, and Node.js'}/>
             <Box1  name={'App Development'} images={services4}  description={'My skills in Kotlin allow me to build simple yet efficient mobile applications,'}/>

               </div>
               </div>

             
              


          

        </>
    )
} 
