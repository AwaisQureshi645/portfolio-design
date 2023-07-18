import React,{useState,useEffect} from 'react'
import About from '../About/About'
import Service from '../Service/Services'
import Contact from '../Contact/Contact'
import './HomeStyle.css'
import { FaLinkedin } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { ImGithub } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'
import resumeFile from '../../assets/a1.pdf';
import dp from '../../assets/Images/Hero_image.png'
import dp1 from '../../assets/Images/bg11.png'
import Project from '../Project/Project'
import Testimonal from '../Testimonal/Testimonal'
import Footer from '../footer/Footer'
import Html from '../../assets/Images/html.png'
import cssxx from '../../assets/Images/css.png'
import js from '../../assets/Images/js.png'
import react from '../../assets/Images/react.png'
import node from '../../assets/Images/node.png'
import Modal from '../Project/Modal'
import Expitise from '../Expitise/Expitise'
import Whatapp from './Whatapp'

export default function Home() {
  const [animate, setAnimate] = useState(false);

  const handleAnimation = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000); // Duration of the animation (in milliseconds)
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <>
      <div className="HeaderImage" id='Home'>
        <div className="mainImage">
          <div className="leftSideContent">
            <div className="nameHeafing">
              <h2>Hi There ! </h2>
              <h3 >I' m <span style={{color:'#6f34fe'}} className={`text-animation ${animate ? 'animate' : ''}`}>Awais Qureshi</span>
              </h3>
              <h4>I' m  <span>Web Developer</span></h4>
              <p>
                Experienced web developer specializing in React and Node.js. Proficient in MERN stack development, delivering high-quality web applications with efficient and scalable solutions.</p>
            </div>
            <div className="addicon">
              <BsFacebook className='showIcon' onClick={() => {
                window.open('https://www.facebook.com/awais.qureshi.14', '_blank');
              }} />
              <FaLinkedin className='showIcon' onClick={() => {
                window.open('https://www.linkedin.com/in/awaisqureshi645/', '_blank');
              }} />
              <ImGithub className='showIcon' onClick={() => {
                window.open('https://github.com/AwaisQureshi645', '_blank');
              }} />
              <SiInstagram className='showIcon' onClick={() => {
                window.open('https://www.instagram.com/awaisqureshi535/', '_blank');
              }} />
            </div>
            <div className="download_resume">
              <button onClick={() => {
                window.open(resumeFile);
              }}>Check Resume</button>

            </div>


          </div>
          <div className="rightSideContent">
            <div className="Icons4">
            <img src={react} alt="" className='Icons5'  />
            
           {/* // <img src={node} alt="" className='Icons5' style={{marginLeft:'2rem '}}/> */}
            </div>
     
            <div className="showAll_icons">
              <img src={Html} alt="" className='Icons1' />
              <img src={cssxx} alt="" className='Icons2' />
              <img src={js} alt="" className='Icons3' />

            </div>
            <div className="imageBox"></div>
            <img src={dp} alt="" className='dp' />

          </div>
        </div>
      </div>

      <About />
      <Expitise/>
      <Service />
      <Project />
      <Testimonal />
      <Contact />
      <Whatapp/>
      <Footer />
     {/* <Modal/> */}
  
    </>
  )
}
