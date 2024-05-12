import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../images/Logo.svg"
import LogoType from "../images/LogoType.svg"
import LoginImg from "../images/LoginImg.svg"
import { useRouter } from 'next/router'

function Login() {

    const router = useRouter()

    const styles = {
        main: "flex flex-row items-center w-screen h-screen justify-center 2xl:p-32 p-24 space-x-10",
        leftDiv: "flex flex-col h-full w-1/2 justify-between items-start",
        topDiv: "flex flex-row items-center justify-between 2xl:w-1/2 w-2/3",
        textDiv: "flex flex-col items-start space-y-2",
        title: "text-6xl font-semibold text-center",
        desc: "font-light",
        form: "flex flex-col items-start space-y-8",
        input: "bg-transparent border-b-2 border-[#151515] w-full p-2 text-[#151515] placeholder-[#151515] text-xl focus:outline-none focus:border-accent transition duration-300",
        button: "w-full bg-transparent text-xl font-semibold py-2 rounded-full border-2 border-[#151515] transition duration-300 disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed disabled:font-normal hover:bg-[#151515] hover:text-accent hover:scale-95",
        bottomText: "text-sm font-light 2xl:text-center w-1/2",
        rightDiv: "w-1/2 h-max",
        image: "w-full h-full object-cover"
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        router.push("/dashboard")
    }

    return (
        <main>
            <title>Login to Palestra</title>
            <div className={styles.main}>
                <div className={styles.leftDiv}>
                    <div className={styles.topDiv}>
                        <Image src={Logo} />
                        <Image src={LogoType} />
                    </div>
                    <form className={styles.form}>
                        <div className={styles.textDiv}>
                            <h1 className={styles.title}>Welcome Back!</h1>
                            <h2 className={styles.desc}>Don&apos;t have an account? Register</h2>
                        </div>
                        <input type="text" placeholder="Email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className={styles.button} disabled={!email || !password} onClick={(e) => handleLogin(e)}>Login</button>
                    </form>
                    <p className={styles.bottomText}>By signing up, you agree to our terms of service and privacy policy</p>
                </div>
                <div className={styles.rightDiv}>
                    <Image src={LoginImg} className={styles.image} />
                </div>
            </div>
        </main>
    )
}

export default Login
