import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ModalHome({setModal}) {
    
    const navigate = useNavigate()
    function toPersonal () {
        navigate('/personal')
      }
    
    function cancelSignIn() {
        setModal(false)
    }

    return (
    <div className='modal-overlay'>
        <div className='modal-window'>
            <div className='modal-title'>
                <p>User Sign In</p>
            </div>
            <div className='modal-body'>
                <p>No need to enter credentials now</p>
            </div>
            <div className='modal-bottom'>
                <button className='modal-buttons' onClick={toPersonal}>Sign In</button>
                <button className='modal-buttons' onClick={cancelSignIn}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
