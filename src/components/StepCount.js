import React from 'react'
import StepsImg from "../images/StepsImg.svg"
import Image from 'next/image'

function StepCount() {

    const styles = {
        main: "bg-white border-2 border-black w-1/3 h-full rounded-2xl flex flex-col items-start justify-between",
        topDiv: "flex flex-row items-center w-full justify-between bg-black h-2/5 px-8 py-8 rounded-t-xl text-white",
        bottomDiv: "flex flex-row items-center space-x-8 w-full h-3/5 px-8 rounded-b-xl py-3",
    }

    return (
        <div className={styles.main}>
            <div className={styles.topDiv}>
                <h1 className="text-2xl font-semibold flex flex-row items-center"><p>Steps</p><p className="ml-1 text-accent">Count</p></h1>
                <Image src={StepsImg} />
            </div>
            <div className={styles.bottomDiv}>
                <h1 className="flex flex-col items-end w-1/2">
                    <p className="text-accent text-3xl font-semibold">7,500</p>
                    <p className="text-sm font-semibold">Steps</p>
                </h1>
                <div className="radial-progress text-accent bg-black" style={{"--value":75}} role="progressbar">75%</div>
            </div>
        </div>
    )
}

export default StepCount
