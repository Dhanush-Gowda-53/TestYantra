import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Footer.module.css'
import image17 from "./asset 17.png"
import image16 from "./asset 16.svg"
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className={Style.LastCont}>
        <img src={image17} alt="" className={Style.backImg} />
        <h1>Subscribe to our Newsletter!</h1>
        <div className={Style.input}><input type="text" placeholder='Enter your Business Email' /><button className={Style.subBtn}>Subscribe</button></div>
        <div className={Style.footCont}>
          <div className={Style.logo}>
            <img src={image16} alt="" />
            <div className={Style.paraCont}>
              <p>Test Yantra Global is an Exclusive Platinum Partner of FireFlink.</p>
              <p>Let's get socially connected...</p>
            </div>
            <div className={Style.SocialCont}>
              <FaLinkedin className={Style.Social} /><FaYoutube className={Style.Social} /><FaTwitter className={Style.Social} /><IoLogoFacebook className={Style.Social} /><FaInstagram className={Style.Social} />
            </div>
          </div>
          <div className={Style.footDel}>
            <div className={Style.footCards}>
              <h3>Services <div className={Style.UnderLine}></div></h3>
              <ul>
                <li><Link to='/services'>Sofware Testing (TaaS) </Link></li>
                <li><Link to='/SoftwareDev'>Software Development</Link></li>
                <li><Link to='/SkillEnhance'>Skill Enhancement</Link></li>
                <li><Link to='/ITConsultant'>IT Consulting</Link></li>
                <li><Link to='/CrowdTesting'>Crowd Testing</Link></li>
              </ul>
            </div>
            <div className={Style.footCards}>
              <h3>Quick Links <div className={Style.UnderLine}></div></h3>
              <ul>
                <li><Link>About Us</Link></li>
                <li><Link>Fireflink</Link></li>
                <li><Link>Article</Link></li>
                <li><Link>Contact</Link></li>
              </ul>
            </div>
            <div className={Style.footCards1}>
              <h3>Contact <div className={Style.UnderLine}></div></h3>
              <ul>
                <li>
                  <span>Address:</span> 120 Adilaide street West <br /> Suite 2500, Toronto, ON, M5H 1T1, Canada.
                </li>
                <li><span>Email:</span> hello@testyantraglobal.com</li>
                <li><span>Phone:</span>1800 572 7905</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Style.licence}>
          <p>Copyright © 2024  Test Yantra Global. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer



// import React, { useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';  // useLocation helps to detect route changes
// import Style from './Footer.module.css';
// import image17 from "./asset 17.png";
// import image16 from "./asset 16.svg";
// import { FaLinkedin } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { IoLogoFacebook } from "react-icons/io";
// import { FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   const { pathname } = useLocation();  // Destructure the current path

//   // Scroll to the top on route change
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);  // Run this whenever the path changes

//   return (
//     <div>
//       <div className={Style.LastCont}>
//         <img src={image17} alt="" className={Style.backImg}/>
//         <h1>Subscribe to our Newsletter!</h1>
//         <div className={Style.input}><input type="text" placeholder='Enter your Business Email'/><button className={Style.subBtn}>Subscribe</button></div>
//         <div className={Style.footCont}>
//           <div className={Style.logo}>
//             <img src={image16} alt="" />
//             <div className={Style.paraCont}>
//               <p>Test Yantra Global is an Exclusive Platinum Partner of FireFlink.</p>
//               <p>Let's get socially connected...</p>
//             </div>
//             <div className={Style.SocialCont}>
//                 <FaLinkedin className={Style.Social}/><FaYoutube className={Style.Social}/><FaTwitter className={Style.Social}/><IoLogoFacebook className={Style.Social}/><FaInstagram className={Style.Social}/>
//             </div>
//           </div>
//           <div className={Style.footDel}>
//             <div className={Style.footCards}>
//               <h3>Services <div className={Style.UnderLine}></div></h3>
//               <ul>
//                 <li><Link to='/services'>Sofware Testing (TaaS)</Link></li>
//                 <li><Link to='/development'>Software Development</Link></li>
//                 <li><Link to='/skill-enhancement'>Skill Enhancement</Link></li>
//                 <li><Link to='/it-consulting'>IT Consulting</Link></li>
//                 <li><Link to='/crowd-testing'>Crowd Testing</Link></li>
//               </ul>
//             </div>
//             <div className={Style.footCards}>
//               <h3>Quick Links <div className={Style.UnderLine}></div></h3>
//               <ul>
//                 <li><Link to='/about-us'>About Us</Link></li>
//                 <li><Link to='/fireflink'>Fireflink</Link></li>
//                 <li><Link to='/articles'>Articles</Link></li>
//                 <li><Link to='/contact'>Contact</Link></li>
//               </ul>
//             </div>
//             <div className={Style.footCards1}>
//               <h3>Contact <div className={Style.UnderLine}></div></h3>
//               <ul>
//                 <li>
//                   <span>Address:</span> 120 Adilaide street West <br /> Suite 2500, Toronto, ON, M5H 1T1, Canada.
//                 </li>
//                 <li><span>Email:</span> hello@testyantraglobal.com</li>
//                 <li><span>Phone:</span>1800 572 7905</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className={Style.licence}>
//             <p>Copyright © 2024  Test Yantra Global. All rights reserved</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
