import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

import Masthead from '../components/masthead-blue'
import useFetch from '../components/useFetch'
import FetchErrorModal from '../components/modals/fetch-error'
import FetchLoadingModal from '../components/modals/fetch-loading'
import SecurityPostponeModal from '../components/modals/postpone-security'

export default function AppointmentDetails() {

const { ApplicantID } = useParams()
const { data, error, loading } = useFetch(`http://localhost/daftar-cov/daftar-cov-api.php/${ApplicantID}`)

const [modal, setModal] = useState(false)

if (error) {
    setModal(true)
}

if (loading) {
    setModal(true)
}

function postponeModal() {
    setModal(true)
  }

const navigate = useNavigate()  
function toPersonal () {
    navigate('/personal')
  }

return (
    <div>
        <Masthead />
        {modal && <FetchErrorModal setModal={setModal} error={error} />}/
        {modal && <FetchLoadingModal setModal={setModal} loading={loading}/>}
        {data && <main className="detailSection" id="blue">
        {/* This is the main section of this page. */}

        <h1 className="detailTitle">APPOINTMENT DETAILS</h1>
        {/* This box contains the appointment details of the user. */}

        <div className="detailLeft">
        {/* This is the invisible box within the .infoBox element which contains the .infoField elements on the left side. */}
            <div className="detailField" id="appointmentID">
            {/* This element contains one of the many appointment details of the users. */}
                <label htmlFor="appointmentID">Appointment ID: </label>
                <p id="appointmentID" className="detailDatabase">{ data.appointments.AppointmentID }</p>
            </div>
            <div className="detailField" id="appointmentDate">
                <label htmlFor="appointmentDate">Appointment Date: </label>
                <p id="appointmentDate" className="detailDatabase">{ data.appointments.DateandTime }</p>
            </div>
            <div className="detailField" id="appointmentTime">
                <label htmlFor="appointmentTime">Appointment Time: </label>
                <p id="appointmentTime" className="detailDatabase">{ data.appointments.DateandTime }</p>
            </div>
            <div className="detailField" id="locationID">
                <label htmlFor="locationID">Location ID: </label>
                <p id="locationID" className="detailDatabase">{ data.appointments.LocationID }</p>
            </div>
            <div className="detailField" id="locationName">
                <label htmlFor="locationName">Location Name:</label>
                <p id="locationName" className="detailDatabase">{ data.locations.Name }</p>
            </div>
            <div className="detailField" id="locationPhoneNo">
                <label htmlFor="locationPhoneNo">Phone Number:</label>
                <p id="locationPhoneNo" className="detailDatabase">{ data.locations.PhoneNo }</p>
            </div>
            <div className="detailField" id="locationEmailAddress">
                <label htmlFor="locationEmailAddress">Email Address: </label>
                <p id="locationEmailAddress" className="detailDatabase">{ data.locations.EmailAddress }</p>
            </div>
        </div>
        <div className="detailRight">
        {/* This is the invisible box within the .infoBox element which contains the .infoField elements on the right side. */}
            <div className="detailField" id="locationStreet">
                <label htmlFor="locationStreet">Street: </label>
                <p id="locationStreet" className="detailDatabase">{ data.locations.Street }</p>
            </div>
            <div className="detailField" id="locationCityTown">
                <label htmlFor="locationCityTown">City/Town: </label>
                <p id="locationCityTown" className="detailDatabase">{ data.locations.CityTown }</p>
            </div>
            <div className="detailField" id="locationState">
                <label htmlFor="locationState">State: </label>
                <p id="locationState" className="detailDatabase">{ data.location.CountryState }</p>
            </div>
            <div className="detailField" id="locationPostalCode">
                <label htmlFor="locationPostalCode">Postal Code:</label>
                <p id="locationPostalCode" className="detailDatabase">{ data.locations.PostalCode }</p>
            </div>
        </div>
        <div className="detailButtonSection">
        {/* This is the invisible box within the .infoBox element which contains the following buttons. */}
            <button className="detailButtons" id="personal" onClick={toPersonal}>Personal Details</button>
            <button className="detailButtons" id="postpone" onClick={postponeModal}>Postpone Appointment</button>
        </div> 
    </main>}
    {modal && <SecurityPostponeModal setModal={setModal} />}
    </div>
  )
}
