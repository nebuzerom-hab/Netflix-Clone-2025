import React from 'react'
import "./Home.css"
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Banner from '../../Banner/Banner'
import RowList from '../../Rows/RowList/RowList'
import Player from '../Player/Player'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner>
        <Player />
      </Banner>
      <RowList />
      <Footer />
    </div>
  );
}

export default Home
