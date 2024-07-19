import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/loginad');
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <Button type="primary" onClick={handleClick} className="login-button">
        Login
      </Button>
    </div>
  );
};

export default HomePage;
