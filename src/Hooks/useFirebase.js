import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser('')
            })
            .finally(() => setIsLoading(false));

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(user)
            }
            setIsLoading(false)
        });
        return () => unSubscribe;
    }, [auth, user])
    return {
        logOut,
        signInWithGoogle,
        user,
        error,
        setError,
        isLoading
    }
}
export default useFirebase;