import './App.scss';
import Main from './Main'
import Searching from './Searching'
import {useState} from 'react'



function App() {

  const [mainActive , setMainActive] = useState(false);
  const [searchingActive, setSearchingActive] = useState(false);
  
  function toggleMainSearch() {
    if(mainActive){
      setMainActive(false)
    }
    else{
      setMainActive(true)
    }
  }

  return (
    <div className="App">
    {
      mainActive ? 
      <Main goToSearch={toggleMainSearch} /> : 
      <Searching goToSearch={toggleMainSearch} />
    }
    </div>
  );
}

export default App;
