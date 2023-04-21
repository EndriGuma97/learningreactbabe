import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"
import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth'

const SignIn = () => {
    useEffect(() => {
        (async () => {
          const response = await getRedirectResult(auth);
          if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
          }
        })();
      }, []);
     

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (<div><h1>Hello I Am the Sing In Page</h1>
    <button onClick={logGoogleUser}>Sign In With Google Babe</button>
    <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect Babe</button>
    </div>)
    
}


export default SignIn