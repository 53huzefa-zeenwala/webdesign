import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { BsFillSunFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiMoon } from 'react-icons/hi'
import SideBar from './SideBar'
import { useEffect, useState } from 'react'

export default function Navbar({ darkTheme, setDarkTheme }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const linksList = ['home', 'services', 'methods', 'pricing', 'clients', 'contact']
    useEffect(() => {
        if (window) {
            const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches
            setDarkTheme(getCurrentTheme())
        }
    }, [])


    return (
        <>
            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} linksList={linksList} />
            <nav className={styles.navbar}>
                <div className={styles.logoDiv}>
                    <div className={styles.logoImage}>
                        <div className='h-[85%] aspect-square relative rounded-full overflow-hidden'>
                            <Image layout='fill' objectFit='cover' src={'/profile.webp'} />
                        </div>
                    </div>
                    <h1>WebDesign</h1>
                </div>
                <div className={styles.linksDiv}>
                    <ul className={styles.links}>
                        {linksList.map((linkList, i) => (
                            <li key={i}><a href={`#${linkList}`} onClick={() => setSidebarOpen(false)}> {linkList}</a></li>
                        ))}
                    </ul>
                    <button onClick={() => setSidebarOpen(true)} className={styles.toggleSidebar}>
                        <GiHamburgerMenu />
                    </button>
                    <button onClick={() => setDarkTheme(!darkTheme)} className={styles.toggleTheme}>
                        {darkTheme ? <BsFillSunFill /> : <HiMoon />}
                    </button>
                </div>
            </nav>
        </>
    )
}
