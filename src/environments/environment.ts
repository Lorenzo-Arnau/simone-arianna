// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const alreadyCreatedAps = getApps();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCHL5EZ5fYlGPl53cXiRonPpoor78xXoQ",
  authDomain: "simone-arianna-sposi.firebaseapp.com",
  projectId: "simone-arianna-sposi",
  storageBucket: "simone-arianna-sposi.appspot.com",
  messagingSenderId: "741569593520",
  appId: "1:741569593520:web:e5a3172daef2f343a03b75",
  // databaseURL: "https://dolcin-proj-default-rtdb.europe-west1.firebasedatabase.app"
};
export const firebaseConfigExport = {
  production:false,
  firebase:{
    apiKey: "AIzaSyCCHL5EZ5fYlGPl53cXiRonPpoor78xXoQ",
    authDomain: "simone-arianna-sposi.firebaseapp.com",
    projectId: "simone-arianna-sposi",
    storageBucket: "simone-arianna-sposi.appspot.com",
    messagingSenderId: "741569593520",
    appId: "1:741569593520:web:e5a3172daef2f343a03b75",
    // databaseURL: "https://dolcin-proj-default-rtdb.europe-west1.firebasedatabase.app"
  }
};

// Initialize Firebase
//const app = alreadyCreatedAps.length === 0 ? initializeApp(firebaseConfig) : console.log(alreadyCreatedAps);

