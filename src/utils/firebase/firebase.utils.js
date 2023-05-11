import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, googleAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgHfIlrLQURJ30CEXaRH58QuwCdDULJwI",
    authDomain: "learningreactbabe.firebaseapp.com",
    projectId: "learningreactbabe",
    storageBucket: "learningreactbabe.appspot.com",
    messagingSenderId: "408985759573",
    appId: "1:408985759573:web:2ac3daae4c339583fc89dc"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters( { prompt:'select_account'} );
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {} ) => {
    if(!userAuth) return
    const userDocRef = doc(db, 'user', userAuth.uid)
console.log(userDocRef);

const userSnapshot = await getDoc(userDocRef);
console.log(userSnapshot)
console.log(userSnapshot.exists())
if (!userSnapshot.exists()) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  try {
    await setDoc(userDocRef, {
      displayName, email, createdAt, ...additionalInformation
    })
  } catch (error) {
    console.log('error creating the user', error.message)
  }

}

 return userDocRef;
  }

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPass = async (email, password) => {
  if(!email || !password) return;
return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);