import React from 'react'

export default function ModalVaccine({setModal}) {
  
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
            </div>
            <div className='modal-bottom'>
                <button className='modal-buttons'>Postpone</button>
                <button className='modal-buttons' onClick={cancelPostpone}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
