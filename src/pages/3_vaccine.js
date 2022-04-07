import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Masthead from '../components/masthead-blue'
import SecurityPostponeModal from '../components/modals/postpone-security'
import useFetch from '../components/useFetch'


export default function AppointmentDetails() {

const { id } = useParams()
const { data, error, loading } = useFetch('', id)
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
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="appointmentDate">
                <label for="appointmentDate">Date: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="appointmentTime">
                <label for="appointmentTime">Time: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationID">
                <label for="locationID">Location ID: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationName">
                <label for="locationName">Location Name:</label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationPhoneNo">
                <label for="locationPhoneNo">Phone Number:</label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationEmailAddress">
                <label for="locationEmailAddress">Email Address: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
        </div>
        <div className="detailRight">
        {/* This is the invisible box within the .infoBox element which contains the .infoField elements on the left side. */}
            <div className="detailField" id="locationStreet">
                <label for="locationStreet">Street: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationCityTown">
                <label for="locationCityTown">City/Town: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationState">
                <label for="locationState">State: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="locationPostalCode">
                <label for="locationPostalCode">Postal Code:</label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
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
