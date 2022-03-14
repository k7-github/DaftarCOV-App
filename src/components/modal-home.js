import React, { useContext } from 'react'
import { LoginContext } from './login-context'
import { useNavigate } from 'react-router-dom'

export default function ModalHome({setModal}) {
    
    const { setSignedIn } = useContext(LoginContext)
    const navigate = useNavigate()
    function toPersonal () {
        setSignedIn(true)
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
                <p>(Web form for user's email address)</p>
                <p>(Web form for user's password)</p>
            </div>
            <div className='modal-bottom'>
                <button className='modal-buttons' onClick={toPersonal}>Sign In</button>
                <button className='modal-buttons' onClick={cancelSignIn}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
