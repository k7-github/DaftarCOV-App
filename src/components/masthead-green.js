import React from 'react'
import { useNavigate } from 'react-router-dom'

// The masthead appears at the top of every page in this website.
// It is light green in the homepage and Vaccine Registration page.
// It is light blue in the other pages.

export default function MastheadGreen() {
  const navigate = useNavigate()
  return (
    <div>
      <header className="mastHead" id="green">
        <h1 className="siteName" onClick={() => {navigate('/')}}>DaftarCOV</h1>
      </header>
    </div>
  )
}
