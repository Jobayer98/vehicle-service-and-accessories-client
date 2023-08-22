import React from "react";

const AuthContext = React.createContext({
  user: null,
  setUser: () => {},
  loading: false,
  login: (email, password) => {},
  logout: () => {},
  createUser: (email, password) => {},
  loginWithGoogle: () => {},
  loginWithFacebook: () => {},
  loginWithGithub: () => {},
});

export default AuthContext;
