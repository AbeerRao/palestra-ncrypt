import CalorieCount from '@/components/CalorieCount'
import Header from '@/components/Header'
import Schedule from '@/components/Schedule'
import StepCount from '@/components/StepCount'
import WorkoutPlan from '@/components/WorkoutPlan'
import React from 'react'

function Dashboard() {

    const styles = {
        main: "flex flex-col items-center justify-center min-w-screen",
        topDiv: "bg-accent w-full h-full rounded-b-[4rem] h-[40vh] flex flex-col items-center justify-between pb-10",
        topInfo: "w-full flex flex-row items-center justify-between px-10",
        topTitle: "flex flex-row items-center justify-center text-white text-7xl font-semibold tracking-tighter",
        dashboardInfo: "flex flex-row items-center justify-center space-x-5 w-full p-10 h-[60vh]",
        infoLeft: "flex flex-col items-center justify-center w-1/2 h-full space-y-5",
        leftInfo: "w-full h-1/2 flex flex-row items-center justify-center space-x-5",
        infoRight: "flex flex-row items-center justify-center w-1/2 h-full space-x-5"
    }

    const curr = new Date().toString().slice(4, 10)

    return (
        <div className={styles.main}>
            <title>My Dashboard</title>
            <div className={styles.topDiv}>
                <Header loginDisplay={false} />
                <div className={styles.topInfo}>
                    <h1 className={styles.topTitle}><p className="pr-1 text-black">DASHBOARD</p>.</h1>
                    <h1 className={styles.topTitle}><p className="pr-1 text-black">{curr.slice(0, 4)}</p>.<p className="pr-1 text-black">{curr.slice(4)}</p></h1>
                </div>
            </div>
            <div className={styles.dashboardInfo}>
                <div className={styles.infoLeft}>
                    <div className={styles.leftInfo}>
                        <Schedule />
                        <Schedule />
                    </div>
                    <div className={styles.leftInfo}>
                        <StepCount />
                        <CalorieCount />
                        <StepCount />
                    </div>
                </div>
                <div className={styles.infoRight}>
                    <WorkoutPlan />
                    <WorkoutPlan />
                </div>
            </div>
        </div>
    )
}

export default Dashboard