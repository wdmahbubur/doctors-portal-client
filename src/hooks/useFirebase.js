import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseAuthentication from '../firebase/firebase';
import axios from 'axios';

firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState();

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        setLoading(true)
        const subscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setError();
                await findUser(user);
                user.getIdToken().then(idToken => {
                    setToken(idToken)
                })
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return subscribe;
    }, [auth])

    const register = (name, email, password) => {
        setLoading(true);
        setError();
        if (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@#$%&? "])[a-zA-Z0-9!@#$%&?]{8,20}$/.test(password)) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(async () => {
                        const user = userCredential.user;
                        setError();
                        await saveUser(user.uid, user.displayName, user.email);
                        await findUser(user);
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
        setError();
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                setError();
                await findUser(user);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const googleSignIn = () => {
        setLoading(true);
        setError();
        signInWithPopup(auth, googleProvider)
            .then(async (result) => {
                const user = result.user;
                setError();
                await saveUser(user.uid, user.displayName, user.email);
                await findUser(user);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    async function saveUser(uid, name, email) {
        const user = { uid, name, email }
        await axios.put('https://fathomless-lake-90403.herokuapp.com/users', {
            data: user
        }).then(response => setError())
            .catch(error => {
                setError(error)
            })
    }

    async function findUser(user) {
        await axios.get(`https://fathomless-lake-90403.herokuapp.com/users/${user.uid}`)
            .then(res => {
                user.role = res.data.role || "user";
                setUser(user)
            })
    }

    const logout = () => {
        setError();
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
        googleSignIn,
        token
    }
}
export default useFirebase;