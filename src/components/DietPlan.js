import React from 'react'

function DietPlan() {

    const styles = {
        main: "w-1/2 h-full rounded-2xl text-black bg-white border-2 border-black flex flex-col items-start justify-between space-y-1",
        topDiv: "flex flex-row items-center w-full justify-between space-x-5 bg-black h-1/5 px-8 py-8 rounded-t-xl text-white",
        option: "2xl:w-3/5 w-1/4 text-sm bg-transparent rounded-full text-white border-2 border-white px-4 py-2 focus:outline-none",
    }

    return (
        <div className={styles.main}>
            <div className={styles.topDiv}>
                <h1 className="text-2xl font-semibold flex flex-row items-center"><p>Diet</p><p className="ml-1 text-accent">Plan</p></h1>
                <select className={styles.option}>
                    <option>This Week</option>
                    <option>Next Week</option>
                </select>
            </div>
        </div>
    )
}

export default DietPlan
