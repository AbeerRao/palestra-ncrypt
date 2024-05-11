import Image from 'next/image'
import React from 'react'
import Logo from "../images/Logo.svg"

function Header() {

    const styles = {
        main: "text-white flex flex-row justify-between w-full",
        rightDiv: "flex flex-row items-center px-10 py-14",
        logo: "w-16 h-16 object-fit bg-white rounded-full p-1",
        leftDiv: "px-12 py-12",
        headerSelect: "flex flex-row items-center space-x-6 bg-white rounded-full py-2 px-6 h-16",
        select: "text-black hover:text-accent bg-transparent hover:bg-black rounded-full cursor-pointer px-5 py-2 transition duration-400 ease-in-out",
        leftButton: "h-16 bg-black text-accent w-40 rounded-full flex flex-col items-center justify-center font-semibold cursor-pointer hover:bg-accent hover:text-black transition duration-400 ease-in-out"
    }

    return (
        <div className={styles.main}>
            <div className={styles.rightDiv}>
                <Image src={Logo} className={styles.logo} />
                <div className={styles.headerSelect}>
                    <h1 className={styles.select}>Home</h1>
                    <h1 className={styles.select}>Dashboard</h1>
                    <h1 className={styles.select}>Trainer</h1>
                    <h1 className={styles.select}>Forums</h1>
                </div>
            </div>
            <div className={styles.leftDiv}>
                <h1 className={styles.leftButton}>Login</h1>
            </div>
        </div>
    )
}

export default Header
