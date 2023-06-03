import React from 'react'
import './styles/Ticket.css'
import { NavLink } from "react-router-dom";

const ticketId=["danceFloor", "standard", "vipPlus"]

const Ticket = (props) =>{

  return (<div id={props.id} className='ticket'> 
            <h2 className='ticket-type'>{props.type}</h2>
            <h1 className='ticket-price'>
              <a className='price'>{props.price}</a><span>DT</span>
            </h1> 
            <div className='ticket-description'>
              {props.description}
            </div>  
            <div>
              <NavLink to='/register' className="get-tickets">GET TICKETS</NavLink>
            </div> 
          </div>);

}
const descriptions = {
  danceFloor: "Experience the heart-pumping energy and vibrant atmosphere on the festival's main dance floor.",
  vipPlus: "Elevate your festival experience with exclusive perks, priority access, and upgraded amenities.",
  standard: "Dive into the festival's electrifying performances and connect with fellow music enthusiasts on an unforgettable journey."
};

function Tickets() {
  return (
    <div className='tickets-body'>
      <div className='tickets-container'>
      <h1 className='gradient-text'>TICKETS</h1>
      <div className='ticket-box'>
      <Ticket id="standard" type="STANDARD" price='80' description={descriptions.standard}/>
      <Ticket id="danceFloor" type="DANCE FLOOR" price='160' description={descriptions.danceFloor}/>
      <Ticket id="vipPlus" type="VIP PLUS" price='250' description={descriptions.vipPlus}/>
      </div>
      </div>
    </div>
  )
}

export default Tickets