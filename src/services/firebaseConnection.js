import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
apiKey: "AIzaSyAf19hTcPa9Ls3rnETr2RikU6hy0qoMpnE",
authDomain: "chamados-3abe3.firebaseapp.com",
projectId: "chamados-3abe3",
storageBucket: "chamados-3abe3.appspot.com",
messagingSenderId: "587100041976",
appId: "1:587100041976:web:d0883bd44aee0ad007010d",
measurementId: "G-GN9RR3KD0G"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase;
