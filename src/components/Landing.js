import React from 'react'

function Landing() {

    const styles = {
        main: "flex flex-col items-center justify-center w-full",
        topDiv: "flex flex-row items-center justify-between w-full text-white pl-16 h-48",
        bottomDiv: "flex flex-row items-start w-full text-white space-x-14",
        title: "text-9xl font-semibold flex flex-row items-center tracking-tighter",
        desc: "font-extralight text-center text-wrap pr-56",
        bottomLeft: "text-black pl-14 w-max",
        bottomTitle: "text-4xl font-semibold tracking-tighter",
        bottomDesc: "font-extralight mt-2"
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
                    <p className={styles.bottomDesc}>Our dashboard keeps track all your<br/>workouts and gives them to you in clean and<br/>understandable way.</p>
                </div>
                <h1 className={styles.title}>NEEDS A HEALTHY <p className="text-accent pl-2">BODY</p></h1>
            </div>
        </div>
    )
}

export default Landing
