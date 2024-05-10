import React, { useState } from 'react'

function Login() {

    const styles = {
        main: "flex flex-row items-center w-screen h-screen justify-center p-32 space-x-10",
        leftDiv: "flex flex-col h-full w-1/2 justify-between items-start py-16",
        textDiv: "flex flex-col items-start space-y-2",
        title: "text-6xl font-semibold text-center",
        desc: "font-light",
        form: "flex flex-col items-start w-1/2 space-y-8",
        input: "bg-transparent border-b-2 border-black w-full p-2 text-black placeholder-black text-xl focus:outline-none focus:border-accent transition duration-300",
        button: "w-full bg-transparent text-xl font-semibold py-2 rounded-full border-2 border-black transition duration-300 disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed disabled:font-normal hover:bg-black hover:text-accent hover:scale-95",
        bottomText: "text-sm font-light text-center w-1/2"
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        alert(`Email: ${email} Password: ${password}`)
    }

    return (
        <main>
            <head>
                <title>Login to Palestra</title>
            </head>
            <div className={styles.main}>
                <div className={styles.leftDiv}>
                    <div className={styles.textDiv}>
                        <h1 className={styles.title}>Welcome Back!</h1>
                        <h2 className={styles.desc}>Don't have an account? Register</h2>
                    </div>
                    <form className={styles.form}>
                        <input type="text" placeholder="Email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className={styles.button} disabled={!email || !password} onClick={(e) => handleLogin(e)}>Login</button>
                    </form>
                    <p className={styles.bottomText}>By signing up, you agree to our terms of service and privacy policy</p>
                </div>
                <div className={styles.leftDiv}>
                    {/* <h1 className={styles.title}>Get Started</h1> */}
                </div>
            </div>
        </main>
    )
}

export default Login
