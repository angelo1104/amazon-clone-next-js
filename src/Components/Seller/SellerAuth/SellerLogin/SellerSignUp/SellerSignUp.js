import React, {useEffect, useState} from "react";
import styles from './SellerSignUp.module.css';
import Link from "next/link";
import AuthFooter from "../../../../Auth/AuthFooter/AuthFooter";
import Lottie from "lottie-react-web";
import spinner from '../../../../../lottie/spinner.json'
import authInstance from "../../../../../axios/authInstance";
import {setDataUser} from "../../../../../ContextApi/actions";
import {useStateValue} from "../../../../../ContextApi/StateProvider";
import {auth} from "../../../../../firebase";
import {useRouter} from "next/router";

function SellerSignUp() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [processing, setProcessing] = useState(false)
    const [error, setError] = useState('')

    const [{user}, dispatch] = useStateValue();

    const signup = (event) => {
        event.preventDefault();
        setError('')
        setProcessing(true)

        if (email === '' || name === '' || password === '' || repassword === '') {
            setError('Please fill out all the fields')
            setProcessing(false)
        } else if (password !== repassword) {
            setError('Passwords entered are not same.')
            setProcessing(false)
        } else {
            setProcessing(true)
            auth().createUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    authUser.user.updateProfile({
                        displayName: name,
                    })
                        .then(() => {
                            authInstance.post('/new/user',{
                                name: name,
                                email: email,
                                seller: false,
                                uid: authUser.user.uid
                            })
                                .then((doc)=> {
                                    dispatch(setDataUser(doc.data))
                                    router.push('/seller/products/becomeSeller/login-seller')
                                })
                        })
                })
                .catch(error => {
                    setProcessing(false)
                    setError(error.message)
                })
        }

    }


    const moveToNext = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault()
            const inputs =
                Array.prototype.slice.call(document.querySelectorAll("input"))
            const index =
                (inputs.indexOf(document.activeElement) + 1) % inputs.length
            const input = inputs[index]
            input.focus()
            input.select()
        }
    }

    return (
        <div className={styles.sign_up}>
            <Link href={'/seller/products'}>
                <img className={styles.amazon_logo}
                     src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png" alt=""/>
            </Link>

            <form onSubmit={signup} className={styles.signup_form}>
                <h1 className={styles.signup_form_heading}>
                    Create account
                </h1>

                <div className={styles.signup_input_div}>
                    <label className={styles.signup_label} htmlFor={'#signup_name'}>Your name</label>
                    <input value={name} onChange={e => setName(e.target.value)} onKeyDown={moveToNext}
                           className={styles.signup_input} type="text" name="" id={'signup_name'}/>
                </div>

                <div className={styles.signup_input_div}>
                    <label className={styles.signup_label} htmlFor={'#signup_email'}>Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} onKeyDown={moveToNext}
                           className={styles.signup_input} type="email" name="" id={'signup_email'}/>
                </div>

                <div className={styles.signup_input_div}>
                    <label className={styles.signup_label} htmlFor={'#signup_password'}>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} onKeyDown={moveToNext}
                           className={styles.signup_input} type="password" name="" id={'signup_password'}/>
                </div>

                <div className={styles.signup_input_div}>
                    <label className={styles.signup_label} htmlFor={'#signup_reenter_pasword'}>Re-enter password</label>
                    <input value={repassword} onChange={e => setRepassword(e.target.value)}
                           className={styles.signup_input} type="password" name="" id={'signup_reenter_password'}/>
                </div>

                <p className={styles.error}>{error}</p>

                <button disabled={processing} className={styles.signup_submit_button} type="submit">
                    {
                        !processing ? 'Create your Amazon Account' : <div className={styles.spinner}>
                            <Lottie options={{
                                animationData: spinner,
                            }}/>
                        </div>
                    }

                </button>

                <p className={styles.signup_terms}>By creating an account you agree to the terms & conditions of our
                    amazon clone.</p>

                <div className={styles.signup_form_already}>

                    <div className={styles.signup_gradient}>

                    </div>

                    <h5 className={styles.signup_already_p}>
                        Already have an account?
                        <Link href={'/seller/products/auth/login'}>
                            <a className={styles.amazon_link_tm}>
                                Sign in ->
                            </a>
                        </Link>
                    </h5>
                </div>

            </form>

            <AuthFooter/>
        </div>
    )
}

export default SellerSignUp;