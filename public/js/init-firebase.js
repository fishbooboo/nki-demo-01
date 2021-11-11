// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyBJ0XPanBrgj59Fvp8xIG_1gQ7F2i0rQe4",
  authDomain: "nki-demo-01.firebaseapp.com",
  projectId: "nki-demo-01",
  storageBucket: "nki-demo-01.appspot.com",
  messagingSenderId: "287584524686",
  appId: "1:287584524686:web:43774512f9f8ad15ec2cdf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name);

let firestore = firebase.firestore();