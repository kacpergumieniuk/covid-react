import React, { useRef, useEffect } from 'react'

import {ReactComponent as Virus1} from './images/virus1.svg'
import {ReactComponent as Virus2} from './images/virus2.svg'
import gsap from 'gsap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Main({goToSearch}) {

    const mainWrapper = useRef(null);

    useEffect(() => {

        const virus1 = mainWrapper.current.children[0];
        const virus2 = mainWrapper.current.children[1];

        

        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});

        tl.fromTo(virus2, {x: '-=100%'}, {duration: 2, x: '+=100%'})
          .fromTo(virus1, {x: '+=100%'}, {duration: 2, x: '-=100%'}, '-=1.4')       

    }, [])

    return (
       
        <div className='main'>
            <h1>Covid Tracker</h1>
            <div className='button' onClick={goToSearch}>
                Get Started
                </div>
            <div ref={mainWrapper}>
            <Virus1 id='virus1' />
            <Virus2 id='virus2' />
            </div>
        </div>

        
         
          
        
    )
}

export default Main
