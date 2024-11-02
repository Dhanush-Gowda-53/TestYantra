import React from 'react'
import Footer from '../footer/Footer';
import Infocard from '../InfoCard/Infocard';
import Style from './SoftwareDev.module.css'
import image15 from './asset 15.jpeg'
import image1 from './asset 1.png'
import image2 from './asset 2.png'
import image3 from './asset 3.png'
import image4 from './asset 4.png'
import image5 from './asset 5.png'
import image6 from './asset 6.png'
const SoftwareDev = () => {
  return (
    <div>
      <div className={Style.head}>
        <img src={image15} alt="" className={Style.rob} />
        <h1 >Software Development</h1>
        <p>Our 1,100+ expert software developers utilize the latest technology stack to build and integrate leading applications across a variety of domains.</p>
      </div>
      <div className={Style.leverage}>
        <h1>Digital Transformation Services </h1>
        <p>A holistic range of services covering all aspects of software development life </p>
        <p> cycle (SDLC) with industry domain expertise</p>
      </div>
      <div className={Style.cardCont}>
        <div className={Style.card}>
          <div className={Style.innerCard}>
            <div className={Style.imgh1}>
              <div className={Style.imgCont}><img src={image1} alt="" /></div>
              <h1>Cloud Services</h1>
            </div>
            <p>Test Yantra Global excels in complex cloud migrations, enhancing features, and security. We offer custom cloud solutions and redesign architectures for cloud readiness. Our expertise includes seamless integration of cloud and on-premises systems while maintaining security and performance.</p>
          </div>
        </div>
        <div className={Style.card}>
          <div className={Style.innerCard}>
            <div className={Style.imgh1}>
              <div className={Style.imgCont}><img src={image2} alt="" /></div>
              <h1>AWS services</h1>
            </div>
            <p>Test Yantra Global is an AWS consulting firm specializing in cloud-first solutions and serverless applications. Our services encompass AWS architecture optimization and proactive monitoring. Additionally, we emphasize Infrastructure as Code (IaC) using AWS CloudFormation for consistent infrastructure management.</p>
          </div>
        </div>
        <div className={Style.card}>
          <div className={Style.innerCard}>
            <div className={Style.imgh1}>
              <div className={Style.imgCont}><img src={image3} alt="" /></div>
              <h1>IOT Services</h1>
            </div>
            <p>The synergy of IoT connecting individuals and devices fosters enhanced efficiency and creativity. At Test Yantra Global, we are committed to delivering top-notch IoT consultancy.</p>
          </div>
        </div>
      </div>
      <div className={Style.leverage}>
        <h1>Empowering Digital Success with Comprehensive  </h1>
        <h1> Technology Expertise</h1>
      </div>
      <div className={Style.cardCont}>
        <div className={Style.card2}>
          <div className={Style.innerCard2}>
            <div className={Style.imgh1}>
              <div className={Style.imgCont}><img src={image4} alt="" /></div>
              <h1>Fontend</h1>
            </div>
            <p>At Test Yantra Global, we harness the power of cutting-edge front-end technologies to transform your digital presence. Our experts excel in React, React Native, Ionic, Angular, and Vue.js, crafting dynamic and responsive user interfaces that captivate your audience. We specialize in utilizing these frameworks to ensure your web and mobile applications are at the forefront of innovation.</p>
          </div>
        </div>
        <div className={Style.card2}>
          <div className={Style.innerCard2}>
            <div className={Style.imgh1}>
              <div className={Style.imgCont}><img src={image5} alt="" /></div>
              <h1>Backend</h1>
            </div>
            <p>With expertise in Java, Node.js, Python, and Ruby on Rails, our skilled developers architect secure and high-performance server-side systems. We tailor back-end solutions that empower your applications with reliability and scalability, ensuring your online presence remains seamless and efficient. We're adept at leveraging robust back-end technologies to drive your digital solutions.</p>
          </div>
        </div>
        <div className={Style.card2}>
          <div className={Style.innerCard2}>
            <div className={Style.imgh1}>
              <div className={Style.imgCont}><img src={image6} alt="" /></div>
              <h1>database</h1>
            </div>
            <p>Test Yantra Global excels in harnessing diverse database technologies to optimize your data management needs. From relational databases like MySQL, Oracle, and PostgreSQL to NoSQL solutions such as MongoDB, SQLite, and neo4j, we offer tailored solutions for efficient data storage and retrieval. With our expertise, your data remains secure, organized, accessible, and ready to drive your business forward.</p>
          </div>
        </div>
      </div>
      <Infocard />
      <Footer />
    </div>
  )
}

export default SoftwareDev
