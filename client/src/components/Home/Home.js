import React from "react"

import Banner from "./Banner"
import Contact from "./Contact"
import DentalCare from "./DentalCare"
import Info from "./Info"
import MakeAppointment from "./MakeAppointment"
import Services from "./Services"
import Testimonials from "./Testimonials"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  )
}

export default Home
