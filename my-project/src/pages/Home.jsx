import React, { Fragment } from 'react'
import Landing from '../components/Landing'
import Feature from '../components/Feature'
import StayProductive from '../components/StayProductive'
import Testimonials from '../components/Testimonials'
import GetStarted from '../components/GetStarted'

const Home = () => {
  return (
    <Fragment>
       <Landing />
       <Feature />
       <StayProductive />
       <Testimonials />
       <GetStarted />
    </Fragment>
  )
}

export default Home
