// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;



// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDaSmU9hHJogOlBZhLfQ9AWDZeQHLcUFEI",
//   authDomain: "baby-doll-toys.firebaseapp.com",
//   projectId: "baby-doll-toys",
//   storageBucket: "baby-doll-toys.appspot.com",
//   messagingSenderId: "169126988965",
//   appId: "1:169126988965:web:b5cb9b32c0b394110b514c"
// };