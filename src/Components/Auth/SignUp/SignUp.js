import React from "react";
import styles from './SignUp.module.css';
import Link from "next/link";
import AuthFooter from "../AuthFooter/AuthFooter";

function SignUp() {

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
        <div className={styles.sign_up}>
            <Link href={'/'}>
                <img className={styles.amazon_logo} src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png" alt="" />
            </Link>

            <form className={styles.signup_form}>
                <h1 className={styles.signup_form_heading}>
                    Create account
                </h1>

                <div className={styles.signup_input_div}>
                    <label className={styles.signup_label} htmlFor={'#signup_name'} >Your name</label>
                    <input onKeyDown={moveToNext} className={styles.signup_input} type="text" name="" id={'signup_name'} />
                </div>

                <div className={styles.signup_input_div}>
                    <label className={styles.signup_label} htmlFor={'#signup_email'} >Email</label>
                    <input onKeyDown={moveToNext} className={styles.signup_input} type="text" name="" id={'signup_email'} />
                </div>

                <div className={styles.signup_input_div}>
                    <label className={styles.signup_label} htmlFor={'#signup_password'} >Password</label>
                    <input onKeyDown={moveToNext} className={styles.signup_input} type="text" name="" id={'signup_password'} />
                </div>

                <div className={styles.signup_input_div}>
                    <label className={styles.signup_label} htmlFor={'#signup_reenter_pasword'} >Re-enter password</label>
                    <input onKeyDown={moveToNext} className={styles.signup_input} type="text" name="" id={'signup_reenter_password'} />
                </div>

                <button className={styles.signup_submit_button} type="submit">Create your Amazon Account</button>

                <p className={styles.signup_terms}>By creating an account you agree to the terms & conditions of our amazon clone.</p>

                <div className={styles.signup_form_already}>

                    <div className={styles.signup_gradient}>

                    </div>

                    <h5 className={styles.signup_already_p}>
                        Already have an account?
                        <Link href={'/auth/email/login'}>
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

export default SignUp;