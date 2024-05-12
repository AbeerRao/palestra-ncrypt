import React from 'react'
import WeightImg from "../images/WeightImg.svg"
import HeightImg from "../images/HeightImg.svg"
import Image from 'next/image'

function PersonalStats() {

    const styles = {
        main: "bg-white border-2 border-[#151515] w-1/2 h-full rounded-2xl flex flex-col items-start justify-between",
        topDiv: "flex flex-row items-start w-full justify-between bg-[#151515] h-2/5 px-12 py-8 rounded-t-xl text-white",
        bottomDiv: "flex flex-row items-center space-x-12 w-full h-3/5 px-12 rounded-b-xl py-3",
        statDiv: "w-1/2 h-full bg-accent rounded-2xl flex flex-col items-center justify-between text-2xl font-semibold text-[#151515]",
        statsTop: "flex flex-row items-center justify-between w-full px-5 py-3",
        statsBottom: "flex flex-row items-center justify-end w-full px-5 py-3"
    }

    return (
        <div className={styles.main}>
            <div className={styles.topDiv}>
                <h1 className="text-2xl font-semibold flex flex-row items-center"><p>Personal</p><p className="ml-1 text-accent">Statistics</p></h1>
            </div>
            <div className={styles.bottomDiv}>
                <div className={styles.statDiv}>
                    <div className={styles.statsTop}>
                        <h1>Weight</h1>
                        <Image src={WeightImg} />
                    </div>
                    <div className={styles.statsBottom}>
                        <h1 className="text-white">70</h1>
                        <h1>Kg</h1>
                    </div>
                </div>
                <div className={styles.statDiv}>
                    <div className={styles.statsTop}>
                        <h1>Height</h1>
                        <Image src={HeightImg} />
                    </div>
                    <div className={styles.statsBottom}>
                        <h1 className="text-white">190</h1>
                        <h1>Cm</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalStats
