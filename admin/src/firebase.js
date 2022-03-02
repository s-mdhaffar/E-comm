// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey            : 'AIzaSyADR3VBPJY8cEXL3cQ8sJhjBqvO2j4wrUQ',
	authDomain        : 'shop-nawara.firebaseapp.com',
	projectId         : 'shop-nawara',
	storageBucket     : 'shop-nawara.appspot.com',
	messagingSenderId : '717406397263',
	appId             : '1:717406397263:web:ebd0e7062c477d6727db3a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
