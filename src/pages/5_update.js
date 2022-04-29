import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Masthead from '../components/masthead-blue'
// import useFetch from '../components/useFetch'
// import FetchErrorModal from '../components/modals/fetch-error'
// import FetchLoadingModal from '../components/modals/fetch-loading'

export default function UpdatePage() {
    // const { id } = useParams()
    // const { data, error, loading } = useFetch(``)
        
    // const [modal, setModal] = useState(false)
    const [formData, setFormData] = useState(
      {
        newPassword: "",
        confirmPassword: "",
        applicantFirstName: "",
        applicantLastName: "",
        applicantCardNo: "",
        applicantDateBirth: "",
        applicantPhoneNo: "",
        applicantEmailAddress: "",
        applicantStreet: "",
        applicantCityTown: "",
        applicantState: "",
        applicantPostalCode: "",
        applicantMedical: ""
      }
    )
  
    // if (error) {
    //     setModal(true)
    // }
    
    // if (loading) {
    //     setModal(true)
    // }

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
        {/* {modal && <FetchErrorModal setModal={setModal} error={error} />} */}
        {/* {modal && <FetchLoadingModal setModal={setModal} loading={loading}/>} */}
        <main className='inputSection' id='blue'>
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
                      value={formData.confirmPassword}
                      pattern={formData.newPassword}
                       />
              </div>
              <div className="inputField" id="applicantFirstName">
                  <label htmlFor="applicantFirstName">First Name: </label>
                  <input
                      onChange={handleChange}
                      type="text"
                      id="applicantFirstName"
                      name="applicantFirstName"
                    //   placeholder={ data.applicants.FirstName }
                      value={formData.applicantFirstName}
                       />
              </div>
              <div className="inputField" id="applicantLastName">
                  <label htmlFor="applicantLastName">Last Name: </label>
                  <input
                      onChange={handleChange}
                      type="text"
                      id="applicantLastName"
                      name="applicantLastName"
                    //   placeholder={ data.applicants.LastName }
                      value={formData.applicantLastName}
                       />
              </div>
              <div className="inputField" id="applicantCardNo">
                  <label htmlFor="applicantCardNo">Identification Card No.: </label>
                  <input
                      onChange={handleChange}
                      type="text"
                      id="applicantCardNo"
                      name="applicantCardNo"
                    //   placeholder={ data.applicants.ICNo }
                      value={formData.applicantCardNo}
                      pattern="[0-9]{6}-[0-9, X]{2}-[0-9, X]{4}"
                       />
              </div>
              <div className="inputField" id="applicantDateBirth">
                  <label htmlFor="applicantDateBirth">Date of Birth: </label>
                  <input
                      onChange={handleChange}
                      type="date"
                      id="applicantDateBirth"
                      name="applicantDateBirth"
                    //   placeholder={ data.applicants.BirthDate }
                      value={formData.applicantDateBirth}
                       />
              </div>
              <div className="inputField" id="applicantPhoneNo">
                  <label htmlFor="applicantPhoneNo">Phone Number: </label>
                  <input
                      onChange={handleChange}
                      type="tel"
                      id="applicantPhoneNo"
                      name="applicantPhoneNo"
                      value={formData.applicantPhoneNo}
                    //   placeholder={ data.applicants.PhoneNo }
                      pattern="[0-9]{3}-[0-9, X]{3} [0-9, X]{4}"
                       />
              </div>
              <div className="inputField" id="applicantEmailAddress">
                  <label htmlFor="applicantEmailAddress">Email Address: </label>
                  <input
                      onChange={handleChange}
                      type="email"
                      id="applicantEmailAddress"
                      name="applicantEmailAddress"
                    //   placeholder={ data.applicants.EmailAddress }
                      value={formData.applicantEmailAddress}
                       />
              </div>
            </div>
            <div className='inputRight'>
                <div className="inputField" id="applicantStreet">
                      <label htmlFor="applicantStreet">Street: </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          id="applicantStreet"
                          name="applicantStreet"
                        //   placeholder={ data.applicants.Street }
                          value={formData.applicantStreet}
                           />
                  </div>
                  <div className="inputField" id="applicantCityTown">
                      <label htmlFor="applicantCityTown">City/Town: </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          id="applicantCityTown"
                          name="applicantCityTown"
                        //   placeholder={ data.applicants.CityTown }
                          value={formData.applicantCityTown}
                           />
                  </div>
                  <div className="inputField" id="applicantState">
                      <label htmlFor="applicantState">State: </label>
                      <select
                          onChange={handleChange}
                          id="applicantState"
                          name="applicantState"
                        //   placeholder={ data.applicants.CountryState }
                          value={formData.applicantState}
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
                  <div className="inputField" id="applicantPostalCode">
                      <label htmlFor="applicantPostalCode">Postal Code: </label>
                      <input
                          onChange={handleChange}
                          type="number"
                          id="applicantPostalCode"
                          name="applicantPostalCode"
                        //   placeholder={ data.applicants.PostalCode }
                          value={formData.applicantPostalCode}
                          min="10000" max="99999"
                           />
                  </div>
                  <div className="inputField" id="applicantMedical">
                      <label htmlFor="applicantMedical">Medical Condition: </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          id="applicantMedical"
                          name="applicantMedical"
                        //   placeholder={ data.applicants.MedicalCondition }
                          value={formData.applicantMedical}
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
        </main>
    </div>
  )
}
