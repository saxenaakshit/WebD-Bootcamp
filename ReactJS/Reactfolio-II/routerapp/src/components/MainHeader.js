import React from 'react'
import { Outlet } from 'react-router-dom';
import Home from './Home';

export const MainHeader = () => {
  return (
    
    <div>
        <Outlet/>
    </div>
  )
  
}

export default Home;