import React from 'react'
import './topNavBar.css'
import { Componats } from '../componats'
import git from "./../assets/1.svg";
import facebooke from "./../assets/2.svg";
import tweet from "./../assets/3.svg";
import insta from "./../assets/4.svg";
import phone from "./../assets/phone.svg"
import mail from './../assets/mail.svg'

const TopNavBar = () => {
    const imagePath = [git, facebooke, tweet, insta];

  return (
    <div className="topNav">
    <div className="contactRap">
      <div className="singleContact">
      <img src={phone} alt="jh"/>
         <h1>(414) 857 - 0107</h1>
      </div>
      <div className="singleContact">
      <img src={mail} alt="jh"/>
         <h1>yummy@bistrobliss</h1>
      </div>

    </div>
    <div className="linkRapper">
      {
         imagePath.map((path)=>(<Componats xyz={path} />))

      }
     

    </div>
    

  </div>
  )
}

export default TopNavBar