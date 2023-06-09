import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import { signUpStart } from '../../store/user/user.action';
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'
import Button from '../button/button.component'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
      const [ formFields, setFormFields ] = useState(defaultFormFields)
      const { displayName, email, password, confirmPassword } = formFields;
      const dispatch = useDispatch();
      
      console.log(formFields)

      const resetFormFields = () => {
        setFormFields(defaultFormFields)
      }

      const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Password does not much');
            return;
        }
        try {
        //     const {user} = await createAuthUserWithEmailAndPassword(email, password);

        //    await createUserDocumentFromAuth(user, {displayName})
        dispatch(signUpStart(email, password, displayName));
            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log('user creation encountered an error', error)
            }

        }
      }
      const handleChange = (event) => {
       const { name, value } = event.target;
       console.log(event.target)
        
       setFormFields({...formFields, [name] : value})

      }
    

    return (
        <div className='sign-up-container'>
            <h2>Do Not Have An Account?</h2>
            <span>Sign Up Form </span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label = 'Display Name'
                type="text" 
                name='displayName' 
                value={displayName} 
                onChange={handleChange} 
                required
                />
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
                <FormInput 
                label = 'Confirm Password'
                type="password" 
                name='confirmPassword' 
                value={confirmPassword} 
                onChange={handleChange} 
                required
                />
                <Button type="submit">Click To Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm