import Image from 'next/image'
import React from 'react'
import Logo from "../images/Logo.svg"
import { useRouter } from 'next/router'
import Link from 'next/link'

function Header({ loginDisplay }) {

    const router = useRouter()
    const curr = router.pathname

    const pages = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Dashboard",
            link: "/dashboard"
        },
        {
            name: "Trainer",
            link: "/trainer"
        },
        {
            name: "Forums",
            link: "/forums"
        }
    ]

    const styles = {
        main: "text-white flex flex-row justify-between w-full items-start",
        rightDiv: "flex flex-row items-center 2xl:px-12 px-3 2xl:py-14 py-20",
        logo: "w-16 h-16 object-fit bg-white rounded-full p-1",
        leftDiv: "2xl:px-12 px-2 2xl:py-12 py-16",
        headerSelect: "flex flex-row items-center space-x-6 bg-white rounded-full py-2 px-6 h-16",
        select: "text-[#151515] hover:text-accent bg-transparent hover:bg-[#151515] rounded-full cursor-pointer px-5 py-2 transition duration-400 ease-in-out",
        activeSelect: "text-accent bg-[#151515] rounded-full cursor-pointer px-5 py-2 transition duration-400 ease-in-out",
        leftButton: "2xl:h-16 h-12 bg-[#151515] text-accent 2xl:w-40 w-32 rounded-full flex flex-col items-center justify-center font-semibold cursor-pointer hover:bg-accent hover:text-[#151515] transition duration-400 ease-in-out"
    }

    return (
        <div className={styles.main}>
            <div className={styles.rightDiv}>
                <Image src={Logo} className={styles.logo} />
                <div className={styles.headerSelect}>
                    {
                        pages.map((page, index) => {
                            if (page.link == curr) {
                                return (
                                    <Link href={page?.link} key={index}>
                                        <h1 key={index} className={styles.activeSelect}>{page.name}</h1>
                                    </Link>
                                )
                            } else {
                                return (
                                    <Link href={page?.link} key={index}>
                                        <h1 key={index} className={styles.select}>{page.name}</h1>
                                    </Link>
                                )
                            }
                        })
                    }
                </div>
            </div>
            {
                loginDisplay && 
                <Link href="/login">
                    <div className={styles.leftDiv}>
                        <h1 className={styles.leftButton}>Login</h1>
                    </div>
                </Link>
            }
        </div>
    )
}

export default Header
