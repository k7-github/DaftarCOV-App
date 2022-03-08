import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// The masthead appears at the top of every page in this website.
// It is light green in the homepage and Vaccine Registration page.
// It is light blue in the other pages.

export default function MastheadBlue() {

  // Add function to DaftarCOV element in the masthead.
  // When this element is clicked, the website will load the Full Personal Page of the signed user.
  const navigate = useNavigate()
  
  const [login, setlogin] = useState(true)

  function toPersonal () {
    navigate('/personal')
  }
  
  function signOut() {
    setlogin(false)
    console.log(login)
  }

  return (
    <div>
      <header className="mastHead" id="blue">
        <h1 className="siteName" onClick={toPersonal}>DaftarCOV</h1>
        <h3 className="signOut" onClick={signOut}>SIGN OUT</h3>
        {/* This is the button users click if they want to sign out. */}
      </header>
    </div>
  )
}
