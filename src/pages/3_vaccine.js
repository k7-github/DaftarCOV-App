import React from 'react'
import Masthead from '../components/masthead-blue'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import { useEffect } from 'react'
import ModalVaccine from '../components/modal-vaccine'

export default function FullAppointmentDetails() {
//   const [data, setData] = useState({
//     appointmentID: "",
//     date: "",
//     time: "",
//     locationID: "",
//     locationName: "",
//     phoneNo: "",
//     emailAddress: "",
//     street: "",
//     cityTown: "",
//     state: "",
//     postalCode: ""
//   })

const [modal, setModal] = useState(false)

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
        <main className="detailSection" id="blue">
        {/* This is the main section of this page. */}

        <h1 className="detailTitle">APPOINTMENT DETAILS</h1>
        {/* This box contains the appointment details of the user. */}

        <div className="detailLeft">
        {/* This is the invisible box within the .infoBox element which contains the .infoField elements on the left side. */}
            <div className="detailField" id="appointmentID">
            {/* This element contains one of the many appointment details of the users. */}
                <label for="appointmentID">Appointment ID: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="date">
                <label for="date">Date: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="time">
                <label for="time">Time: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationID">
                <label for="locationID">Location ID: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationName">
                <label for="locationName">Location Name:</label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="phoneNo">
                <label for="phoneNo">Phone Number:</label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="emailAddress">
                <label for="emailAddress">Email Address: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
        </div>
        <div className="detailRight">
        {/* This is the invisible box within the .infoBox element which contains the .infoField elements on the left side. */}
            <div className="detailField" id="street">
                <label for="street">Street: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="cityTown">
                <label for="cityTown">City/Town: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="state">
                <label for="state">State: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="postalCode">
                <label for="postalCode">Postal Code:</label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
        </div>
        <div className="detailButtonSection">
        {/* This is the invisible box within the .infoBox element which contains the following buttons. */}
            <button className="detailButtons" id="personal" onClick={toPersonal}>Personal Details</button>
            <button className="detailButtons" id="postpone" onClick={postponeModal}>Postpone Appointment</button>
        </div> 
    </main>
    {modal === true && <ModalVaccine setModal={setModal} />}
    </div>
  )
}
