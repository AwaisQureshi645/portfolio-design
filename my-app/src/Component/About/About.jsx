import React from 'react'
import './AboutStyle.css'
import dp from '../../assets/Images/dp1.png'
export default function About() {
  return (
    <>
      <div className="about_maon_heading" id='AboutSection'>
        <h2 >About me</h2>
        {/* <div className="line"></div> */}

        <div className="aboutContainer">
          <div className="aboutLeft">
            <img src={dp} alt="" />
          </div>
          <div className="aboutRight">
            <div className="aboutRightContent">
              <h3>
                I'm a Designer and Developer!
              </h3>
              <h1>
                I Can Design and Development  Anything You Want
              </h1>
              <p>
                I am a skilled web developer with expertise in the MERN stack,
                including both front-end and back-end development. With 2 months
                of experience at Increat Technology in Islamabad, I have gained hands-on
                experience in building dynamic and responsive web applications. I am proficient in HTML,
                CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. I possess a strong understanding
                of web development principles, and I am dedicated to delivering high-quality and user-friendly solutions. My problem-solving skills and ability to work collaboratively make me a valuable asset to any development team.</p>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}
