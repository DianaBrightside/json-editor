import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { app } from "./app";

export const useGoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  return () =>
    signInWithPopup(auth, provider)
      .then((user) => {
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
};

export const useUserChangedState = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [auth]);
  return [user];
};

export const useSignOut = () => {
  const auth = getAuth();
  return () =>
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log("something happened: ", error);
      });
};
