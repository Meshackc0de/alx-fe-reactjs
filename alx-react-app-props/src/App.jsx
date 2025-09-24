import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'
import UserProfile from './components/UserProfile.jsx'
import ProfilePage from './ProfilePage.jsx'
import UserContext from './UserContext.js'

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com'};

  return (
    <>
      <WelcomeMessage/>
      <Header />
      <MainContent />
      <UserContext.Provider value={userData}>
      <ProfilePage/>
      </UserContext.Provider>
      <UserProfile name='M1000' age ={25} bio='Loves hiking and photography'/>
      <Footer />
    </>
  )
}

export default App
