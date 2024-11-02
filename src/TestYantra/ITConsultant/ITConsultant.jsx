import React from 'react'
import Footer from '../footer/Footer';
import Infocard from '../InfoCard/Infocard';
import Style from './ITConsultant.module.css'
import image1 from './asset 1.png'
import image2 from './asset 2.png'
import image3 from './asset 3.png'
import image4 from './asset 4.png'
import image5 from './asset 5.png'
import image6 from './asset 6.png'
import image7 from './asset 7.png'
import image8 from './asset 8.png'
import image9 from './asset 9.png'
import image18 from './asset 18.jpeg'
const ITConsultant = () => {
  return (
    <div>
        <div className={Style.head}>
        <img src={image18} alt="" className={Style.rob}/>
        <h1 >IT Consulting</h1>
        <p>Test Yantra Global offers IT consulting services with a seasoned team of 12,000+ engineers, boasting 15 years of experience, 3,000+ satisfied clients, and 180+ successful <br />enterprise deployments, ensuring a smooth digital transformation for businesses.</p>
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
                <h1>Stratagic IT Planning</h1>
              </div>
            <p>We work closely with your organization to understand your unique business goals and challenges. Based on this understanding, we leverage our CoE to develop a customized IT strategy that aligns technology investments with your long-term objectives.</p>
          </div>
        </div>
        <div className={Style.card}>
          <div className={Style.innerCard}>
            <div className={Style.imgh1}>
              <div className={Style.imgCont}><img src={image2} alt="" /></div>
              <h1>Technology Assessment and Auditing</h1>
            </div>
            <p>Our team of experts conducts thorough assessments and audits of your existing IT infrastructure and systems to identify areas for improvement, cost-saving opportunities, and potential vulnerabilities.</p>
          </div>
        </div>
        <div className={Style.card}>
          <div className={Style.innerCard}>
            <div className={Style.imgh1}>
              <div className={Style.imgCont}><img src={image3} alt="" /></div>
              <h1>Infrastructure Optimization</h1>
            </div>
            <p>We help you streamline your IT infrastructure, enhance scalability, and improve performance, all while reducing costs. Our consultants provide practical guidance for hardware, software, and cloud solutions.</p>
          </div>
        </div>
      </div>
      <div className={Style.cardCont1}>
          <div className={Style.card1}>
            <div className={Style.innerCard1}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image4} alt="" /></div>
                <h1>Cybersecurity and Compliance</h1>
              </div>
              <p>In an era of escalating cyber threats characterized by increasing sophistication, safeguarding your data and adhering to industry regulations has become imperative. Test Yantra Global provides comprehensive cybersecurity solutions and expert compliance consulting services to ensure the security and regulatory compliance of your business.</p>
            </div>
          </div>
          <div className={Style.card1}>
            <div className={Style.innerCard1}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image5} alt="" /></div>
                <h1>Digital Transformation</h1>
              </div>
              <p>In today's dynamic business landscape, organizations must continually adapt and evolve to maintain their competitive edge. Our CoE-based expert guidance empowers you to navigate digital transformation initiatives, harness emerging technologies, and streamline processes, all contributing to your sustained competitive advantage.</p>
            </div>
          </div>
          <div className={Style.card1}>
            <div className={Style.innerCard1}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image6} alt="" /></div>
                <h1>Project Management</h1>
              </div>
              <p>Our PMO and project management services ensure your IT initiatives are completed successfully, on time, and within budget. We apply best practices and methodologies to minimize risks and ensure successful project delivery.</p>
            </div>
          </div>
        </div>
        <div className={Style.leverage}>
          <h1>Partnering with Test Yantra Global for your IT consulting needs offers</h1>
          <h1>numerous benefits</h1>
        </div>
        <div className={Style.cardCont2}>
          <div className={Style.card2}>
            <div className={Style.innerCard2}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image7} alt="" /></div>
                <h1>Tailored Solutions</h1>
              </div>
              <p>Test Yantra Global provides IT consulting services that are customized to meet the unique needs of an organization.</p>
            </div>
          </div>
          <div className={Style.card2}>
            <div className={Style.innerCard2}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image8} alt="" /></div>
                <h1>Cost Efficiency</h1>
              </div>
              <p>Our expert advisors identify cost-saving opportunities and optimize your IT investments, ensuring you get the most value from your technology spend.</p>
            </div>
          </div>
          <div className={Style.card2}>
            <div className={Style.innerCard2}>
              <div className={Style.imgh1}>
                <div className={Style.imgCont}><img src={image9} alt="" /></div>
                <h1>Risk Mitigation</h1>
              </div>
              <p>In an era where cybersecurity takes center stage, our services are dedicated to proactively mitigating risks and fortifying the protection of your sensitive data.</p>
            </div>
          </div>
        </div>
        <Infocard/>
        <Footer/>
    </div>
  )
}

export default ITConsultant
