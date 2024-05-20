import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className='footer'>
       <span>International Money Transfers:</span><a to={"sendmoneytoindia"}>Send Money to India|</a>
       <a href="">Send Money to Nigeria|</a><a href="">Send Money Poland |</a>
       <a href="">Send Money to Ghana|</a><a href="">Send money to Dubai|</a>
      <a href="">Send Money to the UK from India|</a><a href="">Send Money to Saudi Arabia|</a>
      <a href="">Send Money to North Macedonia|</a><a href="">Send Money to Kazakhstan|</a> 
      <br />
      <span>Exchange Rates:</span><a href="">Convert GBP to SAR |</a><a href="">Convert GBP to CAD |</a><a href="">Convert GBP to JPY |</a><a href="">Convert GBP to SEK |</a><a href="">Convert GBP to EGP |</a><a href="">Convert 100 CAD to GBP |</a><a href="">Convert 5000INR to CAD |</a><a href="">Convert 100 SGD to INR |</a><a href="">Convert 1000THB to GBP |</a><a href="">Convert 1000JPY to GBP |</a><a href="">Convert 1000JPY to GBP |</a>
    </footer>
  )
}

export default Footer