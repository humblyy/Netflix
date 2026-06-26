import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Banner from "../../components/Banner/Banner"
import Titlecards from '../../components/titlecards/Titlecards';
import Footer from '../../components/footer/Footer';
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
     <Footer/>
    </>
  );
}

export default Home