import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/loginad')
  }
  return(
    <div className='ji'>
    <h2>Welcome to the Home Page</h2>
    <Button type='primary' onClick={handleClick} >Login</Button>
  </div>
  )
  
};

export default HomePage;
