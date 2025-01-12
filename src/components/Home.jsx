import React from 'react'
import Button from './Button'
import homeImg from '../assets/home.png'
function Home() {
  return (
    <section className="home mt-4">
       <div className="content">
          <p className="subtitle">
            LAUNCHING SOON
          </p>
          <h1 className=' title mt-3 mb-3 ' >
            An NFT like no other
          </h1>
          <p className="description mb-2">
            Don't miss out on the release of our new NFT. 
            Sign up below to recieve updates when go live.
          </p>
          <Button >Sign Up </Button>
       </div>
       <div className="image">
          <img src={homeImg} alt="" />
       </div>
    </section>
  )
}

export default Home