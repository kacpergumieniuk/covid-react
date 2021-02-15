import React, {useRef, useEffect} from 'react'
import { BiLeftArrowAlt } from "react-icons/bi";
import {ReactComponent as Virus} from './images/virus2.svg'
import gsap from 'gsap'

function Results({ goToSearch, countryName }) {

    const virus4ref = useRef(null);

    useEffect(() => {

        const virus4 = virus4ref.current;
        gsap.fromTo(virus4, {x: '-=100%'}, {duration: 1.5, x: '+=100%', autoAlpha: 1, ease:'power3.inOut'})

    }, [])


    return (
        <div className='results'>
            <h2>{countryName}</h2>
            
            <h3>Total cases</h3>
            <p>2222222</p>

            <h3>Total deaths</h3>
            <p>2222222</p>

            <h3>Total recovered</h3>
            <p>2222222</p>
            
            <BiLeftArrowAlt className='arrow-back' onClick={goToSearch}/ >
            <Virus id='virus4' ref={virus4ref}/>
        </div>
    )
}

export default Results
