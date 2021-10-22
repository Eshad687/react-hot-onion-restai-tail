import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                console.log("on user change", user)
                setUser(user);




            } else {
                setUser({})
            }
        });
    }, [])
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

            }).catch((error) => {
                setErrorMessage(error.message)
            });
    }

    const createUser = (email, password, name) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {


                updateName(name)

                console.log('on user create', result.user);

            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }

    const signInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log('on login', result.user);
            })
            .catch((error) => {
                setErrorMessage(error.message)
            });
    }
    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            setErrorMessage(error.message)
        });

    }
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }

    return {
        user,
        errorMessage,

        createUser,
        signInWithEmailPassword,
        signInWithGoogle,
        logOut
    }

}

export default useFirebase;