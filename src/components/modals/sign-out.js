import React, { useContext } from 'react'
import { LoginContext } from '../login-context'
import { useNavigate } from 'react-router-dom'

export default function SignOutModal({setModal}) {
    const { setSignedIn } = useContext(LoginContext)
    const navigate = useNavigate()

    function cancelSignOut() {
        setModal(false)
    }

    function signOut() {
        setSignedIn(false)
        navigate('/')
    }
    return (
        <div className='modal-overlay'>
            <div className='modal-window'>
                <div className='modal-title'>
                    <p>Sign Out Confirmation</p>
                </div>
                <div className='modal-body'>
                    <p>Are you sure you want to sign out now?</p>
                </div>
                <div className='modal-bottom'>
                    <button className='modal-buttons' onClick={signOut}>Yes</button>
                    <button className='modal-buttons' onClick={cancelSignOut}>Cancel</button>
                </div>
            </div>
        </div>
      )
}