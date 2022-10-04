import { Route, Routes } from 'react-router-dom';
import '../../../App.css' ;
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Add from './pages/user/Add';
import Edit from './pages/user/Edit';
import Users from './pages/user/Users';

function Phase() {
  return (
      <Navbar/>
  );
}

export default Phase;
