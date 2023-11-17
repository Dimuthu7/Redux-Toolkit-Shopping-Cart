import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import './style/home.css'
import { Notification } from './components/Notification'
import { useSelector } from 'react-redux'

function App() {
  const showNotification = useSelector(state => state.ui.showNotification);
  const notification = useSelector(state => state.ui.notification);

  return (
    <div className='home'>
      <NavBar />
      <Home />
      {showNotification && <Notification data={notification} />}
    </div>
  )
}

export default App
