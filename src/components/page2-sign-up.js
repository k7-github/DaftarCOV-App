import React from 'react'
import { useState } from 'react'
import Masthead from './masthead-green'
import SignUp from './sign-up'

export default function SignUpPage () {
  const [formData, setFormData] = useState(
    {
      newPassword: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      cardNo: "",
      dateBirth: "",
      phoneNo: "",
      emailAddress: "",
      street: "",
      cityTown: "",
      state: "",
      postalCode: "",
      medical: ""
    }
  )

  function handleChange(event) {
    const {name, value,} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
}

function handleSubmit(event) {
  event.preventDefault()
  // console.log(formData)
}
  return (
    <div>
        <Masthead />
        <SignUp/>
        <main className='signUpSection'>
          <h1 class="inputTitle">VACCINE REGISTRATION</h1>
          <form onSubmit={handleSubmit}>
            <div className='inputLeft'>
              <div class="inputField" id="newPassword">
              {/* This is one of the many webforms in this page. */}
                  <label htmlFor="newPassword">New Password: </label>
                  <input
                      onChange={handleChange}
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={formData.newPassword}
                      required />
              </div>
              <div class="inputField" id="confirmPassword">
                  <label htmlFor="confirmPassword">Confirm New Password: </label>
                  <input
                      onChange={handleChange}
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      required />
              </div>
              <div class="inputField" id="firstName">
                  <label htmlFor="firstName">First Name: </label>
                  <input
                      onChange={handleChange}
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      required />
              </div>
              <div class="inputField" id="lastName">
                  <label htmlFor="lastName">Last Name: </label>
                  <input
                      onChange={handleChange}
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      required />
              </div>
              <div class="inputField" id="cardNo">
                  <label htmlFor="cardNo">Identification Card No.: </label>
                  <input
                      onChange={handleChange}
                      type="text"
                      id="cardNo"
                      name="cardNo"
                      value={formData.cardNo}
                      pattern="[0-9]{6}-[0-9, X]{2}-[0-9, X]{4}"
                      required />
              </div>
              <div class="inputField" id="dateBirth">
                  <label htmlFor="dateBirth">Date of Birth: </label>
                  <input
                      onChange={handleChange}
                      type="date"
                      id="dateBirth"
                      name="dateBirth"
                      value={formData.dateBirth}
                      required />
              </div>
              <div class="inputField" id="phoneNo">
                  <label htmlFor="phoneNo">Phone Number: </label>
                  <input
                      onChange={handleChange}
                      type="tel"
                      id="phoneNo"
                      name="phoneNo"
                      value={formData.phoneNo}
                      pattern="[0-9]{3}-[0-9, X]{3} [0-9, X]{4}"
                      required />
              </div>
              <div class="inputField" id="emailAddress">
                  <label htmlFor="emailAddress">Email Address: </label>
                  <input
                      onChange={handleChange}
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      value={formData.emailAddress}
                      pattern="[0-9]{3}-[0-9, X]{3} [0-9, X]{4}"
                      required />
              </div>
            </div>
            <div className='inputRight'>
                <div class="inputField" id="street">
                      <label htmlFor="street">Street: </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          id="street"
                          name="street"
                          value={formData.street}
                          required />
                  </div>
                  <div class="inputField" id="cityTown">
                      <label htmlFor="cityTown">City/Town: </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          id="cityTown"
                          name="cityTown"
                          value={formData.cityTown}
                          required />
                  </div>
                  <div class="inputField" id="state">
                      <label htmlFor="state">State: </label>
                      <select
                          onChange={handleChange}
                          id="state"
                          name="state"
                          value={formData.state}
                          required
                          >
                          <option value="Johor">Johor</option>
                          <option value="Kedah">Kedah</option>
                          <option value="Kelantan">Kelantan</option>
                          <option value="Melaka">Melaka</option>
                          <option value="Negeri Sembilan">Negeri Sembilan</option>
                          <option value="Pahang">Pahang</option>
                          <option value="Pulau Pinang">Pulau Pinang</option>
                          <option value="Perak">Perak</option>
                          <option value="Perlis">Perlis</option>
                          <option value="Sabah">Sabah</option>
                          <option value="Sarawak">Sarawak</option>
                          <option value="Selangor">Selangor</option>
                          <option value="Terengganu">Terengganu</option>
                          <option value="Federal Territory of Kuala Lumpur">Federal Territory of Kuala Lumpur</option>
                          <option value="Federal Territory of Labuan">Federal Territory of Labuan</option>
                          <option value="Federal Territory of Putrajaya">Federal Territory of Putrajaya</option>
                      </select>
                  </div>
                  <div class="inputField" id="postalCode">
                      <label htmlFor="postalCode">Postal Code: </label>
                      <input
                          onChange={handleChange}
                          type="number"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          min="10000" max="99999"
                          required />
                  </div>
                  <div class="inputField" id="medical">
                      <label htmlFor="medical">Medical Condition: </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          id="medical"
                          name="medical"
                          value={formData.medical}
                          required />
                  </div>
            </div>
            <div class="inputButtonSection">
              <button class="inputButtons">FINISH</button>
            </div> 
          </form>
        </main>
    </div>
  )
}
