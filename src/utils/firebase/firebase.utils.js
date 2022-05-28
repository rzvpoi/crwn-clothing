import {initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnu6MaqR03ouj3RiY9pxN9N3MFSIl16XA",
    authDomain: "crwn-clothing-db-ba719.firebaseapp.com",
    projectId: "crwn-clothing-db-ba719",
    storageBucket: "crwn-clothing-db-ba719.appspot.com",
    messagingSenderId: "663630713822",
    appId: "1:663630713822:web:fd04c145440b6ef726434f"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters(
    {
        prompt: "select_account"
    }
);

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid );

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists())
    {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(err) {
            console.log("error creating the user", err.message);
        }
    }

    return userDocRef;

}