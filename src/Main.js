import React, { useRef, useEffect } from 'react'
import {ReactComponent as Virus1} from './images/virus1.svg'
import {ReactComponent as Virus2} from './images/virus2.svg'
import gsap from 'gsap'

function Main() {

    const wrapper = useRef(null);

    useEffect(() => {

        const virus1 = wrapper.current.children[0];
        const virus2 = wrapper.current.children[1];

        gsap.set([virus1, virus2], {authoAlpha: 0});

        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});

        tl.fromTo(virus2, {x: '-=100%'}, {duration: 2, x: '+=100%', autoAlpha: 1})
          .fromTo(virus1, {x: '+=100%'}, {duration: 2, x: '-=100%', autoAlpha: 1}, '-=1.4')       

    }, [])

    return (
        <div className='main'>
            <h1>Covid Tracker</h1>
            <div className='button'>Get Started</div>
            <div ref={wrapper}>
            <Virus1 id='virus1' />
            <Virus2 id='virus2' />
            </div>
        </div>
    )
}

export default Main
