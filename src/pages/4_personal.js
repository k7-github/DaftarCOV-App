import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

import Masthead from '../components/masthead-blue'
import useFetch from '../components/useFetch'
import FetchErrorModal from '../components/modals/fetch-error'
import FetchLoadingModal from '../components/modals/fetch-loading'
import SecurityUpdateModal from '../components/modals/update-security'

export default function PersonalDetails() {

const { ApplicantID } = useParams()
const { data, error, loading } = useFetch(`http://localhost/daftar-cov/daftar-cov-api.php/${ApplicantID}`)

const [modal, setModal] = useState(false)

if (error) {
    setModal(true)
}

if (loading) {
    setModal(true)
}

function updateModal() {
    setModal(true)
  }

const navigate = useNavigate()
function toVaccine () {
    navigate('/vaccine')
  }

  return (
    <div>
        <Masthead />
        {modal && <FetchErrorModal setModal={setModal} error={error} />}
        {modal && <FetchLoadingModal setModal={setModal} loading={loading}/>}
        {data && <main className="detailSection" id="blue">
        {/* This is the main section of this page. */}

        <h1 className="detailTitle">PERSONAL DETAILS</h1>
        {/* This box contains the personal details of the applicant. */}

        <div className="detailLeft">
            {/* This is the invisible box within the .infoBox element which contains the .detailField elements on the left side. */}
            <div className="detailField" id="applicantID">
            {/* This element contains one of the many personal details of the applicants. */}
                <label htmlFor="applicantID">Applicant ID: </label>
                <p id="applicantID" className="detailDatabase">{ data.applicants.ApplicantID }</p>
            </div>
            <div className="detailField" id="applicantFirstName">
                <label htmlFor="applicantFirstName">First Name: </label>
                <p id="applicantFirstName" className="detailDatabase">{ data.applicants.FirstName }</p>
            </div>
            <div className="detailField" id="applicantLastName">
                <label htmlFor="applicantLastName">Last Name: </label>
                <p id="applicantLastName" className="detailDatabase">{ data.applicants.LastName }</p>
            </div>
            <div className="detailField" id="applicantCardNo">
                <label htmlFor="applicantCardNo">Identification Card No.: </label>
                <p id="applicantCardNo" className="detailDatabase">{ data.applicants.ICNo }</p>
            </div>
            <div className="detailField" id="applicantDateBirth">
                <label htmlFor="applicantDateBirth">Date of Birth:</label>
                <p id="applicantDateBirth" className="detailDatabase">{ data.applicants.BirthDate }</p>
            </div>
            <div className="detailField" id="applicantPhoneNo">
                <label htmlFor="applicantPhoneNo">Phone Number:</label>
                <p id="applicantPhoneNo" className="detailDatabase">{ data.applicants.PhoneNo }</p>
            </div>
            <div className="detailField" id="applicantEmailAddress">
                <label htmlFor="applicantEmailAddress">Email Address: </label>
                <p id="applicantEmailAddress" className="detailDatabase">{ data.applicants.EmailAddress }</p>
            </div>
        </div>
        <div className="detailRight">
        {/* This is the invisible box within the .infoBox element which contains the .detailField elements on the right side. */}
            
            <div className="detailField" id="applicantStreet">
                <label htmlFor="applicantStreet">Street: </label>
                <p id="applicantStreet" className="detailDatabase">{ data.applicants.Street }</p>
            </div>
            <div className="detailField" id="applicantCityTown">
                <label htmlFor="applicantCityTown">City/Town: </label>
                <p id="applicantCityTown" className="detailDatabase">{ data.applicants.CityTown }</p>
            </div>
            <div className="detailField" id="applicantState">
                <label htmlFor="applicantState">State: </label>
                <p id="applicantState" className="detailDatabase">{ data.applicants.CountryState }</p>
            </div>
            <div className="detailField" id="applicantPostalCode">
                <label htmlFor="applicantPostalCode">Postal Code:</label>
                <p id="applicantPostalCode" className="detailDatabase">{ data.applicants.PostalCode }</p>
            </div>
            <div className="detailField" id="applicantMedical">
                <label htmlFor="applicantMedical">Medical Condition: </label>
                <p id="applicantMedical" className="detailDatabase">{ data.applicants.MedicalCondition }</p>
            </div>
        </div>
        <div className="detailButtonSection">
            {/* This is the invisible box within the .infoBox element which contains the following buttons. */}
            <button className="detailButtons" id="appointment" onClick={toVaccine}>Appointment Details</button>
            <button className="detailButtons" id="updateAccount" onClick={updateModal}>Update Account</button>
        </div> 
    </main>}
    {modal && <SecurityUpdateModal setModal={setModal} />}
    </div>
  )
}
