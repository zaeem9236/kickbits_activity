import React, { useState, useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import LoginTemplate from './LoginTemplate';


function LoginPage() {
   
    let dispatch = useDispatch();
    let history = useHistory();
  

    useEffect(() => {
      
      }, []);
    
    
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <LoginTemplate />   
    </div>
  );
}

export default LoginPage;


