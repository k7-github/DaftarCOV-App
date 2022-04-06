import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignOutModal from './modals/sign-out'

// The masthead appears at the top of every page in this website.
// It is light green in the homepage and Vaccine Registration page.
// It is light blue in the other pages.

export default function MastheadBlue() {

  // Add function to DaftarCOV element in the masthead.
  // When this element is clicked, the website will load the Full Personal Page of the signed user.
  const [modal, setModal] = useState(false)
  
  const navigate = useNavigate()
  
  function toPersonal () {
    navigate('/personal')
  }
  
  function signOutModal() {
    setModal(true)
  }

  return (
    <div>
      <header className="mastHead" id="blue">
        <h1 className="siteName" onClick={toPersonal}>DaftarCOV</h1>
        <h3 className="signOut" onClick={signOutModal}>SIGN OUT</h3>
        {/* This is the button users click if they want to sign out. */}
      </header>
      {modal && <SignOutModal setModal={setModal} />}
    </div>
  )
}
