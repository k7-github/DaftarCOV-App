import React from 'react'
import ReactDom from 'react-dom'

export default function ModalHome() {
  return ReactDom.createPortal(
    <div className='modal-overlay'>
        <div className='modal-window'>
            <div className='modal-title'>
                <p>User Sign In</p>
            </div>
            <div className='modal-body'>
                <p>No need to enter credentials now</p>
            </div>
            <div className='modal-bottom'>
                <button className='modal-buttons'>Sign In</button>
                <button className='modal-buttons'>Cancel</button>
            </div>
        </div>
    </div>
  )
}
