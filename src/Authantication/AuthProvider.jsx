import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, signOut} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const [currentUser, setCurrentUser]= useState()

    const emailandpassLogin =(email, password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    const emailandpassregtration = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
     

    const loginByEmail = ()=>{
        return signInWithPopup(auth,provider)
    }


    const logOut = ()=>{
        return signOut(auth)
    }


    const handelUpdateProfile = (updateProfileData)=>{
        return updateProfile(auth.currentUser, updateProfileData)
    }

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth,(currentUser)=>{
             setCurrentUser(currentUser)
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