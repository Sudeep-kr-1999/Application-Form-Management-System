// firebase configuration -----------------------------------

const firebaseConfig = {
  apiKey: "AIzaSyAy6WJKmNiUubxuoG7UYZ4fU2dK1jVFhMc",
  authDomain: "application-management-s-ec388.firebaseapp.com",
  projectId: "application-management-s-ec388",
  storageBucket: "application-management-s-ec388.appspot.com",
  messagingSenderId: "675558243948",
  appId: "1:675558243948:web:6b4bcb341d2ae932b7e249",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// variables:----------------------
let ImgName, ImgUrl;
let files = [];
let reader = new FileReader();


// 