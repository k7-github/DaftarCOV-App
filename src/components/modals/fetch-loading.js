import React from 'react'

export default function FetchLoadingModal({setModal, loading}) {
    // This component is placed in 3_vaccine.js, 4_personal.js and 5_update.js
    // It executes when the app is in the process of fetching data from the database in any of the above files.

    if (!loading) {
        setModal(false)
    }

    return (
    <div className='modal-overlay'>
        <div className='modal-window'>
            <div className='modal-title'>
                <p></p>
            </div>
            <div className='modal-body'>
                <p>LOADING...</p>
            </div>
        </div>
    </div>
  )
}
