import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.config";

import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const login = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const loginWithGoogle = () => {
    setLoading(true);

    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider);
  };

  // login with facebook
  const loginWithFacebook = () => {
    setLoading(true);

    const provider = new FacebookAuthProvider();

    return signInWithPopup(auth, provider);
  };

  //  login with github
  const loginWithGithub = () => {
    const provider = new GithubAuthProvider();

    return signInWithPopup(auth, provider);
  };

  // logout user
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    login,
    createUser,
    loginWithGoogle,
    loginWithFacebook,
    loginWithGithub,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
