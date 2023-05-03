import React, { createContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../utility/firebase.config.js";

export const AuthContext = createContext({});

const Auth = ({ children }) => {
  const [authInfo, setAuthInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});

  const createUserWithEP = async (name, email, password, purl) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: purl,
    });

    return user;
  };

  const signInWithEP = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = (_) => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = (_) => {
    return signOut(auth);
  };

  useEffect(() => {
    const authChange = onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });

    return () => authChange();
  }, []);

  useEffect(
    (_) => {
      setAuthInfo({
        userInfo,
        createUserWithEP,
        signInWithEP,
        signInWithGoogle,
        logOut,
      });
    },
    [userInfo]
  );

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Auth;
