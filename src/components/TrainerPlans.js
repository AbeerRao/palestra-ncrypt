import React from 'react'
import MuscleImg from "../images/MuscleImg.svg"
import ActiveBlackBox from './ActiveBlackBox'
import AbsImg from "../images/AbsImg.svg"
import RunImg from "../images/RunImg.svg"
import OtherBlackBox from './OtherBlackBox'

function TrainerPlans() {

    const currentInfo = {
        topTitle: "Current Routine",
        sideTitle: "This Week",
        midTitle: "Muscle Gain",
        icon: MuscleImg,
        midPoints: [
            "Heavy Weights for lower reps and less focus on cardio.",
            "Main focus on upper/lower chest as well as shoulders, biceps and quads.",
            "Muscle Gaining Diet is Recommended."
        ]
    }
    const otherInfo = {
        topTitle: "Outer Routines",
        midTitle: "Fat Loss",
        icon: MuscleImg,
        midInfo: [{
            name: "Body Toning",
            icon: AbsImg,
            midPoints: [
                "For weight loss and muscle toning.",
                "For maintaining low body fat percentage.",
                "Higher reps for more volume lifts."
            ]
        }, {
            name: "Endurance",
            icon: RunImg,
            midPoints: [
                "High Intensity Interval Training.",
                "For weight loss.",
                "Heavily focused on cardio."
            ]
        }]
    }

    const styles = {
        main: "w-1/2 h-full flex flex-col items-start justify-between p-10 bg-[#E8E8E8] rounded-r-2xl overflow-hidden",
        topDiv: "flex flex-row items-center space-x-5 w-full h-4/5"
    }

    return (
        <div className={styles.main}>
            <div className={styles.topDiv}>
                <ActiveBlackBox allInfo={currentInfo} />
                <OtherBlackBox allInfo={otherInfo} />
            </div>
            <h1 className="text-9xl font-semibold h-1/4 -tracking-widest flex flex-row items-center"><p>Trainer</p><p className="ml-1 text-accent">.</p></h1>
        </div>
    )
}

export default TrainerPlans
