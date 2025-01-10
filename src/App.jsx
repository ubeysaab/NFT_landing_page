import { useState } from 'react'
import ScrolToTop from "./components/ScrollToTop"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Free from "./components/Free"
import Clients from "./components/Clients"
import SuperRare from "./components/SuperRare"
import Footer from "./components/Footer"
import Like from "./components/Like"
import SignUp from "./components/SignUp"
import Release from "./components/Release"
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
        {/* <ScrolToTop/> */}
        <Navbar/>
        {/* <Home/>
        <Free/>
        <Clients/>
        <SuperRare/>
        <Release/>
        <Like/>
        <SignUp/>
        <Footer/> */}

    </div>
  )
}

export default App
