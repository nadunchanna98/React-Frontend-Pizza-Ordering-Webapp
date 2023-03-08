import React from 'react'
import { AiFillLinkedin ,AiOutlineGithub } from "react-icons/ai";
import '../App.css'

const Footer = () => {
  return (
    <div className="footer">

    <div className="contact">
    <h4>Contact us</h4>
        <span><i className="fas fa-phone"></i> &nbsp; +94778401180</span>
        <span><i className="fas fa-envelope"></i> &nbsp;</span>
    </div>

  
    <div className="footer-bottom">
        
          &copy; mypizza.com | Designed By : <a href="https://www.linkedin.com/in/nadun-channa-3a4a181aa" target="_blank">Nadun Channa  <AiFillLinkedin size='2rem' /></a> <a href="https://github.com/nadunchanna98" target="_blank"> <AiOutlineGithub size='2rem' /></a>
    </div>
    <br/>
    <p>
     All Right Reserved &copy; 2023 |  <a href="https://www.evenbees.com/" target="_blank"> Evenbees.com </a>
    </p>
</div>
  )
}

export default Footer