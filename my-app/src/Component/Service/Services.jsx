import React from 'react'
import './ServiceStyle.css'
import Html from '../../assets/Images/html.png'
import css from '../../assets/Images/css.png'
import js from '../../assets/Images/js.png'
import bootstrap from '../../assets/Images/bootstarp.png'
import node from '../../assets/Images/node.png'
import express from '../../assets/Images/express.png'
import figma from '../../assets/Images/figma.png'
import git from '../../assets/Images/git.png'
import github from '../../assets/Images/github.png'
import mongodb from '../../assets/Images/mongodb.png'
import react from '../../assets/Images/react.png'
import redux from '../../assets/Images/redux.png'
import tailwind from '../../assets/Images/TailWind.png'
import python from '../../assets/Images/python.png'
import numpy from '../../assets/Images/numpy.png'
import panadas from '../../assets/Images/pandas.png'






import dp from '../../assets/Images/dp1.png'
export default function Services() {
  return (
    <div>
     <div className="Sercerice_container">

        <div className="ServideMainHeading">
          <h2>Skills </h2>
          {/* <div className="line"></div> */}
        
        </div>
        <div className="showAll_icon">
          <div className="frontEndBox">
          <h2 style={{textAlign:"center",color:'#F86F03',marginTop:"1rem"}}>Web developement skills </h2>
         <div className="showLogoSkills">
       <img src={Html} alt=""  className='Icons'/>
     
       <img src={css} alt=""  className='Icons'/>
       <img src={js} alt=""  className='Icons'/>
       <img src={bootstrap} alt=""  className='Icons'/>
       <img src={react} alt=""  className='Icons'/>
       {/* <img src={redux} alt=""  className='Icons'/> */}
       <img src={node} alt=""  className='Icons'/>
       <img src={express} alt=""  className='Icons'/>
       <img src={mongodb} alt=""  className='Icons'/>
       <img src={git} alt=""  className='Icons'/>
       <img src={tailwind} alt=""   className='Icons'/>
 
     




         </div>
          </div>

        <div className="backendBox">
      <h2  style={{textAlign:"center",color:'#F86F03',marginTop:"1rem"}}>Other Skills </h2>
      <div className="showLogoSkills" style={{marginLeft:"2rem"}}>
      <img src={python} alt=""   className='Icons'/>

       <img src={numpy} alt=""   className='Icons'/>
       <img src={panadas} alt=""   className='Icons'/>
        </div>
        </div>
        </div>
     </div>
    </div>
  )
}
