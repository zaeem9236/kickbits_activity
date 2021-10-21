import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginTemplate from './LoginTemplate';


function LoginPage() {
    
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <LoginTemplate />   
    </div>
  );
}

export default LoginPage;


