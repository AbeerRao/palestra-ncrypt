import React from 'react'
import HomeInfoImg from "../images/HomeInfoImg.svg"
import Image from 'next/image'
import TrainerImg from "../images/TrainerImg.svg"
import DashboardImg from "../images/DashboardImg.svg"
import ForumsImg from "../images/ForumsImg.svg"


function HomeInfo() {

    const styles = {
        main: "px-10 flex flex-row items-start justify-between w-full 2xl:h-[42vh] h-[40vh] 2xl:mt-12 mt-16 overflow-hidden",
        leftDiv: "w-1/5 bg-accent flex items-center justify-center 2xl:h-72 2xl:w-72 h-56 w-56 p-3 2xl:p-0 rounded-2xl shadow-2xl",
        middleDiv: "w-2/5 flex flex-col items-start h-56 2xl:h-72 justify-between",
        middleTop: "w-full flex flex-col items-start justify-center space-y-2",
        title: "text-3xl 2xl:text-5xl font-semibold tracking-tighter flex flex-col items-center",
        desc: "font-extralight w-2/3 text-sm 2xl:text-base",
        button: "border-2 border-black text-xl 2xl:text-2xl py-3 px-8 rounded-full hover:bg-black transition duration-300 ease-in-out cursor-pointer flex flex-row items-center space-x-1 group hover:scale-95",
        rightDiv: "w-2/5 flex flex-col items-end justify-between 2xl:h-72 h-72 divide-y-2 divide-black",
        rightItem: "flex flex-row items-center w-4/5 2xl:w-2/3 2xl:justify-around space-x-10 2xl:space-x-0 py-2 2xl:py-6",
        itemLeft: "flex items-center justify-center 2xl:h-20 2xl:w-20 h-16 w-16 bg-black rounded-2xl p-3",
        itemRight: "flex flex-col items-start justify-around h-20",
        itemTitle: "2xl:text-3xl text-xl font-semibold text-accent",
        itemDesc: "font-extralight w-5/6 text-sm 2xl:text-base"
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