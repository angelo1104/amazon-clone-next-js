import React, {useState} from "react";
import styles from './Login.module.css';
import Link from "next/link";
import AuthFooter from "../AuthFooter/AuthFooter";
import {auth} from "../../../firebase";
import {useRouter} from 'next/router';
import Lottie from "lottie-react-web";
import spinner from '../../../lottie/spinner.json'

function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [processing,setProcessing] = useState(false);
    const [error,setError] = useState('')

    const submitLogin = (event)=>{
        event.preventDefault();
        setError('')

        if (email==='' || password===''){
            setError('Please fill out all the fields')
            setProcessing(false)
        }else {
            setProcessing(true)
            auth().signInWithEmailAndPassword(email, password)
                .then(authUser=>{
                    setProcessing(false)
                })
                .catch(error=>{
                    setError(error.message)
                })
        }

    }

    const goToSignUp = (event)=>{
        event.preventDefault();

        router.push('/auth/email/sign-up');
    }

    const moveToNext = (event)=>{
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

    return(
        <div className={styles.login}>
            <Link href={'/'}>
                <img className={styles.amazon_logo} src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png" alt="" />
            </Link>

            <form onSubmit={submitLogin} className={styles.login_form}>

                <h1 className={styles.login_form_heading}>
                    Sign-In
                </h1>

                <div className={styles.login_input_div}>
                    <label className={styles.login_label} htmlFor={'#signup_email'} >Email</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)} onKeyDown={moveToNext} className={styles.login_input} type="email" name="" id={'signup_email'} />
                </div>

                <div className={styles.login_input_div}>
                    <label className={styles.login_label} htmlFor={'#signup_password'} >Password</label>
                    <input value={password} onChange={e=>setPassword(e.target.value)} className={styles.login_input} type="password" name="" id={'signup_password'} />
                </div>

                <p className={styles.error}>{error}</p>

                <button disabled={processing} className={styles.login_submit_button} type="submit">
                    {
                        !processing ? 'Continue' : <div className={styles.spinner}>
                            <Lottie options={{
                                animationData: spinner,
                            }}/>
                        </div>
                    }
                </button>

                <p className={styles.login_terms}>By continuing over amazon clone you agree to the terms & conditions of our amazon clone.</p>


                <div className={styles.need_help}>
                    <Link href={'/auth/email/password-reset'}>
                        <a className={styles.amazon_link}>
                            Forgot Password?
                        </a>
                    </Link>
                </div>
            </form>

            <div className={styles.divider}>
                <h5 className={styles.divider_title}>New to Amazon?</h5>
            </div>

            <button disabled={processing} onClick={goToSignUp} type={'submit'} className={styles.signup_button}>
                Create your Amazon account
            </button>

            <AuthFooter/>
        </div>
    )
}

export default Login