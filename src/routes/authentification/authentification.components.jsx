

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentification.style.scss'
const Authentification = () => {
    

    return(
        <div className='authentification-container'>
            <SignInForm></SignInForm>
            <SignUpForm />
        </div>
    )
}

export  default Authentification