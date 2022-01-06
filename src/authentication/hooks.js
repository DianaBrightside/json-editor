import {
    GoogleAuthProvider,
    getAuth,
    signInWithRedirect,
    onAuthStateChanged
} from "firebase/auth";
import {
    useEffect,
    useState
} from "react";
import app from "./app";

export const useGoogleAuth = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider);
}

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