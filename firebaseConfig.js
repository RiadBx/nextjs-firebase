import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {

    apiKey: "AIzaSyBzeGlJ-Z7FgOSdtQpfI47kJ6l6cXBOEPc",
    authDomain: "nextjs-firebaseauth-c0b7e.firebaseapp.com",
    projectId: "nextjs-firebaseauth-c0b7e",
    storageBucket: "nextjs-firebaseauth-c0b7e.appspot.com",
    messagingSenderId: "90733270568",
    appId: "1:90733270568:web:80a6ea9a2d15e99813071d"


};

export const app = initializeApp(firebaseConfig);
// export const database = getFirestore(app);