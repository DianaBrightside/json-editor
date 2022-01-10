import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { app } from "./app";

export const useGoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  signInWithPopup(auth, provider)
    .then((user) => {
      navigate.replace(from);
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
