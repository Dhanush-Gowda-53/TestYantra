import React from 'react'
import { BrowserRouter as Router,Routes, Route} from "react-router-dom" 
import Nav from './nav/Nav'
import Home from './Home/Home'
import AboutUs from './AboutUs/AboutUs'
import './Global.css'
import GetInTouch from './getInTouch/GetInTouch';
import Articles from './Articles/Articles'
import SoftwareDev from './SofwareDev/SoftwareDev'
import SkillEnhance from './SkillEnhancement/SkillEnhance'
import ITConsultant from './ITConsultant/ITConsultant'
import CrowdTesting from './CrowdTesting/CrowdTesting'
import FireFlink from './FireFlink/FireFlink'
const Main = () => (
  <div>
    <Router>
      <Nav />
      <Routes>
        <Route path='/TestYantra' element={<Home />} />
        <Route path='/services' element={<AboutUs />} />
        <Route path='/getInTouch' element={<GetInTouch />} />
        <Route path='/article' element={<Articles />} />
        <Route path='/SoftwareDev' element={<SoftwareDev/>}/>
        <Route path='/SkillEnhance' element={<SkillEnhance/>}/>
        <Route path='/ITConsultant' element={<ITConsultant/>}/>
        <Route path='/CrowdTesting' element={<CrowdTesting/>}/>
        <Route path='/FireFlink' element={<FireFlink/>}/>
      </Routes>
    </Router>
  </div>
)

export default Main
