import React from 'react'
import "./header.css"

function Header() {
  return (
    <header className='header'>
        <h1>My Digital Wallet</h1>
        <div className='opts'>
            <p>Home</p>
            <p>Login</p>
            <p>Support</p>
        </div>
    </header>
  )
}

export default Header