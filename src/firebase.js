import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDnMyD1kYc9sGojc6O9zeRqUFIoyJAAKhg",
    authDomain: "otp-app-demo-adcf1.firebaseapp.com",
    projectId: "otp-app-demo-adcf1",
    storageBucket: "otp-app-demo-adcf1.appspot.com",
    messagingSenderId: "995011963052",
    appId: "1:995011963052:web:66c872701d6a0e45845709"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase  