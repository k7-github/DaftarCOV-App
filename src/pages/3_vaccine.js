import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

import Masthead from '../components/masthead-blue'
import useFetch from '../components/useFetch'
import FetchErrorModal from '../components/modals/fetch-error'
import FetchLoadingModal from '../components/modals/fetch-loading'
import SecurityPostponeModal from '../components/modals/postpone-security'

export default function AppointmentDetails() {

const { id } = useParams()
const { data, error, loading } = useFetch('' + id)
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
        {modal && <FetchErrorModal setModal={setModal} error={error} />}
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
                <p htmlFor="appointmentID" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
                {/* Placeholders will be removed at a later date. */}
            </div>
            <div className="detailField" id="appointmentDate">
                <label htmlFor="appointmentDate">Date: </label>
                <p htmlFor="appointmentDate" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="appointmentTime">
                <label htmlFor="appointmentTime">Time: </label>
                <p htmlFor="appointmentTime" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationID">
                <label htmlFor="locationID">Location ID: </label>
                <p htmlFor="locationID" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationName">
                <label htmlFor="locationName">Location Name:</label>
                <p htmlFor="locationName" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationPhoneNo">
                <label htmlFor="locationPhoneNo">Phone Number:</label>
                <p htmlFor="locationPhoneNo" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationEmailAddress">
                <label htmlFor="locationEmailAddress">Email Address: </label>
                <p htmlFor="locationEmailAddress" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
        </div>
        <div className="detailRight">
        {/* This is the invisible box within the .infoBox element which contains the .infoField elements on the left side. */}
            <div className="detailField" id="locationStreet">
                <label htmlFor="locationStreet">Street: </label>
                <p htmlFor="locationStreet" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationCityTown">
                <label htmlFor="locationCityTown">City/Town: </label>
                <p htmlFor="locationCityTown" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationState">
                <label htmlFor="locationState">State: </label>
                <p htmlFor="locationState" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationPostalCode">
                <label htmlFor="locationPostalCode">Postal Code:</label>
                <p htmlFor="locationPostalCode" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
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
