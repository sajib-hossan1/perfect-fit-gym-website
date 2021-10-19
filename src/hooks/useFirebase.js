import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init"
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setisLoading] = useState(true);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    


    
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setisLoading(true)
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setisLoading(false))
    }

    const logOut = () => {
        setisLoading(true)
        signOut(auth)
        .then( () => {
            setUser({})
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setisLoading(false))
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth,email,password)
        .then(userLogin => {
            const user = userLogin.user;
            setUser(user)
            setError('')
        })
        .catch(error2 => {
            const error = error2.message;
            setError(error);
        })
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName : name
        })
        .then(result => {})
        .catch(error => {
            setError(error.message)
        })
    };


    const createNewUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            setUserName(name);
            setError('');
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }

    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }else (
                setUser({})
            )
            setisLoading(false)
        })
        return () => unsubscribed;
    }, [])

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        logOut,
        processLogin,
        createNewUser,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange
    }
}

export default useFirebase;