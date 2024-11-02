import React from 'react'
import Style from './Infocard.module.css'
import image13 from "./asset 13.jpeg"
import image14 from "./asset 14.jpeg"
import image15 from "./asset 15.jpeg"
import { FaArrowRight } from "react-icons/fa";
const Infocard = () => {
  return (
    <div>
      <div className={Style.infoCardTray}>
        <div className={Style.leverage}>
          <h1>Our Recent articles</h1>
        </div>
        <div className={Style.infoCardCont}>
          <div className={Style.infoCards}>
            <img src={image13} alt="" />
            <div className={Style.infoCardInfo}>
              <p1>Blog | Software Testing</p1>
              <h3>Comprehensive Guide to Developing Test Scripts for Software Testing</h3>
              <p>Effective software testing is essential for the delivery of high-quality software products. The development of test scripts is a critical...</p>
            </div>
            <div className={Style.btnCont}><button>Read More<FaArrowRight className={Style.infoLeft} /></button></div>
          </div>
          <div className={Style.infoCards}>
            <img src={image14} alt="" />
            <div className={Style.infoCardInfo}>
              <p1>Blog | Catagories of Test</p1>
              <h3>Guidelines for Writing Effective Unit Tests</h3>
              <p>Learn effective unit testing techniques to enhance code quality and development speed. Discover essential tools...</p>
            </div>
            <div className={Style.btnCont}><button>Read More<FaArrowRight className={Style.infoLeft} /></button></div>
          </div>
          <div className={Style.infoCards}>
            <img src={image15} alt="" />
            <div className={Style.infoCardInfo}>
              <p1>Blog | Test Data</p1>
              <h3>Automation Testing Tools: Selenium, Cypress, Playwright, Robot Framework vs. FireFlink</h3>
              <p>Dive into the specifics of renowned automation tools like Selenium, Cypress, Playwright, and Robot Framework...</p>
            </div>
            <div className={Style.btnCont}><button>Read More<FaArrowRight className={Style.infoLeft} /></button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infocard
