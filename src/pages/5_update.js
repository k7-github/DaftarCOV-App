import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

import Masthead from '../components/masthead-blue'
import useFetch from '../components/useFetch'
import FetchErrorModal from '../components/modals/fetch-error'
import FetchLoadingModal from '../components/modals/fetch-loading'

export default function UpdatePage() {
    const { id } = useParams()
    const { data, error, loading } = useFetch('http://localhost/daftar-cov/daftar-cov-api.php' + id)
    const [modal, setModal] = useState(false)
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
  
    if (error) {
        setModal(true)
    }
    
    if (loading) {
        setModal(true)
    }

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
        {modal && <FetchErrorModal setModal={setModal} error={error} />}
        {modal && <FetchLoadingModal setModal={setModal} loading={loading}/>}
        {data && <main className='inputSection' id='blue'>
          <h1 className="inputTitle">ACCOUNT UPDATE</h1>
          <form className='inputForm' onSubmit={handleSubmit}>
            <div className='inputLeft'>
              <div className="inputField" id="newPassword">
              {/* This is one of the many webforms in this page. */}
                  <label htmlFor="newPassword">New Password: </label>
                  <input
                      onChange={handleChange}
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      placeholder={ data }
                      value={formData.newPassword}
                       />
              </div>
              <div className="inputField" id="confirmPassword">
                  <label htmlFor="confirmPassword">Confirm New Password: </label>
                  <input
                      onChange={handleChange}
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder={ data }
                      value={formData.confirmPassword}
                      pattern={formData.newPassword}
                       />
              </div>
              <div className="inputField" id="firstName">
                  <label htmlFor="firstName">First Name: </label>
                  <input
                      onChange={handleChange}
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder={ data }
                      value={formData.firstName}
                       />
              </div>
              <div className="inputField" id="lastName">
                  <label htmlFor="lastName">Last Name: </label>
                  <input
                      onChange={handleChange}
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder={ data }
                      value={formData.lastName}
                       />
              </div>
              <div className="inputField" id="cardNo">
                  <label htmlFor="cardNo">Identification Card No.: </label>
                  <input
                      onChange={handleChange}
                      type="text"
                      id="cardNo"
                      name="cardNo"
                      placeholder={ data }
                      value={formData.cardNo}
                      pattern="[0-9]{6}-[0-9, X]{2}-[0-9, X]{4}"
                       />
              </div>
              <div className="inputField" id="dateBirth">
                  <label htmlFor="dateBirth">Date of Birth: </label>
                  <input
                      onChange={handleChange}
                      type="date"
                      id="dateBirth"
                      name="dateBirth"
                      placeholder={ data }
                      value={formData.dateBirth}
                       />
              </div>
              <div className="inputField" id="phoneNo">
                  <label htmlFor="phoneNo">Phone Number: </label>
                  <input
                      onChange={handleChange}
                      type="tel"
                      id="phoneNo"
                      name="phoneNo"
                      value={formData.phoneNo}
                      placeholder={ data }
                      pattern="[0-9]{3}-[0-9, X]{3} [0-9, X]{4}"
                       />
              </div>
              <div className="inputField" id="emailAddress">
                  <label htmlFor="emailAddress">Email Address: </label>
                  <input
                      onChange={handleChange}
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      placeholder={ data }
                      value={formData.emailAddress}
                       />
              </div>
            </div>
            <div className='inputRight'>
                <div className="inputField" id="street">
                      <label htmlFor="street">Street: </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          id="street"
                          name="street"
                          placeholder={ data }
                          value={formData.street}
                           />
                  </div>
                  <div className="inputField" id="cityTown">
                      <label htmlFor="cityTown">City/Town: </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          id="cityTown"
                          name="cityTown"
                          placeholder={ data }
                          value={formData.cityTown}
                           />
                  </div>
                  <div className="inputField" id="state">
                      <label htmlFor="state">State: </label>
                      <select
                          onChange={handleChange}
                          id="state"
                          name="state"
                          placeholder={ data }
                          value={formData.state}
                          >
                          <option value=" " id='center'>--- SELECT ----</option>
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
                  <div className="inputField" id="postalCode">
                      <label htmlFor="postalCode">Postal Code: </label>
                      <input
                          onChange={handleChange}
                          type="number"
                          id="postalCode"
                          name="postalCode"
                          placeholder={ data }
                          value={formData.postalCode}
                          min="10000" max="99999"
                           />
                  </div>
                  <div className="inputField" id="medical">
                      <label htmlFor="medical">Medical Condition: </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          id="medical"
                          name="medical"
                          placeholder={ data }
                          value={formData.medical}
                           />
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="inputField">
                        <div></div>
                        <button className="inputButtons">UPDATE</button>
                  </div> 
            </div>
          </form>
        </main>}
    </div>
  )
}
