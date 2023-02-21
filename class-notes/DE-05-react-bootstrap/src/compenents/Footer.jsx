import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <Navbar className='bg-dark text-light p-4 d-flex justify-content-center fixed-bottom'>
                <p>
                    Copyright {new Date().getFullYear()}
                </p>
            </Navbar>
        </div>
    )
}

export default Footer