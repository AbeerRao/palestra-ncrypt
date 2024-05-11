import React from 'react'
import HomeInfoImg from "../images/HomeInfoImg.svg"
import Image from 'next/image'
import TrainerImg from "../images/TrainerImg.svg"
import DashboardImg from "../images/DashboardImg.svg"
import ForumsImg from "../images/ForumsImg.svg"


function HomeInfo() {

    const styles = {
        main: "px-10 flex flex-row items-start justify-between w-full h-[35vh] mt-12 overflow-hidden",
        leftDiv: "w-1/5 bg-accent flex items-center justify-center h-72 w-72 rounded-2xl shadow-2xl",
        middleDiv: "w-2/5 flex flex-col items-start justify-center space-y-10",
        middleTop: "w-full flex flex-col items-start justify-center space-y-2",
        title: "text-5xl font-semibold tracking-tighter flex flex-col items-center",
        desc: "font-extralight w-2/3",
        button: "border-2 border-black text-2xl py-3 px-8 rounded-full hover:bg-black transition duration-300 ease-in-out cursor-pointer flex flex-row items-center space-x-1 group hover:scale-95",
        rightDiv: "w-2/5 flex flex-col items-end justify-between h-4/5",
        rightItem: "flex flex-row items-center w-2/3 justify-between",
        itemLeft: "flex items-center justify-center h-20 w-20 bg-black rounded-2xl",
        itemRight: "flex flex-col items-start justify-around h-20",
        itemTitle: "text-3xl font-semibold text-accent",
        itemDesc: "font-extralight w-5/6"
    }

    return (
        <div className={styles.main}>
            <div className={styles.leftDiv}>
                <Image src={HomeInfoImg} />
            </div>
            <div className={styles.middleDiv}>
                <div className={styles.middleTop}>
                    <h1 className={styles.title}>THE KEY TO A GREAT WORKOUT STARTS IN THE KITCHEN.</h1>
                    <p className={styles.desc}>We help you in the kitchen with recipes so that you can be fitter way faster with our Trainer tab which gives you workout routines and diet plans.</p>
                </div>
                <div className={styles.button}><h1 className="text-black group-hover:text-accent transition duration-300 ease-in-out">Visit</h1><h1 className="text-accent group-hover:text-white transition duration-300 ease-in-out">Trainer</h1></div>
            </div>
            <div className={styles.rightDiv}>
                <div className={styles.rightItem}>
                    <div className={styles.itemLeft}>
                        <Image src={TrainerImg} />
                    </div>
                    <div className={styles.itemRight}>
                        <h1 className={styles.itemTitle}>Trainer</h1>
                        <p className={styles.itemDesc}>One stop place for all your workout routines and diets.</p>
                    </div>
                </div>
                <div className={styles.rightItem}>
                    <div className={styles.itemLeft}>
                        <Image src={DashboardImg} />
                    </div>
                    <div className={styles.itemRight}>
                        <h1 className={styles.itemTitle}>Dashboard</h1>
                        <p className={styles.itemDesc}>All statistics of your workout and calories in one stop.</p>
                    </div>
                </div>
                <div className={styles.rightItem}>
                    <div className={styles.itemLeft}>
                        <Image src={ForumsImg} />
                    </div>
                    <div className={styles.itemRight}>
                        <h1 className={styles.itemTitle}>Forums</h1>
                        <p className={styles.itemDesc}>Narrate your fitness journey or clear out your queries.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomeInfo