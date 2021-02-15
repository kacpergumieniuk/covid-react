import './App.scss';
import Main from './Main'
import Searching from './Searching'
import Results from './Results'
import {useState, useEffect} from 'react'

const url = 'https://api.covid19api.com/summary'
let allCountries;


function App() {

  const [page, setPage] = useState('MAIN');
  const [countryName, setCountryName] = useState('Giet');
  

  useEffect(() => {

    fetch(url).then(res => res.json())
              .then(data => {
                allCountries = data.Countries
                console.log(allCountries)
              })
  }, [])

    function setNameInResults (name) {
      setCountryName(name)
    }
  

  if(page === 'MAIN'){
    return <Main
     goToSearch={() => setPage('SEARCHING')} />
  }

  if(page === 'SEARCHING'){
    return <Searching
     goToMain={() => setPage('MAIN')}
     goToResults={() => setPage('RESULTS')}
     countries={allCountries}
    />
  }

  if(page === 'RESULTS'){
    return <Results
     goToSearch={() => setPage('SEARCHING')}
     countryName={countryName} />
  }



  

  return (
    <div className="App">
    {page}
    </div>
  );
}

export default App;


/* 

{
      mainActive ? 
      <Main goToSearch={toggleMainSearch} /> : 
      <Searching goToSearch={toggleMainSearch} countries={allCountries} />
    }

     function togglePages(x){
    if (x === 1){
      setPage('SEARCHING')
    }
    else if(x === 2){
      setPage('MAIN')
    }
  }

 
    

*/