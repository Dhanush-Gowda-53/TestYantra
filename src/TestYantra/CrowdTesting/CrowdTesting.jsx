import React from 'react'
import Style from './CrowdTesting.module.css';
import image1 from './asset 1.png'
import image2 from './asset 2.png'
import image3 from './asset 3.png'
import image12 from './asset 12.png'
import Footer from '../footer/Footer';
import Infocard from '../InfoCard/Infocard';

const CrowdTesting = () => {
  return (
    <div>
      <div className={Style.head}>
        <img src={image12} alt="" className={Style.rob}/>
        <h1 >Crowd Testing</h1>
        <p>Experience the Power of Crowd Testing with Test Yantra Global. Key features include access to 65,000 test engineers, a unique status as the only major player with 'Dedicated labs' for crowd-testing, utilization of real devices and networks, and meticulous management of the crowd. </p>
      </div>
        <div className={Style.QA}>
            <h1>What is Crowd Testing?</h1>
            <p>Crowd Testing is a dynamic testing methodology that leverages a diverse and distributed group of testers. It enables testing across various devices, operating systems, and geographical locations, providing unparalleled coverage and real-user insight.</p>
        </div>
        <div className={Style.leverage}>
          <h1>Type's of Crowd Testing</h1>
          <p>Our multichannel testing expertise allows us to provide a holistic service to fulfill all your testing needs in one place.</p>
        </div>
        
        <div className={Style.cardCont}>
          <div className={Style.card}>
            <div className={Style.innerCard}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image1} alt="" /></div>
                <h1>Web Crowd Testing</h1>
              </div>
              <p>Involves crowd-sourced testing for web applications, ensuring compatibility across platforms and browsers like Chrome, Firefox, and Microsoft Edge. It includes cross-browser tests, trials on various operating systems and versions, diverse testing approaches, and participation from test engineers of all age groups.</p>
            </div>
          </div>
          <div className={Style.card}>
            <div className={Style.innerCard}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image2} alt="" /></div>
                <h1>Mobile Crowd Testing</h1>
              </div>
              <p>Focuses on crowd-sourced testing for mobile apps, identifying compatibility issues across a range of Android and iOS devices. It encompasses platform variations, compatibility-driven tests, diverse testing methodologies, and engagement with test engineers from different demographics.</p>
            </div>
          </div>
          <div className={Style.card}>
            <div className={Style.innerCard}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image3} alt="" /></div>
                <h1>Web and Mobile Crowd</h1>
              </div>
              <p>Testing via FireFlink involves ensuring reliability, alignment with business requirements, and user-friendliness of web and mobile apps. This process includes tests for devices like Android TV, Google TV, and Fire TV Stick, evaluating across different brands and models, reproducing defects using video recordings and screenshots, and offering re-test support for identified issues.</p>
            </div>
          </div>
          </div>
          <Infocard/>
      <Footer/>
    </div>
    
  )
}

export default CrowdTesting
