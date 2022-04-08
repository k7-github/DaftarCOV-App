import React from 'react'

export default function FetchErrorModal({setModal, error}) {
    // This component is placed in 3_vaccine.js, 4_personal.js and 5_update.js
    // It executes when there is an error in fetching data from the database in any of the above files.
    
    if (!error) {
        setModal(false)
    }

    return (
    <div className='modal-overlay'>
        <div className='modal-window'>
            <div className='modal-title'>
                <p>Postponement Confirmation</p>
            </div>
            <div className='modal-body'>
                <p>{ error }</p>
            </div>
            <div className='modal-bottom'>
                <button className='modal-buttons' onClick={() => setModal(false)}>OK</button>
            </div>
        </div>
    </div>
  )
}
