import React from 'react';


function LoggedOn(props) {
    return <h1>Hi {props.name}, welcome back!</h1>;
}


function SignIn() {
    return <button>Hi, log in to your account here</button>;
}


function Welcome(props) {
   const isLoggedOn = props.isLoggedOn
   const userName = props.name
   
   return  isLoggedOn ? <LoggedOn name={userName}/> : <SignIn/>
}

export default Welcome
