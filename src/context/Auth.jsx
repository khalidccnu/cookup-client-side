import React, { createContext, useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  auth,
  googleProvider,
  githubProvider,
} from "../utility/firebase.config.js";

export const AuthContext = createContext({});

const Auth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const createUserWithEP = async (name, email, password, purl) => {
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((_) => {
      logOut();
      return true;
    });
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

  const signInWithGithub = (_) => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = (_) => {
    return signOut(auth);
  };

  const authInfo = {
    loading,
    userInfo,
    createUserWithEP,
    signInWithEP,
    signInWithGoogle,
    signInWithGithub,
    logOut,
  };

  useEffect(() => {
    const authChange = onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
      setLoading(false);
    });

    return () => authChange();
  }, []);

  return loading ? (
    <div className="flex justify-center mt-5">
      <Circles height="40" width="40" color="#4bb75b" />
    </div>
  ) : (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Auth;
