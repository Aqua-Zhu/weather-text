// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 匯入firebase
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9w76vk06ivB7MgMx4QrXdmSizGjAZdzM",
    authDomain: "uiiaiu-text.firebaseapp.com",
    projectId: "uiiaiu-text",
    storageBucket: "uiiaiu-text.firebasestorage.app",
    messagingSenderId: "869679021055",
    appId: "1:869679021055:web:95c70856d51555c3f685ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 匯出
export const auth=getAuth(app);
export const provide = new GoogleAuthProvider();