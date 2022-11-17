import React from 'react'
import { app } from '../firebaseConfig';
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import {
    getAuth,
    sendPasswordResetEmail
} from 'firebase/auth'


export default function resetpassword() {
    const auth = getAuth();
    const [email, setEmail] = useState('');


    const forgotPassword = () => {
        // console.log(email)
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("password reset email sent")

            }).catch((error) => {
                alert(error)
            })
    }
    return (<>

        <div>Reset password</div>

        <input
            placeholder='Email'
            className={styles.inputBox}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type='email'
        />
        <button
            className={styles.button}
            onClick={forgotPassword}
        >Reset</button>

    </>

    )
}
