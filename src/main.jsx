import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwJn_591nJUYdiSdWX8T3ZhW-84SkAguQ",
  authDomain: "casanova-manuel-react.firebaseapp.com",
  projectId: "casanova-manuel-react",
  storageBucket: "casanova-manuel-react.appspot.com",
  messagingSenderId: "304434384749",
  appId: "1:304434384749:web:299053f1d4f840825d1464"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
