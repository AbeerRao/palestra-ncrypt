import React from 'react'
import Header from '@/components/Header'
import TrainerPlans from '@/components/TrainerPlans'
import TrainerDiets from '@/components/TrainerDiets'

function Trainer() {

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
        trainerInfo: "flex flex-row items-center 2xl:h-[71vh] h-[140vh] space-x-10 w-full pt-10 reveal"
    }

    const curr = new Date().toString().slice(4, 10)

    return (
        <div className={styles.main}>
            <title>Trainer & Deit Plans</title>
            <div className={styles.topDiv}>
                <Header loginDisplay={false} />
                <div className={styles.topInfo}>
                    <h1 className={styles.topTitle}><p className="pr-1 text-[#151515]">Trainer & Diet Plans</p>.</h1>
                    <h1 className={styles.topTitle}><p className="pr-1 text-[#151515]">{curr.slice(0, 4)}</p>.<p className="pr-1 text-[#151515]">{curr.slice(4)}</p></h1>
                </div>
            </div>
            <div className={styles.trainerInfo}>
                <TrainerPlans />
                <TrainerDiets />
            </div>
        </div>
    )
}

export default Trainer
