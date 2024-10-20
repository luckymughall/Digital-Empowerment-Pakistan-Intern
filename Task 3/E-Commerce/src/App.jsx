import React from 'react'
import Offer from './components/Offer/Offer'
import Navbar from './components/Navbar/Navbar'
import Signup from './components/Signup/Signup'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Offer></Offer>
      <Navbar></Navbar>
      <Signup></Signup>
      <Footer></Footer>
    </div>
  )
}

export default App