import Image from 'next/image'
import React from 'react'
import { RiArrowDropRightLine } from "react-icons/ri";

function ActiveBlackBox({ allInfo }) {

    const styles = {
        main: "w-1/3 h-full bg-black p-2 rounded-2xl",
        mainDiv: "flex flex-col items-center justify-between text-white border-2 space-y-5 border-accent rounded-2xl p-4",
        topInfo: "w-full flex flex-row items-center justify-between space-x-5",
        sideTitle: "w-1/2 text-sm font-extralight border-2 border-accent rounded-full p-2 text-center",
        middleDiv: "flex flex-col items-center w-full h-full bg-white rounded-2xl space-y-3 px-4 py-6 text-black",
        middleTop: "flex flex-row items-center w-full justify-between",
        middleBottom: "flex flex-col items-center w-full h-full justify-between space-y-2"
    }

    return (
        <div className={styles.main}>
            <div className={styles.mainDiv}>
                <div className={styles.topInfo}>
                    <h1 className="font-semibold text-3xl w-1/2">{allInfo.topTitle}</h1>
                    <h1 className={styles.sideTitle}>{allInfo.sideTitle}</h1>
                </div>
                <div className={styles.middleDiv}>
                    <div className={styles.middleTop}>
                        <h1 className="font-semibold text-2xl">{allInfo.midTitle}</h1>
                        <Image src={allInfo.icon} />
                    </div>
                    <div className={styles.middleBottom}>
                        {
                            allInfo.midPoints.map((info, index) => (
                                <div key={index} className={styles.middleTop}>
                                    <RiArrowDropRightLine className="w-1/5 h-12 text-accent" />
                                    <p className="w-4/5">{info}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveBlackBox
