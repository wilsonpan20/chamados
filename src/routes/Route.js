import { useContext } from 'react';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthContex} from '../contexts/auth'

export default function RouteWrapper({
    component: Component,
  isPrivate,
  ...rest
}){
  const { signed,loading } = useContext(AuthContex);
 
  

  if(loading){
    return(
      <div></div>
    )
  }

  if(!signed && isPrivate){
    return <Redirect to="/" />
  }

  if(signed && !isPrivate){
    return <Redirect to="/dashboard" />
  }
  return(
    <Route
      {...rest}
      render={ props => (
        <Component {...props} />
      )}
    />
  )
}