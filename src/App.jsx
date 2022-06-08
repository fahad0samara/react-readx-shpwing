
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import {Routes, Route} from "react-router-dom";

import { useContext } from 'react'
  import { themeContext } from './Context'
import Data from "./Card-Data/fitness products/Data";
import Dataa from "./Card-Data/body products/Data";
function App() {
  
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  
    

      
  return (
    <div   style={{
      background: darkMode ? 'black' : '',
      color: darkMode ? 'white' : '',
    }}
>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
      <Data/>
      <Dataa/>

     
    </div>
  );
}

export default App;
