import React from 'react'
import img1 from "../assets/release1.png"
import EthLogo from "../assets/eth1.png"
function Card() {
  return (
    <div className="nft-card">
      <div className="img">
        <img src={img1} alt="" />
      </div>
      <div className="content">
        <div className="left">
          <p className="series">GLOOP SERIES</p>
          <b>Red Man</b>
          <p>#12983</p>
        </div>
        <div className="right">
        <p>TOP BID</p>
          <b><img src={EthLogo} className='icon' alt="" />2.99 ETH</b>
          <p> 1 day left</p>
        </div>
      </div>
    </div>
  )
}

export default Card