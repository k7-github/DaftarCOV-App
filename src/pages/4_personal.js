import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Masthead from '../components/masthead-blue'
import ModalPersonal from '../components//modals/update-security'
import useFetch from '../components/useFetch'

export default function PersonalDetails() {

const { id } = useParams()
const { data, error, loading } = useFetch('', id)
const [modal, setModal] = useState(false)

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
        <main className="detailSection" id="blue">
        {/* This is the main section of this page. */}

        <h1 className="detailTitle">PERSONAL DETAILS</h1>
        {/* This box contains the personal details of the user. */}

        <div className="detailLeft">
        {/* This is the invisible box within the .infoBox element which contains the .detailField elements on the left side. */}

            <div className="detailField" id="userID">
            {/* This element contains one of the many personal details of the users. */}

                <label for="userID">User ID: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userFirstName">
                <label for="userFirstName">First Name: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userLastName">
                <label for="userLastName">Last Name: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userCardNo">
                <label for="userCardNo">Identification Card No.: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userDateBirth">
                <label for="userDateBirth">Date of Birth:</label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userPhoneNo">
                <label for="userPhoneNo">Phone Number:</label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userEmailAddress">
                <label for="userEmailAddress">Email Address: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
        </div>
        <div className="detailRight">
        {/* This is the invisible box within the .infoBox element which contains the .detailField elements on the left side. */}
            
            <div className="detailField" id="userStreet">
                <label for="userStreet">Street: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userCityTown">
                <label for="userCityTown">City/Town: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userState">
                <label for="userState">State: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userPostalCode">
                <label for="userPostalCode">Postal Code:</label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
            <div className="detailField" id="userMedical">
                <label for="userMedical">Medical Condition: </label>
                {loading && <p className= "loadingPlaceholder">Loading...</p>}
                {data && <p className="detailDatabase">{ data }</p>}
                <label for="placeholder" className="detailDatabase">(Placeholder)</label>
            </div>
        </div>
        <div className="detailButtonSection">
            {/* This is the invisible box within the .infoBox element which contains the following buttons. */}
            <button className="detailButtons" id="appointment" onClick={toVaccine}>Appointment Details</button>
            <button className="detailButtons" id="updateAccount" onClick={updateModal}>Update Account</button>
        </div> 
    </main>    
    {modal === true && <ModalPersonal setModal={setModal} />}
    </div>
  )
}
