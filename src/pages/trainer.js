import React from 'react'
import Header from '@/components/Header'

function Trainer() {

    const styles = {
        main: "flex flex-col items-center justify-center min-w-screen",
        topDiv: "bg-accent w-full h-full rounded-b-[4rem] h-[40vh] flex flex-col items-center justify-between pb-10",
        topInfo: "w-full flex flex-row items-center justify-between px-10",
        topTitle: "flex flex-row items-center justify-center text-white text-7xl font-semibold tracking-tighter",
    }

    const curr = new Date().toString().slice(4, 10)

    return (
        <div className={styles.main}>
            <title>Trainer & Deit Plans</title>
            <div className={styles.topDiv}>
                <Header loginDisplay={false} />
                <div className={styles.topInfo}>
                    <h1 className={styles.topTitle}><p className="pr-1 text-black">TRAINER & DIET PLANS</p>.</h1>
                    <h1 className={styles.topTitle}><p className="pr-1 text-black">{curr.slice(0, 4)}</p>.<p className="pr-1 text-black">{curr.slice(4)}</p></h1>
                </div>
            </div>
        </div>
    )
}

export default Trainer
