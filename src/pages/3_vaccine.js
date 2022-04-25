import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Masthead from '../components/masthead-blue'
// import useFetch from '../components/useFetch'
// import FetchErrorModal from '../components/modals/fetch-error'
// import FetchLoadingModal from '../components/modals/fetch-loading'
import SecurityPostponeModal from '../components/modals/postpone-security'

export default function AppointmentDetails() {

// const { id } = useParams()
// const { data, error, loading } = useFetch()
// To launch the JSON server:
    // 1. Open the terminal (press Ctlr + `), then do one of the following methods:
        // Click the plus button or press Ctrl+Shift+` to open a new terminal; or
        // Click the symbol on the left of the trash can symbol or press Ctrl+Shift+5 to split the terminal.
    // Type one of the following commands in one of the terminals:
        // npx json-server -p 3500 -w database/database.json
        // npx json-server --watch database/database.json --port 8000

const [modal, setModal] = useState(false)

// if (error) {
//     setModal(true)
// }

// if (loading) {
//     setModal(true)
// }

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
        {/* {modal && <FetchErrorModal setModal={setModal} error={error} />}/ */}
        {/* {modal && <FetchLoadingModal setModal={setModal} loading={loading}/>} */}
        <main className="detailSection" id="blue">
        {/* This is the main section of this page. */}

        <h1 className="detailTitle">APPOINTMENT DETAILS</h1>
        {/* This box contains the appointment details of the user. */}

        <div className="detailLeft">
        {/* This is the invisible box within the .infoBox element which contains the .infoField elements on the left side. */}
            <div className="detailField" id="appointmentID">
            {/* This element contains one of the many appointment details of the users. */}
                <label htmlFor="appointmentID">Appointment ID: </label>
                {/* <p id="appointmentID" className="detailDatabase">{ data.appointments.AppointmentID }</p> */}
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
                {/* Placeholders will be removed at a later date. */}
            </div>
            <div className="detailField" id="appointmentDate">
                <label htmlFor="appointmentDate">Appointment Date: </label>
                {/* <p id="appointmentDate" className="detailDatabase">{ data.appointments.DateandTime }</p> */}
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="appointmentTime">
                <label htmlFor="appointmentTime">Appointment Time: </label>
                {/* <p id="appointmentTime" className="detailDatabase">{ data.appointments.DateandTime }</p> */}
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationID">
                <label htmlFor="locationID">Location ID: </label>
                {/* <p id="locationID" className="detailDatabase">{ data.appointments.LocationID }</p> */}
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationName">
                <label htmlFor="locationName">Location Name:</label>
                {/* <p id="locationName" className="detailDatabase">{ data.locations.Name }</p> */}
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationPhoneNo">
                <label htmlFor="locationPhoneNo">Phone Number:</label>
                {/* <p id="locationPhoneNo" className="detailDatabase">{ data.locations.PhoneNo }</p> */}
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationEmailAddress">
                <label htmlFor="locationEmailAddress">Email Address: </label>
                {/* <p id="locationEmailAddress" className="detailDatabase">{ data.locations.EmailAddress }</p> */}
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
        </div>
        <div className="detailRight">
        {/* This is the invisible box within the .infoBox element which contains the .infoField elements on the left side. */}
            <div className="detailField" id="locationStreet">
                <label htmlFor="locationStreet">Street: </label>
                {/* <p id="locationStreet" className="detailDatabase">{ data.locations.Street }</p> */}
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationCityTown">
                <label htmlFor="locationCityTown">City/Town: </label>
                {/* <p id="locationCityTown" className="detailDatabase">{ data.locations.CityTown }</p> */}
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationState">
                <label htmlFor="locationState">State: </label>
                {/* <p id="locationState" className="detailDatabase">{ data.location.CountryState }</p> */}
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationPostalCode">
                <label htmlFor="locationPostalCode">Postal Code:</label>
                {/* <p id="locationPostalCode" className="detailDatabase">{ data.locations.PostalCode }</p> */}
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
        </div>
        <div className="detailButtonSection">
        {/* This is the invisible box within the .infoBox element which contains the following buttons. */}
            <button className="detailButtons" id="personal" onClick={toPersonal}>Personal Details</button>
            <button className="detailButtons" id="postpone" onClick={postponeModal}>Postpone Appointment</button>
        </div> 
    </main>
    {modal && <SecurityPostponeModal setModal={setModal} />}
    </div>
  )
}
