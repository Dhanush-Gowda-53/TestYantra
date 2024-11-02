import React from 'react'
import Style from "./Nav.module.css"
import { Link } from 'react-router-dom'
import image1 from "./asset 0.svg"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Nav = () => {
  return (
    <nav className={Style.navBar}>
      <div className={Style.navcont}>
        <div className={Style.name}>
          <h1><Link to='/TestYantra'><img src={image1} alt="" /></Link></h1>
        </div>
        <div className={Style.list}>
          <ul>
            <li><Link to='/TestYantra'>Home</Link></li>
            <li><Link >Services<MdOutlineKeyboardArrowDown className={Style.arrow}/></Link> <ul className={Style.dropDown}> <li><Link to='/services'>Software Testing (TaaS)</Link></li><li><Link to='/SoftwareDev'>Software Development</Link></li><li><Link to='/SkillEnhance'>Skill Enhancement</Link></li><li><Link to='/ITConsultant'>IT Consultant</Link></li><li><Link to='/CrowdTesting'>Crowd Testing</Link></li> </ul> </li>
            <li><Link >Partners<MdOutlineKeyboardArrowDown className={Style.arrow}/></Link> <ul className={Style.dropDown}> <li><Link to='/FireFlink'>FireFlink</Link></li></ul></li>
            <li><Link to='/article'>Articles</Link></li>
            <li className={Style.button}><Link to='/getInTouch' style={{color:"white"}}>Get in Touch</Link></li>
          </ul>
        </div>  
      </div>
    </nav>
  )
}

export default Nav
