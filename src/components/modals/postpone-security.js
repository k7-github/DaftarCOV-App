import React from 'react'

export default function SecurityPostponeModal({setModal}) {
    // This component executes when the "Postpone Appointment" button in 3_vaccine.js is clicked.
    // It requests the user to enter their password again before they can postpone their vaccination appointment.
    function cancelPostpone() {
        setModal(false)
    }

    return (
    <div className='modal-overlay'>
        <div className='modal-window'>
            <div className='modal-title'>
                <p>Postponement Confirmation</p>
            </div>
            <div className='modal-body'>
                <p>Please enter your password again to confirm that you want to postpone your appointment.</p>
                <p>(Password Web Form)</p>
            </div>
            <div className='modal-bottom'>
                <button className='modal-buttons'>OK</button>
                <button className='modal-buttons' onClick={cancelPostpone}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
