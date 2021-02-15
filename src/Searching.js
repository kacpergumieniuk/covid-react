import React, { useRef, useEffect, useState } from 'react'
import {ReactComponent as Virus} from './images/virus2.svg'
import { BiSearchAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import gsap from 'gsap'



function Searching({goToMain , goToResults, countries, setCountryName, setTotalCases, setTotalDeaths, setTotalRecovered}) {

    const virus3ref = useRef(null);

    useEffect(() => {

        const virus3 = virus3ref.current;
        gsap.fromTo(virus3, {x: '+=100%'}, {duration: 1.5, x: '-=100%', autoAlpha: 1, ease:'power3.inOut'})

    }, [])

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className='searching'>
            <h2>Search for a desired country</h2>
            <div className='input-box'>
                <input type='text' onChange={event => setSearchTerm(event.target.value)}></input>
                <BiSearchAlt id='search-icon' />
            </div>
            <div className='suggestions'>
            {countries.filter((val) => {
                if(searchTerm == ''){
                    return ''
                }
                else if(val.Country.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return val
                }


            }).map((val, key) => {
                return (
                    <div key={key} onClick={() => 
                        {
                            setCountryName(val.Country)
                            setTotalCases(val.TotalConfirmed)
                            setTotalDeaths(val.TotalDeaths)
                            setTotalRecovered(val.TotalRecovered)
                            goToResults();
                        }
                        
                       }>{val.Country}</div>
                )
            })} 
            </div>
            <Virus id='virus3' ref={virus3ref} />
            <BiLeftArrowAlt className='arrow-back' onClick={goToMain} />
           
        </div>
    )
}

export default Searching



/*{countries.filter((val) => {
                if(searchTerm == ''){
                    return ''
                }
                else if(val.Country.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return val
                }


            }).map((val, key) => {
                return (
                    <div key={key}>{val.Country}</div>
                )
            })}  */