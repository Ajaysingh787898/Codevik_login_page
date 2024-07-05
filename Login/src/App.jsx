import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './Components/Login';
import Admin from './Components/Admin';
import Buyer from './Components/Buyer';

function App() {
  return (

    <BrowserRouter>
      <Routes>
       
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/buyer' element={<Buyer/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
