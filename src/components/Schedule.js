import React from 'react'
import ScheduleImg from "../images/ScheduleImg.svg"
import Image from 'next/image'


function Schedule() {

    const styles = {
        main: "bg-black w-1/2 h-full px-12 py-8 text-white rounded-2xl flex flex-col items-start justify-between space-y-1",
        topDiv: "flex flex-row items-start w-full justify-between",
        bottomDiv: "flex flex-row items-end w-full h-full space-x-5",
        todayDiv: "w-full bg-accent rounded-full h-full text-white px-1 py-2 font-semibold flex flex-col items-center justify-start space-y-1 text-xl",
        nextDiv: "w-full bg-white text-black rounded-full h-4/5 px-1 py-2 font-semibold flex flex-col items-center justify-start space-y-1 text-2xl",
        prevDiv: "w-full bg-gray-400 text-black rounded-full h-4/5 px-1 py-2 font-semibold flex flex-col items-center justify-start space-y-1 text-2xl"
    }

    const getWeekDates = () => {
        const now = new Date()
        const dayOfWeek = now.getDay()
        const numDay = now.getDate()
        const start = new Date(now)
        start.setDate(numDay - dayOfWeek)
        start.setHours(0, 0, 0, 0)
        const days = Array.from({length: 7}, (v, i) =>
            new Date(new Date(start).setDate(start.getDate() + i)).toDateString().slice(0, -5)
        );
        return [days, numDay];
    }

    const weekDates = getWeekDates();

    return (
        <div className={styles.main}>
            <div className={styles.topDiv}>
                <h1 className="text-2xl font-semibold flex flex-row items-center"><p>Weekly</p><p className="ml-1 text-accent">Schedule</p></h1>
                <Image src={ScheduleImg} width={35} height={35} />
            </div>
            <div className={styles.bottomDiv}>
                {
                    weekDates[0].map((day, index) => {
                        console.log(day.slice(-2))
                        if (day.slice(-2) == weekDates[1]) {
                            return (
                                <div key={index} className={styles.todayDiv}>
                                    <p>{day.slice(-2)}</p>
                                    <p className="text-sm">{day.slice(0, 3)}</p>
                                </div>
                            )
                        } else if (day.slice(-2) < weekDates[1]) {
                            return (
                                <div key={index} className={styles.prevDiv}>
                                    <p>{day.slice(-2)}</p>
                                    <p className="text-sm">{day.slice(0, 3)}</p>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index} className={styles.nextDiv}>
                                    <p>{day.slice(-2)}</p>
                                    <p className="text-sm">{day.slice(0, 3)}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Schedule
