import React from 'react'
import { useState } from 'react'

// The masthead appears at the top of every page in this website.
// It is light green in the homepage and Vaccine Registration page.
// It is light blue in the other pages.

export default function MastheadBlue() {

  const [login, setlogin] = useState(true)

  function signOut() {
    setlogin(false)
    console.log(login)
  }

  return (
    <div>
      <header className="mastHead" id="blue">
        <h1 className="siteName">DaftarCOV</h1>
        <h3 className="signOut" onClick={signOut}>SIGN OUT</h3>
        {/* This is the button users click if they want to sign out. */}
      </header>
    </div>
  )
}
