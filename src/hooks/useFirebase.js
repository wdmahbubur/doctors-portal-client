import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseAuthentication from '../firebase/firebase';

firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false)

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        setLoading(true)
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError();
            } else {
                setUser({})
                setError();
            }
            setLoading(false)
        });
        return subscribe;
    }, [auth])

    const register = (name, email, password) => {
        setLoading(true);
        if (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@#$%&? "])[a-zA-Z0-9!@#$%&?]{8,20}$/.test(password)) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(() => {
                        setUser(userCredential.user);
                        setError();
                    }).catch((error) => {
                        setError(error.message);
                    })
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => setLoading(false));
        }
        else {
            setLoading(false)
            setError("Your password must be at least 8-20 characters,one lower case letter, one upper case letter, one digit,one special character")

        }

    }

    const login = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setError();
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const googleSignIn = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError();
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser();
            setError();
        }).catch((error) => {
            setError(error.message);
        });
    }

    return {
        user,
        error,
        loading,
        register,
        login,
        logout,
        googleSignIn
    }
}
export default useFirebase;