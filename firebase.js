
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyBeRzncxFGZ8zsZoSp8ppA9xC9eAEQ9B68",
  authDomain: "eduforum-ae8b1.firebaseapp.com",
  projectId: "eduforum-ae8b1",
  storageBucket: "eduforum-ae8b1.appspot.com",
  messagingSenderId: "463824032952",
  appId: "1:463824032952:web:da55f61de8c5d69d14904d",
  measurementId: "G-FP88JK6KV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);

// created for connecting to firebase
