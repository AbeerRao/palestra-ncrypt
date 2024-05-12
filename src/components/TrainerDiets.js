import React from 'react'
import MuscleImg from "../images/MuscleImg.svg"
import ActiveBlackBox from './ActiveBlackBox'
import AbsImg from "../images/AbsImg.svg"
import RunImg from "../images/RunImg.svg"
import OtherBlackBox from './OtherBlackBox'

function TrainerDiets() {

    const currentInfo = {
        topTitle: "Current Plan",
        sideTitle: "This Week",
        midTitle: "High Calorie Diet",
        icon: MuscleImg,
        midPoints: [
            "No major dietary restrictions.",
            "Maximum 1 cheat meal per week.",
            "Around 3500 calories based on your stats."
        ]
    }
    const otherInfo = {
        topTitle: "Other Plans",
        icon: MuscleImg,
        midInfo: [{
            name: "Body Toning",
            icon: AbsImg,
            midPoints: [
                "No junk food at all.",
                "Maximum 2800 calories for your body.",
                "2 cheat meals per month."
            ]
        }, {
            name: "Endurance",
            icon: RunImg,
            midPoints: [
                "High carb, low fat intake.",
                "Maximum 300 calories according to your stats.",
                "2 cheat meals per month."
            ]
        }]
    }

    const styles = {
        main: "w-1/2 h-full flex flex-col items-end justify-between p-10 bg-[#fff6e6] rounded-l-2xl overflow-hidden",
        topDiv: "flex flex-col 2xl:flex-row items-center space-x-0 space-y-5 2xl:space-y-0 2xl:space-x-5 w-full h-4/5"
    }

    return (
        <div className={styles.main}>
            <h1 className="text-9xl font-semibold h-1/4 -tracking-widest flex flex-row items-center"><p>Diets</p><p className="ml-1 text-accent">.</p></h1>
            <div className={styles.topDiv}>
                <ActiveBlackBox allInfo={currentInfo} />
                <OtherBlackBox allInfo={otherInfo} />
            </div>
        </div>
    )
}

export default TrainerDiets
