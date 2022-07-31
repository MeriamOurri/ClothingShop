import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAVU5grTmNdrCPcv6zK_YmjN0sOEFW43FI",
    authDomain: "clothing-shop-e1957.firebaseapp.com",
    projectId: "clothing-shop-e1957",
    storageBucket: "clothing-shop-e1957.appspot.com",
    messagingSenderId: "884764981943",
    appId: "1:884764981943:web:5df49c90b9b4305b78eb32"
};
firebase.initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;