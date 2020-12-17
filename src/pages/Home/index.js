import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import API from '../../utils/API'
import './index.css'

export default function Home() {
    const [show, setShow] = useState(true)
    const [passcode, setPasscode] = useState('')
    const [username, setUsername] = useState('')

    const handleModalToggle = () => {
        setShow(!show)
    }

    const handleRoomJoin = () => {
        API.joinRoom(passcode, { user: username}).then(() => {
            // if allowed to join room, redirect to room
            window.location.href = '/room/' + passcode
        }).catch(err => {
            console.log('oops')
        })
    }

    const handlePasscodeInputChange = (event) => {
        // update state with new value of input field
        setPasscode(event.target.value)
    }

    const handleUsernameInputChange = (event) => {
        // update state with new value of input field
        setUsername(event.target.value)
    }

    return (
        <div>
            <h1>TIC TAC TOE</h1>
            <button className='home-btn create-room-btn'>Create Room</button>
            <button className='home-btn join-room-btn' onClick={handleModalToggle}>Join Room</button>

            <Modal show={show} onHide={handleModalToggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Join Room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className='form-control' type='text' value={username} placeholder='Username' onChange={handleUsernameInputChange} />
                    <input className='form-control' type='text' value={passcode} placeholder='Passcode' onChange={handlePasscodeInputChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalToggle}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleRoomJoin}>
                        Join Room
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
