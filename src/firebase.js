import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDoUtGkc0LDFLYZok0FF5UYQE0rkJNW2HQ",
    authDomain: "music-albuns.firebaseapp.com",
    databaseURL: "https://music-albuns.firebaseio.com",
    projectId: "music-albuns",
    storageBucket: "",
    messagingSenderId: "75692378244"
});

export const db = app.database();
export const albunsRef = db.ref('albuns');