import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utility/firebase.config.js";

export const AuthContext = createContext({});

const Auth = ({ children }) => {
  const [authInfo, setAuthInfo] = useState({});

  const createUserWithEP = async (name, email, password, purl) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: purl,
    });

    return user;
  };

  useEffect((_) => {
    setAuthInfo({
      createUserWithEP,
    });
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Auth;
