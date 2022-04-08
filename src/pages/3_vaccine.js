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
const { data, error, loading } = useFetch('', id)
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
                <label for="appointmentID">Appointment ID: </label>
                <p for="appointmentID" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
                {/* Placeholders will be removed at a later date. */}
            </div>
            <div className="detailField" id="appointmentDate">
                <label for="appointmentDate">Date: </label>
                <p for="appointmentDate" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="appointmentTime">
                <label for="appointmentTime">Time: </label>
                <p for="appointmentTime" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationID">
                <label for="locationID">Location ID: </label>
                <p for="locationID" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationName">
                <label for="locationName">Location Name:</label>
                <p for="locationName" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationPhoneNo">
                <label for="locationPhoneNo">Phone Number:</label>
                <p for="locationPhoneNo" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationEmailAddress">
                <label for="locationEmailAddress">Email Address: </label>
                <p for="locationEmailAddress" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
        </div>
        <div className="detailRight">
        {/* This is the invisible box within the .infoBox element which contains the .infoField elements on the left side. */}
            <div className="detailField" id="locationStreet">
                <label for="locationStreet">Street: </label>
                <p for="locationStreet" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationCityTown">
                <label for="locationCityTown">City/Town: </label>
                <p for="locationCityTown" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationState">
                <label for="locationState">State: </label>
                <p for="locationState" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationPostalCode">
                <label for="locationPostalCode">Postal Code:</label>
                <p for="locationPostalCode" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
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
