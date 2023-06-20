import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { auth,signInAuthWithEmailAndPass } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import '../sign-up-form/sign-up-form.styles.scss'
import Button, { BUTTON_TYPE_CLASSES} from '../button/button.component';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const dispatch = useDispatch();
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;
    console.log(formFields)
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
      }
      const signInWithGoogle = async () => {
        // await signInWithGooglePopup();
        dispatch(googleSignInStart());
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try { 
          dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break
                    case 'auth/user-not-found':
                        alert('no user associated with this email');
                        break;
                        default: 
                        console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value } = event.target;

        setFormFields({...formFields, [name] : value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Already Have An Account?</h2>
            <span>Sign In With Your Email And Password</span>
            <form onSubmit={handleSubmit}>
            <FormInput 
                label = 'Email'
                type="email" 
                name='email' 
                value={email} 
                onChange={handleChange} 
                required
                />
                <FormInput 
                label = 'Password'
                type="password" 
                name='password' 
                value={password} 
                onChange={handleChange} 
                required
                />
                <div className='buttons-container'> <Button type="submit">Click To Sign In</Button>   
              <Button type='button' onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>Sign In With Google</Button></div>
             

            </form>
        </div>
    )
}

export default SignInForm