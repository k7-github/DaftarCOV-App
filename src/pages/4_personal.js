import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

import Masthead from '../components/masthead-blue'
import useFetch from '../components/useFetch'
import FetchErrorModal from '../components/modals/fetch-error'
import FetchLoadingModal from '../components/modals/fetch-loading'
import SecurityUpdateModal from '../components/modals/update-security'

export default function PersonalDetails() {

const { id } = useParams()
const { data, error, loading } = useFetch('', id)
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
        {/* This box contains the personal details of the user. */}

        <div className="detailLeft">
        {/* This is the invisible box within the .infoBox element which contains the .detailField elements on the left side. */}

            <div className="detailField" id="userID">
            {/* This element contains one of the many personal details of the users. */}
                <label for="userID">User ID: </label>
                <p for="userID" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
                {/* Placeholders will be removed at a later date. */}
            </div>
            <div className="detailField" id="userFirstName">
                <label for="userFirstName">First Name: </label>
                <p for="userFirstName" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userLastName">
                <label for="userLastName">Last Name: </label>
                <p for="userLastName" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userCardNo">
                <label for="userCardNo">Identification Card No.: </label>
                <p for="userCardNo" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userDateBirth">
                <label for="userDateBirth">Date of Birth:</label>
                <p for="userDateBirth" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userPhoneNo">
                <label for="userPhoneNo">Phone Number:</label>
                <p for="userPhoneNo" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userEmailAddress">
                <label for="userEmailAddress">Email Address: </label>
                <p for="userEmailAddress" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
        </div>
        <div className="detailRight">
        {/* This is the invisible box within the .infoBox element which contains the .detailField elements on the left side. */}
            
            <div className="detailField" id="userStreet">
                <label for="userStreet">Street: </label>
                <p for="userStreet" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userCityTown">
                <label for="userCityTown">City/Town: </label>
                <p for="userCityTown" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userState">
                <label for="userState">State: </label>
                <p for="userState" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userPostalCode">
                <label for="userPostalCode">Postal Code:</label>
                <p for="userPostalCode" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userMedical">
                <label for="userMedical">Medical Condition: </label>
                <p for="userMedical" className="detailDatabase">{ data }</p>
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
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
