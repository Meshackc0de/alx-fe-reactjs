import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'
import UserProfile from './components/UserProfile.jsx'

function App() {

  return (
    <>
      <WelcomeMessage/>
      <Header />
      <MainContent />
      <UserProfile name='Alice' age ={25} bio='Loves hiking and photography'/>
      <Footer />
    </>
  )
}

export default App
