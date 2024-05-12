import React from 'react'
import DietImg from "../images/DietImg.svg"
import HighCalorie from "../images/HighCalorie.svg"
import Image from 'next/image'
import { RiArrowDropRightLine } from "react-icons/ri";

function DietPlan() {

    const styles = {
        main: "w-1/2 h-full px-4 py-6 rounded-2xl bg-white border-2 border-black flex flex-col items-start justify-between space-y-3",
        infoDiv: "flex flex-col items-end w-full h-full bg-accent rounded-2xl px-4 py-6 space-y-3",
        option: "2xl:w-3/5 w-1/4 text-sm bg-transparent rounded-full text-black border-2 border-black px-4 py-2 focus:outline-none",
        workoutDiv: "flex flex-col items-center w-full h-full bg-black text-white rounded-2xl space-y-3 px-4 py-12 text-black",
        workoutTop: "flex flex-row items-center w-full justify-between",
        workoutBottom: "flex flex-col items-center w-full h-full justify-around",
        icon: "w-1/5 h-12 text-accent"
    }

    return (
        <div className={styles.main}>
            <div className={styles.topDiv}>
                <h1 className="text-2xl font-semibold flex flex-row items-center"><p>Diet</p><p className="ml-1 text-accent">Plan</p></h1>
            </div>
            <div className={styles.infoDiv}>
                <div className="flex flex-row items-center justify-between w-full">
                    <Image src={DietImg} className="bg-black rounded-full h-14 w-14 p-2" />
                    <select className={styles.option}>
                        <option>This Week</option>
                        <option>Next Week</option>
                    </select>
                </div>
                <div className={styles.workoutDiv}>
                    <div className={styles.workoutTop}>
                        <h1 className="font-semibold text-2xl">High Calorie</h1>
                        <Image src={HighCalorie} />
                    </div>
                    <div className={styles.workoutBottom}>
                        <div className={styles.workoutTop}>
                            <RiArrowDropRightLine className={styles.icon} />
                            <p className="tracking-wide w-4/5">2 Cheat Days per week. This is the Muscle Gaining Diet. No dietary restrictions.</p>
                        </div>
                        <div className={styles.workoutTop}>
                            <RiArrowDropRightLine className={styles.icon} />
                            <p className="tracking-wide w-4/5">High protein intake, maximum 3500 calories.</p>
                        </div>
                        <div className={styles.workoutTop}>
                            <RiArrowDropRightLine className={styles.icon} />
                            <p className="tracking-wide w-4/5">Muscle Gaining Workout is Recommended.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DietPlan
