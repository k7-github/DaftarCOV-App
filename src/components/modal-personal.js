import React from 'react'

export default function ModalVaccine({setModal}) {
  
    function cancelUpdate() {
        setModal(false)
    }

    return (
    <div className='modal-overlay'>
        <div className='modal-window'>
            <div className='modal-title'>
                <p>Security Check</p>
            </div>
            <div className='modal-body'>
                <p>Please enter your password again to commence the account update process.</p>
                <p>(Password Web Form)</p>
            </div>
            <div className='modal-bottom'>
                <button className='modal-buttons'>OK</button>
                <button className='modal-buttons' onClick={cancelUpdate}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
