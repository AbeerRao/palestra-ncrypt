import React from 'react'
import MuscleImg from "../images/MuscleImg.svg"
import WkImg from "../images/WkImg.svg"
import Image from 'next/image'
import { RiArrowDropRightLine } from "react-icons/ri";

function WorkoutPlan() {

    const styles = {
        main: "w-1/2 h-full px-4 py-6 rounded-2xl text-white bg-[#151515] flex flex-col items-start justify-between space-y-3",
        infoDiv: "flex flex-col items-end w-full h-full bg-accent rounded-2xl px-4 py-6 space-y-3",
        option: "2xl:w-3/5 w-1/4 text-sm bg-transparent rounded-full text-[#151515] border-2 border-[#151515] px-4 py-2 focus:outline-none",
        workoutDiv: "flex flex-col items-center w-full h-full bg-white rounded-2xl space-y-3 px-4 py-12 text-[#151515]",
        workoutTop: "flex flex-row items-center w-full justify-between",
        workoutBottom: "flex flex-col items-center w-full h-full justify-around",
        icon: "w-1/5 h-12 text-accent"
    }

    return (
        <div className={styles.main}>
            <h1 className="text-2xl font-semibold flex flex-row items-center"><p>Workout</p><p className="ml-1 text-accent">Routine</p></h1>
            <div className={styles.infoDiv}>
                <div className="flex flex-row items-center justify-between w-full">
                    <Image src={WkImg} className="bg-[#151515] rounded-full h-14 w-14 p-2" />
                    <select className={styles.option}>
                        <option>This Week</option>
                        <option>Next Week</option>
                    </select>
                </div>
                <div className={styles.workoutDiv}>
                    <div className={styles.workoutTop}>
                        <h1 className="font-semibold text-2xl">Muscle Gain</h1>
                        <Image src={MuscleImg} />
                    </div>
                    <div className={styles.workoutBottom}>
                        <div className={styles.workoutTop}>
                            <RiArrowDropRightLine className={styles.icon} />
                            <p className="tracking-wide w-4/5">Heavy Weights for lower reps and less focus on cardio.</p>
                        </div>
                        <div className={styles.workoutTop}>
                            <RiArrowDropRightLine className={styles.icon} />
                            <p className="tracking-wide w-4/5">Main focus on upper/lower chest as well as shoulders, biceps and quads.</p>
                        </div>
                        <div className={styles.workoutTop}>
                            <RiArrowDropRightLine className={styles.icon} />
                            <p className="tracking-wide w-4/5">Muscle Gaining Diet is Recommended.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutPlan
