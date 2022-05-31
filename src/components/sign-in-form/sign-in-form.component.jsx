import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';



import { getAuth, signInWithEmailAndPassword,} from "firebase/auth";
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

function SignInForm()
{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

   

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async (event) => {
        await signInWithGooglePopup();
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                
                resetFormFields();    
            })
            .catch((error) => {
                switch(error.code)
                {
                    case 'auth/wrong-password':
                        alert('incorrect password for email');
                        break;
                    case 'auth/user-not-found':
                        alert('no user associated with this email');
                        break;
                    default:
                        console.log(error);
                }
            })

        
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]:value})

    }

    return(
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>


                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google sign In</Button>
                </div>
                
            </form>
        </div>
    );
}

export default SignInForm;

//"eyJhbGciOiJSUzI1NiIsImtpZCI6IjZmOGUxY2IxNTY0MTQ2M2M2ZGYwZjMzMzk0YjAzYzkyZmNjODg5YWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY3J3bi1jbG90aGluZy1kYi1iYTcxOSIsImF1ZCI6ImNyd24tY2xvdGhpbmctZGItYmE3MTkiLCJhdXRoX3RpbWUiOjE2NTM5MjE0NDMsInVzZXJfaWQiOiJzS3BicE5WWTBkUTRnd1ZWdDVpVzMwODN5aGQyIiwic3ViIjoic0twYnBOVlkwZFE0Z3dWVnQ1aVczMDgzeWhkMiIsImlhdCI6MTY1MzkyMTQ0MywiZXhwIjoxNjUzOTI1MDQzLCJlbWFpbCI6InR1ZG9ycG9pZW5hcml1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0dWRvcnBvaWVuYXJpdUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CacfkQXhSeEPyk-cGAk5mQvWfGLcXQ062tVC61j5wluXinZw-boGeQopzzUTID8SHzLGdDZ-yr6Er6iiWNRm66DILRraNfpIs5NdqfrQ2RNOcxvEvokuXn5EUvHgJYOENsca5CFgOMpsQTD1Z5U6dfKpyL_bWDqtHB0pidX0YrsnysGO-PXoPtDMvPF-0_zY9K26sWmwDVo22Sy_iImfvSpfmcA-oiDKThImf2uJj1uyoVhcvvpUOy-Wnv_GEehg9xfIX447Et5YVbyFRqDSLiPgqbvWashuEEkpKQrCyknI2Y56pFQoZt0hAs7GUWdXnKBvAdmjH-iAznHpfxlIyg"