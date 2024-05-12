import CalorieCount from '@/components/CalorieCount'
import DietPlan from '@/components/DietPlan'
import Header from '@/components/Header'
import PersonalStats from '@/components/PersonalStats'
import Schedule from '@/components/Schedule'
import StepCount from '@/components/StepCount'
import WorkoutPlan from '@/components/WorkoutPlan'
import DashboardIm from "../images/DashboardIm.svg"
import React from 'react'
import Image from 'next/image'

function Dashboard() {

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            } else {
            reveals[i].classList.remove("active");
            }
        }
      }
    
      if (typeof window !== "undefined") {
          window.addEventListener("scroll", reveal);
          reveal();
      }

    const styles = {
        main: "flex flex-col items-center justify-center min-w-screen",
        topDiv: "bg-accent w-full h-full rounded-b-[4rem] h-[40vh] flex flex-col items-center justify-between pb-10 reveal",
        topInfo: "w-full flex flex-row items-center justify-between px-10",
        topTitle: "text-7xl font-semibold -tracking-widest flex flex-row items-center text-white",
        dashboardInfo: "flex flex-col 2xl:flex-row items-center space-y-5 2xl:space-y-0 justify-center 2xl:space-x-5 w-full p-10 2xl:h-[70vh] h-[140vh]",
        infoLeft: "flex flex-col items-center justify-center 2xl:w-3/5 w-full h-full space-y-5 reveal",
        leftInfo: "w-full h-1/2 flex flex-row items-center justify-center space-x-5",
        infoRight: "flex flex-row items-center justify-center 2xl:w-2/5 w-full h-full space-x-5 reveal"
    }

    const curr = new Date().toString().slice(4, 10)

    return (
        <div className={styles.main}>
            <title>My Dashboard</title>
            <div className={styles.topDiv}>
                <Header loginDisplay={false} />
                <div className={styles.topInfo}>
                    <h1 className={styles.topTitle}><p className="pr-1 text-[#151515]">Dashboard</p>.</h1>
                    <h1 className={styles.topTitle}><p className="pr-1 text-[#151515]">{curr.slice(0, 4)}</p>.<p className="pr-1 text-[#151515]">{curr.slice(4)}</p></h1>
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
                        <div className="w-1/3 h-full">
                            <Image src={DashboardIm} className="h-full w-full object-cover rounded-2xl" />
                        </div>
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