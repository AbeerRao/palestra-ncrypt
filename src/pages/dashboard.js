import CalorieCount from '@/components/CalorieCount'
import DietPlan from '@/components/DietPlan'
import Header from '@/components/Header'
import PersonalStats from '@/components/PersonalStats'
import Schedule from '@/components/Schedule'
import StepCount from '@/components/StepCount'
import WorkoutPlan from '@/components/WorkoutPlan'
import React from 'react'

function Dashboard() {

    const styles = {
        main: "flex flex-col items-center justify-center min-w-screen",
        topDiv: "bg-accent w-full h-full rounded-b-[4rem] h-[40vh] flex flex-col items-center justify-between pb-10",
        topInfo: "w-full flex flex-row items-center justify-between px-10",
        topTitle: "text-7xl font-semibold -tracking-widest flex flex-row items-center",
        dashboardInfo: "flex flex-col 2xl:flex-row items-center space-y-5 2xl:space-y-0 justify-center 2xl:space-x-5 w-full p-10 2xl:h-[70vh] h-[140vh]",
        infoLeft: "flex flex-col items-center justify-center 2xl:w-3/5 w-full h-full space-y-5",
        leftInfo: "w-full h-1/2 flex flex-row items-center justify-center space-x-5",
        infoRight: "flex flex-row items-center justify-center 2xl:w-2/5 w-full h-full space-x-5"
    }

    const curr = new Date().toString().slice(4, 10)

    return (
        <div className={styles.main}>
            <title>My Dashboard</title>
            <div className={styles.topDiv}>
                <Header loginDisplay={false} />
                <div className={styles.topInfo}>
                    <h1 className={styles.topTitle}><p className="pr-1 text-black">Dashboard</p>.</h1>
                    <h1 className={styles.topTitle}><p className="pr-1 text-black">{curr.slice(0, 4)}</p>.<p className="pr-1 text-black">{curr.slice(4)}</p></h1>
                </div>
            </div>
            <div className={styles.dashboardInfo}>
                <div className={styles.infoLeft}>
                    <div className={styles.leftInfo}>
                        <Schedule />
                        <PersonalStats />
                    </div>
                    <div className={styles.leftInfo}>
                        <StepCount />
                        <CalorieCount />
                        <StepCount />
                    </div>
                </div>
                <div className={styles.infoRight}>
                    <WorkoutPlan />
                    <DietPlan />
                </div>
            </div>
        </div>
    )
}

export default Dashboard