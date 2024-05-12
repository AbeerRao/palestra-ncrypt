import Image from 'next/image';
import React from 'react'
import { RiArrowDropRightLine } from "react-icons/ri";

function OtherBlackBox({ allInfo }) {

    const styles = {
        main: "2xl:w-1/3 w-full h-full bg-black p-2 rounded-2xl no-scrollbar overflow-y-auto",
        mainDiv: "flex flex-col items-center justify-between text-white border-2 space-y-5 border-white rounded-2xl p-4 no-scrollbar overflow-y-auto",
        topInfo: "w-full flex flex-row items-center justify-between space-x-5",
        middleDiv: "flex flex-col items-center w-full h-1/2 bg-white rounded-2xl space-y-3 px-4 py-6 text-black",
        middleTop: "flex flex-row items-center w-full justify-between",
        middleBottom: "flex flex-col items-center w-full h-full justify-center"
    }

    return (
        <div className={styles.main}>
            <div className={styles.mainDiv}>
                <div className={styles.topInfo}>
                    <h1 className="font-semibold text-3xl w-1/2">{allInfo.topTitle}</h1>
                </div>
                {
                    allInfo.midInfo.map((mInfo, mIndex) => (
                        <div className={styles.middleDiv} key={mIndex}>
                            <div className={styles.middleTop}>
                                <h1 className="font-semibold text-2xl">{mInfo.name}</h1>
                                <Image src={mInfo.icon} />
                            </div>
                            <div className={styles.middleBottom}>
                                {
                                    mInfo.midPoints.map((info, index) => (
                                        <div key={index} className={styles.middleTop}>
                                            <RiArrowDropRightLine className="w-1/5 h-12 text-accent" />
                                            <p className="w-4/5">{info}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OtherBlackBox
