import './App.css';
import {AuthForm} from './Authentication/AuthForm';
import { AuthContext} from './Context/AuthContext';
import { useContext, useState, useEffect } from 'react';
import Dashboard from './component/dashboard';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const {authenticatePage, loading} = useContext(AuthContext)  
  if (loading) {
    return <div></div>;
  }
  return (
    <>
    {authenticatePage() ? <Dashboard /> : <AuthForm />}
  </>
  );
}

export default App;
