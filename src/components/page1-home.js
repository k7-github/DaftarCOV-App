import React from 'react'
import Masthead from './masthead-green'
import Footer from './footer'

export default function Homepage() {
  return (
    <div>
      <Masthead />
      <div className="landingPage">
      {/* This is the main section of the homepage. */}
        <div className="Welcome" id='green'>
            <h2>Welcome to DaftarCOV! You Can Register for the Malaysian National COVID-19 Immunisation Programme Here!</h2>
        </div>
        <nav className= "signUpInButtonSection">
            <button className="signUpInButtons">Vaccine Register</button>
            {/* The Vaccination Registration page will load when this button is clicked. */}
            <button className="signUpInButtons">User Sign In</button>
            {/* When this button is clicked, the website will load a prompt window. */}
            {/* The prompt window requests the user's ID and password. */}
            {/* If the user inputs both correctly, the website will load the user's profile page. */}
            {/* Otherwise, the website displays one of 3 dialog boxes: */}
                {/* "Sorry, we cannot find an account with this user ID. Please try again." */}
                {/* "Sorry, we cannot find an account with this password. Please try again."     */}
                {/* "Sorry, we cannot find an account with this user ID and password. Please try again." */}
        </nav>
    </div>
    <Footer />
    </div>
  )
}
