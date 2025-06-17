import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, signOut} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [looding, setLooding] = useState(true)
    const provider = new GoogleAuthProvider()
    const [currentUser, setCurrentUser]= useState()

    const emailandpassLogin =(email, password)=>{
        setLooding(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const emailandpassregtration = (email, password)=>{
        setLooding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
     

    const loginByEmail = ()=>{
        setLooding(true)
        return signInWithPopup(auth,provider)
    }


    const logOut = ()=>{
        setLooding(true)
        return signOut(auth)
    }



const handelUpdateProfile = (updateProfileData) => {
    setLooding(true);
    return updateProfile(auth.currentUser, updateProfileData)
        .then(() => {
            setCurrentUser(auth.currentUser);
            console.log(currentUser);
        })
        .finally(() => {
            setLooding(false);
        });
};




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