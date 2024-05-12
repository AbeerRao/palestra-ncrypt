import React from 'react'

function Landing() {

    const styles = {
        main: "flex flex-col items-center justify-center w-full",
        topDiv: "flex flex-row items-center justify-between w-full text-white 2xl:pl-16 pl-10 2xl:h-64 h-36",
        bottomDiv: "flex flex-row items-start w-full text-white 2xl:space-x-14 space-x-8 h-44 2xl:h-48",
        title: "2xl:text-9xl text-7xl font-semibold flex flex-row items-center tracking-tighter",
        desc: "font-extralight text-center text-wrap pr-56 text-sm 2xl:text-base",
        bottomLeft: "text-[#151515] 2xl:pl-14 pl-10 w-1/5",
        bottomTitle: "2xl:text-4xl text-2xl font-semibold tracking-tighter",
        bottomDesc: "font-extralight mt-2 text-sm 2xl:text-base"
    }

    return (
        <div className={styles.main}>
            <div className={styles.topDiv}>
                <h1 className={styles.title}>A HEALTHY <p className="text-accent pl-2">MIND</p></h1>
                <p className={styles.desc}>With us you don&apos;t have to worry about your fitness journey as<br />you will be guided by the best of the best in all aspects.</p>
            </div>
            <div className={styles.bottomDiv}>
                <div className={styles.bottomLeft}>
                    <h1 className={styles.bottomTitle}>WE KEEP TRACK<br/>OF YOUR<br/>WORKOUT</h1>
                    <p className={styles.bottomDesc}>Our dashboard keeps track all your workouts and gives them to you in clean and understandable way.</p>
                </div>
                <h1 className={styles.title}>NEEDS A HEALTHY <p className="text-accent pl-2">BODY</p></h1>
            </div>
        </div>
    )
}

export default Landing
