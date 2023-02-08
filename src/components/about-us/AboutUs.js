import React from 'react'
import { Route, Link, useRouteMatch } from 'react-router-dom'
import SiteHistory from './SiteHistory'
import SiteMission from './SiteMission'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className="about-us">
      <Route>
        <SiteHistory />
      </Route>
      <Route>
        <SiteMission />
      </Route>
    </div>
  )
}

export default AboutUs
