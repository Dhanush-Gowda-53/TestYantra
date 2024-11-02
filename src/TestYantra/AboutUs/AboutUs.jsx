import React from 'react'
import Style from './AboutUs.module.css'
import image1 from './asset 1.png'
import image2 from './asset 2.png'
import image3 from './asset 3.png'
import image12 from './asset 12.jpeg'
import image13 from './asset 13.png'
import Footer from '../footer/Footer';
import Infocard from '../InfoCard/Infocard';
import { GoPlay } from "react-icons/go";

const AboutUs = () => {
  return (
    <div className={Style.main}>
      <div className={Style.head}>
        <img src={image12} alt="" className={Style.rob} />
        <h1 >Software Testing Services (TaaS)</h1>
        <p>Trusted by 3000+ clients across the globe to provide a range of Software testing solutions, expertise, and AI based software testing platform.</p>
      </div>
      <div className={Style.Cont}>
        <div className={Style.leverage}>
          <h1>Leverage two decades of Testing Expertise</h1>
          <p>Our testing center of excellence (CoE) provides a unified solutions for web, android, ios, API, and databases.</p>
        </div>
        <div className={Style.cardCont}>
          <div className={Style.card}>
            <div className={Style.innerCard}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image1} alt="" /></div>
                <h1>Managed QA</h1>
              </div>
              <p>Our team of IT consultants and managed services experts provide timely consulting, software configuration, deployment, and support for an array of cloud and premise based applications.</p>
            </div>
          </div>
          <div className={Style.card}>
            <div className={Style.innerCard}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image2} alt="" /></div>
                <h1>Crowd Testing</h1>
              </div>
              <p>Crowdsourced Testing is a necessity and important solution for companies that are launching time-sensitive products, such as mobile applications and web-based platforms with UI, UX issues and software bugs.</p>
            </div>
          </div>
          <div className={Style.card}>
            <div className={Style.innerCard}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image3} alt="" /></div>
                <h1>Testing Solution</h1>
              </div>
              <p>Test Yantra Global offers a suite of software testing tools, methodology, and resources aimed at enhancing the quality assurance of your applications including  testing services like automation, performance, application and security testing.</p>
            </div>
          </div>
        </div>
        <div className={Style.videoCont}>
          <img src={image13} alt="" />
          <GoPlay className={Style.videoPlay} />
        </div>
      </div>
      <Infocard />
      <Footer />
    </div>
  )
}

export default AboutUs
