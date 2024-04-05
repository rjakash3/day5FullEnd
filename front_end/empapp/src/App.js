import logo from './logo.svg';
import './App.css';
import Navbar from './Component.jsx/Navbar';
import { Route, Routes } from 'react-router-dom';
import AddEmployee from './Component.jsx/AddEmployee';
import ViewEmployee from './Component.jsx/ViewEmployee';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ViewEmployee/>}/>
        <Route path='/add' element={<AddEmployee/>}/>
      </Routes>
    </div>
  );
}

export default App;
