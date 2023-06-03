import React from 'react' 
import './styles/About.css'
import {GoCalendar} from "react-icons/go";
import {ImLocation2} from "react-icons/im";


function About() {
  return (
    <div className='about-body'>
      <div className='about-container'>
                <div>
                  <h1 className='gradient-text'>ABOUT US</h1>
                  <div className='container'>
                    <div className='container-left'>
                    <p className='about-description'>Welcome to PUNICFEST! Join us for two unforgettable days of electrifying electronic music in Cartage, Tunisia. Experience an international lineup of renowned artists as they take the stage, bringing the energy and beats that will make you dance like never before. PUNICFEST is where music unites and memories are made. Get ready to immerse    yourself in the magic of PUNICFEST in Cartage, Tunisia!
                  </p>
                  <div className='about-box-container'>
                  <Box className='about-box' icon=<ImLocation2 className="about-icon"/> title='WHERE' info='Tunisia, Carthage'/>
                  <Box className='about-box' icon=<GoCalendar className="about-icon"/> title='WHEN' info='19 July' />
                  </div>
                  
                    </div>

                    <div className='container-right'>
                      <Record number="65" title="FESTIVAL" record="COMPLETED"/>
                      <Record number="38" title="PROFESSIONAL" record="ARTISTS"/>
                      <Record number="93" title="AWARDS" record="WON"/>
                      

                    </div>
                  
                  </div>
                </div>
      </div>
    </div>
  )
}

const Box = (props) =>{
  return (
    <div className='about-box'>
       {props.icon}
      <h3>{props.title}</h3>
      <p>{props.info}</p>
    </div>
  )
}

const Record = (props) =>{
  return (
    <div className='record-box'>
      <span className='number'>{props.number}</span>
      <span className='span-container'>
      <span className='record-title'>{props.title}</span>
      <span className='record'>{props.record}</span>
      </span>
    </div>
  )
}

export default About