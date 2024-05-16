import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { Login } from './components/Login';

export const PrivateRoute = ({children}) => {
    let {isLoggedIn} = useContext(AuthContext) ;
    if(!isLoggedIn){
        alert("for quiz , go to login...") ;
    }
  return (
        isLoggedIn ? children : <Login/> 
  )
}
