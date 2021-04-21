// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBT7teSUWCfqgYS46uqM4RRUaBhraNkMbM",
  authDomain: "controle-pallets.firebaseapp.com",
  databaseURL: "https://controle-pallets-default-rtdb.firebaseio.com",
  projectId: "controle-pallets",
  storageBucket: "controle-pallets.appspot.com",
  messagingSenderId: "913797251872",
  appId: "1:913797251872:web:04f7c7cd0978a535500d45",
  measurementId: "G-7F2C8EFD3P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();
firebase.database();
firebase.storage();