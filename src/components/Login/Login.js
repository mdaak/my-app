import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import {UserContext} from "../../../App"
import './Login.css';
import Navbar from '../../Home/Navbar/Navbar';
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from './firebase.config.js';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


const LogIn = () => {
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { form: { pathname: "/" } };


     
   const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
   firebase.auth().signInWithPopup(googleProvider)
     .then((result) => {
       console.log(result);
       setLoggedInUser(result.user);
       history.replace(from);
     })
      .catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
  
  }
  
  console.log(loggedInUser.displayName)
  console.log(loggedInUser.email)
  console.log(loggedInUser.photoURL)


  return (
    <div>
      <Navbar></Navbar>
        <div className="containerLogin bg-light">
            <div className="row ">
              <h2 style={{textAlign:"center"}}>Login with Google</h2>
              <div className="col ">
                <button className="fa fa-google fa-fw btn btn-primary google" onClick={handleGoogleSignIn}>Login with Google</button>
              </div>
            </div>
        </div>
      </div>
  );
};

export default LogIn;