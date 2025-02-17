import React from 'react'
import "./Home.css"
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Banner from '../../Banner/Banner'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home
