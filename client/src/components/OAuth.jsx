import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'

export default function OAuth() {
    const dispatch = useDispatch();

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            const res = await fetch('http://localhost:3000/api/auth/google', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
            console.log("data is here : " , data);
        } catch (error) {
            console.log("could not login with google", error);
        }
    }
    return (
        <button type="button" className='bg-red-700 text-white rounded-lg p-3 hover:opacity-95' onClick={handleGoogleClick}>Continue with google</button>
    )
}
