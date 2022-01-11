import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

import { app } from "./app";

export const useGoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
<<<<<<< HEAD
  return () =>
    signInWithPopup(auth, provider)
      .then((user) => {
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
=======
  return () => signInWithPopup(auth, provider)
    .then((user) => {
      navigate(from, { replace: true });
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
>>>>>>> 95124fdd6587562e6fcb7a68989d6125a1c20dc2
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
