import {React} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Communaute from './pages/Communaute';
import Reglage from './pages/Reglage';

/**
 * This function will return the router from the member Id
 * @param {object} props either memberId or undefined. In this case member Id is taken from the window current url
 * @returns {HTMLElement} router
 */
const App = (props) => {
  let memberId= "12";
  if (props[0] === undefined){
    let myUrl = window.location.href;
    memberId = myUrl.split("/")[3].split("#")[0];//sometimes "#"" is added at the end when enter is pressed
  }else{
    ({memberId} = props);
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"+memberId} element={<Home memberId={memberId}/>} />
          <Route path={"/"+memberId+"/profil"} element={<Profil memberId={memberId}/>}/> 
          <Route path={"/"+memberId+"/reglage"} element={<Reglage memberId={memberId}/>}/> 
          <Route path={"/"+memberId+"/communaute"} element={<Communaute memberId={memberId}/>}/> 
        </Routes>
      </BrowserRouter>  
    </div>
  );
};

export default App;