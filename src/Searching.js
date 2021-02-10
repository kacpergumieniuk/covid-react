import React, { useRef, useEffect } from 'react'
import {ReactComponent as Virus} from './images/virus2.svg'
import { BiSearchAlt } from "react-icons/bi";
import gsap from 'gsap'



function Searching() {

    const virus3ref = useRef(null);

    useEffect(() => {

        const virus3 = virus3ref.current;
        gsap.fromTo(virus3, {x: '+=100%'}, {duration: 1.5, x: '-=100%', autoAlpha: 1, ease:'power3.inOut'})

    }, [])

    return (
        <div className='searching'>
            <h2>Search for a desired country</h2>
            <div className='input-box'>
                <input></input>
                <BiSearchAlt id='search-icon' />
            </div>
            <Virus id='virus3' ref={virus3ref}/>
            
        </div>
    )
}

export default Searching
