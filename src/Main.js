import React from 'react'
import Virus1 from './images/virus1.svg'
import Virus2 from './images/virus2.svg'

function Main() {
    return (
        <div className='main'>
            <h1>Covid Tracker</h1>
            <div className='button'>Get Started</div>
            <img src={Virus1} id="virus1"></img>
            <img src={Virus2} id="virus2"></img>
        </div>
    )
}

export default Main
