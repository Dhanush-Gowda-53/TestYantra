import React from 'react'
import Footer from '../footer/Footer';
import Infocard from '../InfoCard/Infocard';
import Style from './SkillEnhance.module.css'
import image1 from './asset 1.png'
import image2 from './asset 2.png'
import image3 from './asset 3.png'
import image12 from './asset 12.jpeg'
const SkillEnhance = () => {
  return (
    <div>
      <div className={Style.head}>
        <img src={image12} alt="" className={Style.rob}/>
        <h1 >Skill Enhancement</h1>
        <p>Unlock Your Potential - Explore Skill Enhancement Opportunities with Test Yantra Global. </p>
      </div>
        <div className={Style.leverage}>
          <h1>Elevate Your Team's Skills with Test Yantra Global:</h1>
          <h1>Your Gateway to Excellence.</h1>
          <p>Benefits of Choosing Test Yantra Global</p>
        </div>
        <div className={Style.cardCont}>
          <div className={Style.card}>
            <div className={Style.innerCard}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image1} alt="" /></div>
                <h1>Expert IT Consultants</h1>
              </div>
              <p>Test Yantra Global has trained 670,000+ learners since its inception. Our team of 400+ trainers provides invaluable domain expertise and insight into their specific topics.</p>
            </div>
          </div>
          <div className={Style.card}>
            <div className={Style.innerCard}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image2} alt="" /></div>
                <h1>Practical learning</h1>
              </div>
              <p>Our experiential learning methodology emphasizes practical training to ensure that you acquire real-world hands-on skills that enable immediate engagement.</p>
            </div>
          </div>
          <div className={Style.card}>
            <div className={Style.innerCard}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image3} alt="" /></div>
                <h1>Industrial Recognition    </h1>
              </div>
              <p>We work closely with 2,500+ companies to ensure our programs meet the precise evolving needs of the industry. With 17,000 people registered in our day-to-day IT-related training courses, Test Yantra Global’s training programs are highly respected and sought after by employers.</p>
            </div>
          </div>
        </div>
      <Infocard/>
      <Footer/>
    </div>
  )
}

export default SkillEnhance
