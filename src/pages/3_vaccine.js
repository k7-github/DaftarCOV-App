import React from 'react'
// import { useState } from 'react'

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
  
  return (
    <div>
        <main className="detailSection" id="blue">
        {/* This is the main section of this page. */}

        <h1 className="detailTitle">FULL APPOINTMENT DETAILS</h1>
        {/* This box contains the full appointment details of the user. */}

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
            <button className="infoDetailButtons" id="personal">Full Personal Details</button>
            <button className="infoDetailButtons" id="postpone">Postpone Appointment</button>
        </div> 
    </main>
    </div>
  )
}
