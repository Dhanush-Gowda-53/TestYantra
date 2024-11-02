import React from 'react'   
import Style from "./Home.module.css"
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from "react-icons/fa";
import CountUp from 'react-countup';
import image1 from "./asset 1.png"
import image2 from "./asset 2.png"
import image3 from "./asset 3.png"
import image4 from "./asset 4.png"
import image5 from "./asset 5.png"
import image6 from "./asset 6.png"
import image7 from "./asset 7.png"
import image8 from "./asset 8.png"
import image9 from "./asset 9.png"
import image21 from "./asset 21.png"
import { GoPlay } from "react-icons/go";
import Slides from './Slides';
import Footer from '../footer/Footer';
import Infocard from '../InfoCard/Infocard';
const Home = () => {
  return (
    <div className={Style.main}>
      <div className={Style.Home}>
        <div className={Style.description}>
          <div className={Style.heading}>
            <p className={Style.WithTest}>With Test Yantra Global</p>
            <TypeAnimation className={Style.type}
            sequence={[
            'Achieve Digital Transformation..',
            1000,
            'Drive AI Automation Testing..',
            1000,
            'Build Custom Applications..',
            1000,
            'Unify Web, Mobile, API, and DB Testing..',
            1000,
            "Access 1,000's of expert Test Engineers..",
            1000,
            'Accelerate Business Efficiency..',
            1000,
            'Drive AI Automation Testing..',
            1000,
            'Dhanush made this 😎...',
            1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            />
          </div>
          <div className={Style.headdesc}>
            <p className={Style.headdescP}>Test Yantra Global's 5,000+ employees provide a range of innovative technology solutions to digitally transform your organization.</p>
            <p className={Style.headdescP}>From IT consulting, application design and development, to automated AI enabled test management platform that unifies web, android, iOS, API, and DB testing, we have the expertise, technology, experience, and tools to help transform your business</p>
            <button className={Style.btn}>Get Started Free  <FaArrowRight className={Style.left} /></button>
          </div>
        </div>
        <div className={Style.slides}>
          <Slides/>
        </div >
      </div>
      <div className={Style.cardTray}>
        <div className={Style.leverage}>
          <h1>Leverage Test Yantra Global's range</h1>
          <h1>of Professional Services</h1>
        </div>
        <div className={Style.cardCont}>
          <div className={Style.cards}>
            <div className={Style.cardIn}>
              <div className={Style.imgCont}><img src={image1} alt="" /></div>
              <div className={Style.software}><h3>Software Testing Services (TaaS)</h3></div>
              <p>We offer cost effective, reliable and scalable software testing servicec</p>
            </div>
          </div>
          <div className={Style.cards}>
            <div className={Style.cardIn}>
              <div className={Style.imgCont}><img src={image2} alt="" /></div>
              <div className={Style.software}><h3>IT Software Skills Enhancement</h3></div>
              <p>Our customized and curated training models help organizations elevate their IT quotient</p>
            </div>
          </div>
          <div className={Style.cards}>
            <div className={Style.cardIn}>
              <div className={Style.imgCont}><img src={image3} alt="" /></div>
              <div className={Style.software}><h3>Deployment & Support Services</h3></div>
              <p>Our team of experts help you craft a winning IT strategy for your organization</p>
            </div>
          </div>
          <div className={Style.cards}>
            <div className={Style.cardIn}>
              <div className={Style.imgCont}><img src={image4} alt="" /></div>
              <div className={Style.software}><h3>Software Design & Development</h3></div>
              <p>We deliver IT solutions in a wide variety of verticals and elevate businesses to the next level.</p>
            </div>
          </div>
          <div className={Style.cards}>
            <div className={Style.cardIn}>
              <div className={Style.imgCont}><img src={image5} alt="" /></div>
              <div className={Style.software}><h3>Crowd Testing</h3></div>
              <p>We offer comprehensive crowd-testing services, leveraging a global network of skilled testers.</p>
            </div>
          </div>
        </div>
        <div className={Style.Video}>
          <img src={image21} alt="" />
          <GoPlay className={Style.videoPlay}/>
        </div>
      </div>
      <div className={Style.countTray}>
        <div className={Style.leverage}>
          <h1>The number speak for themselves</h1>
        </div>
        <div className={Style.countCardsCont}>
          <div className={Style.countCards}>
            <div className={Style.imgage}><img src={image6} alt="" /></div>
            <CountUp end={6} className={Style.count}/>
            <h3>Countries & Growing</h3>
          </div>
          <div className={Style.countCards}>
            <div className={Style.imgage}><img src={image7} alt="" /></div>
            <div className={Style.count}><CountUp end={3000}/><span>+</span></div>
            <h3>Clients Across Globe</h3>
          </div>
          <div className={Style.countCards}>
            <div className={Style.imgage}><img src={image8} alt="" /></div>
            <div className={Style.count}><CountUp end={5000}/><span>+</span></div>
            <h3>Total Team Members</h3>
          </div>
          <div className={Style.countCards}>
            <div className={Style.imgage}><img src={image9} alt="" /></div>
            <div className={Style.count}><CountUp end={12000}/><span>+</span></div>
            <h3>On Demand Test Engineers</h3>
          </div>
        </div>
      </div>
      <Infocard/>
      <Footer/>
    </div>
    
  )
}

export default Home
