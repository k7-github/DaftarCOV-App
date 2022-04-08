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
                <label htmlFor="userID">User ID: </label>
                <p htmlFor="userID" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
                {/* Placeholders will be removed at a later date. */}
            </div>
            <div className="detailField" id="userFirstName">
                <label htmlFor="userFirstName">First Name: </label>
                <p htmlFor="userFirstName" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userLastName">
                <label htmlFor="userLastName">Last Name: </label>
                <p htmlFor="userLastName" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userCardNo">
                <label htmlFor="userCardNo">Identification Card No.: </label>
                <p htmlFor="userCardNo" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userDateBirth">
                <label htmlFor="userDateBirth">Date of Birth:</label>
                <p htmlFor="userDateBirth" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userPhoneNo">
                <label htmlFor="userPhoneNo">Phone Number:</label>
                <p htmlFor="userPhoneNo" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userEmailAddress">
                <label htmlFor="userEmailAddress">Email Address: </label>
                <p htmlFor="userEmailAddress" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
        </div>
        <div className="detailRight">
        {/* This is the invisible box within the .infoBox element which contains the .detailField elements on the left side. */}
            
            <div className="detailField" id="userStreet">
                <label htmlFor="userStreet">Street: </label>
                <p htmlFor="userStreet" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userCityTown">
                <label htmlFor="userCityTown">City/Town: </label>
                <p htmlFor="userCityTown" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userState">
                <label htmlFor="userState">State: </label>
                <p htmlFor="userState" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userPostalCode">
                <label htmlFor="userPostalCode">Postal Code:</label>
                <p htmlFor="userPostalCode" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userMedical">
                <label htmlFor="userMedical">Medical Condition: </label>
                <p htmlFor="userMedical" className="detailDatabase">{ data }</p>
                <label htmlFor="placeholder" className="detailDatabase">(Placeholder)</label>
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
