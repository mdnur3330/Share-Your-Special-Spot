import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, signOut} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [looding, setLooding] = useState(true)
    const provider = new GoogleAuthProvider()
    const [currentUser, setCurrentUser]= useState()

    const emailandpassLogin =(email, password)=>{
        setLooding(false)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const emailandpassregtration = (email, password)=>{
        setLooding(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }
     

    const loginByEmail = ()=>{
        setLooding(false)
        return signInWithPopup(auth,provider)
    }


    const logOut = ()=>{
        setLooding(false)
        return signOut(auth)
    }


    const handelUpdateProfile = (updateProfileData)=>{
        setLooding(false)
        return updateProfile(auth.currentUser, updateProfileData)
    }

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth,(currentUser)=>{
             setCurrentUser(currentUser)
             setLooding(false)
        })
        return ()=>{
            subscribe()
        }
    },[])


    const user = {
        emailandpassLogin,
        emailandpassregtration,
        handelUpdateProfile,
        loginByEmail,
        logOut,
        currentUser,
        looding
    }
    return (
        <>
        <AuthContext value={user}>
            {children}
        </AuthContext>
        </>
    );
};

export default AuthProvider;