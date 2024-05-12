import React from 'react'
import CalorieImg from "../images/CalorieImg.svg"
import Image from 'next/image'

function CalorieCount() {

    const styles = {
        main: "flex flex-col items-center justify-between w-2/3 h-full px-8 py-8 text-white rounded-2xl bg-accent",
        topDiv: "flex flex-row items-start w-full justify-between h-1/5",
        bottomDiv: "flex flex-col items-center w-full h-3/5 space-y-2",
        countDiv: "flex flex-row items-center justify-between w-full h-1/3 space-x-5",
        countLeft: "h-full flex flex-row items-center space-x-2 divide-x-2 divide-[#151515] w-1/4",
        countRight: "w-3/4 h-full flex flex-col items-end"
    }

    const information = [
        {
            day: "Sun",
            calorie: 3500,
            type: "Cheat Day",
            progress: 100,
            active: false
        },
        {
            day: "Mon",
            calorie: 2500,
            type: "No Carbs",
            progress: 83.33,
            active: true
        },
        {
            day: "Tue",
            calorie: 3000,
            type: "Healthy Day",
            progress: 85.71,
            active: false
        }
    ]

    return (
        <div className={styles.main}>
            <div className={styles.topDiv}>
                <h1 className="text-2xl font-semibold flex flex-row items-center"><p>Calorie</p><p className="ml-1 text-[#151515]">Count</p></h1>
                <Image src={CalorieImg} />
            </div>
            <div className={styles.bottomDiv}>
                {information.map((info, index) => {
                    return (
                        <div className={styles.countDiv} key={index}>
                            <div className={styles.countLeft}>
                                {
                                    info.active ? 
                                    <div className="text-[#151515] font-semibold w-1/3">
                                        <h1>{info.day}</h1>
                                    </div> :
                                    <div className="text-white opacity-75 font-semibold w-1/3">
                                        <h1>{info.day}</h1>
                                    </div>
                                }
                                <div className="w-2/3 text-xs pl-2">
                                    <p>{info.type}</p>
                                </div>
                            </div>
                            <div className={styles.countRight}>
                                {
                                    info.active ? 
                                    <div style={{ width: `${info.progress}%` }} className="bg-[#151515] h-full rounded-full flex items-center justify-start pl-5">
                                        <h1>{info.calorie}</h1>
                                    </div>
                                    :
                                    <div style={{ width: `${info.progress}%` }} className="bg-white text-[#151515] opacity-75 h-full rounded-full flex items-center justify-start pl-5">
                                        <h1>{info.calorie}</h1>
                                    </div>
                                }   
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CalorieCount
