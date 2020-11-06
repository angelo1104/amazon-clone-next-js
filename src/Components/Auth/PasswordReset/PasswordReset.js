import React, {useState} from "react";
import styles from './PasswordReset.module.css';
import Link from "next/link";
import AuthFooter from "../AuthFooter/AuthFooter";
import {auth} from "../../../firebase";
import Lottie from "lottie-react-web";
import spinner from "../../../lottie/spinner.json";

function PasswordReset() {
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [processing,setProcessing] = useState(false);

    const submitPasswordReset = (event)=>{
        event.preventDefault();
        setMessage('')

        setProcessing(true)
        auth().sendPasswordResetEmail(email)
            .then(()=>{
                setProcessing(false)
                setMessage('The password reset email has been ent. Check your email to continue.')
            })
            .catch((error)=>{
                setProcessing(false)
                console.log(email)
                console.log(error)
                setMessage(error.message)
            })
    }

    return(
        <div className={styles.password_reset}>
            <Link href={'/'}>
                <img className={styles.amazon_logo} src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png" alt="" />
            </Link>

            <form onSubmit={submitPasswordReset} className={styles.password_reset_form}>
                <h1 className={styles.password_reset_form_heading}>
                    Password assistance
                </h1>

                <p className={styles.password_reset_instructions}>Enter the email address associated with your Amazon account.</p>

                <div className={styles.password_reset_input_div}>
                    <label className={styles.password_reset_label} htmlFor={'#signup_email'} >Email</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)} className={styles.password_reset_input} type="email" name="" id={'signup_email'} />
                </div>

                <p className={styles.message}>{message}</p>

                <button disabled={processing} className={styles.password_reset_submit_button} type="submit">
                    {
                        !processing ? 'Continue' : <div className={styles.spinner}>
                            <Lottie options={{
                                animationData: spinner,
                            }}/>
                        </div>
                    }
                </button>
            </form>

            <AuthFooter/>
        </div>
    )
}

export default PasswordReset;