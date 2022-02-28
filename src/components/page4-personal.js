import React from 'react'
import Masthead from './masthead-blue'
import Footer from './footer'

export default function fullPersonalDetails() {
  return (
    <div>
        <Masthead />
        <main className="detailSection">
        {/* This is the main section of this page. */}

        <h1 className="detailTitle">FULL PERSONAL DETAILS</h1>
        {/* This box contains the full personal details of the user. */}

        <div className="detailLeft">
        {/* This is the invisible box within the .infoBox element which contains the .detailField elements on the left side. */}

            <div className="detailField" id="userID">
            {/* This element contains one of the many personal details of the users. */}

                <label for="userID">User ID: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="firstName">
                <label for="firstName">First Name: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="lastName">
                <label for="lastName">Last Name: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="cardNo">
                <label for="cardNo">Identification Card No.: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="dateBirth">
                <label for="dateBirth">Date of Birth:</label>
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
        {/* This is the invisible box within the .infoBox element which contains the .detailField elements on the left side. */}
            
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
            <div className="detailField" id="medical">
                <label for="medical">Medical Condition: </label>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
        </div>
        <div className="detailButtonSection">
            {/* This is the invisible box within the .infoBox element which contains the following buttons. */}
            <button className="infoDetailButtons" id="profilePage">Profile Page</button>
            <button className="infoDetailButtons" id="updateAccount">Update Account</button>
        </div> 
    </main>    
        <Footer />
    </div>
  )
}
