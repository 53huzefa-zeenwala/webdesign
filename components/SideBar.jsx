import Image from 'next/image'
import styles from '../styles/Sidebar.module.css'
import { IoClose } from 'react-icons/io5'

export default function SideBar({ setSidebarOpen, sidebarOpen, linksList }) {
    return (
        <>
            <div data-sidebaropen={sidebarOpen} className={styles.Sidebar}>
                <div className={styles.mainSidebar}>
                    <div className={styles.logoDiv}>
                        <div className={styles.logoImage}>
                            <div className='h-[85%] aspect-square relative rounded-full overflow-hidden'>
                                <Image layout='fill' objectFit='cover' src={'/profile.webp'} />
                            </div>
                        </div>
                        <h1>WebDesign</h1>
                        <button onClick={() => setSidebarOpen(false)} className={styles.closeButton}>
                            <IoClose />
                        </button>
                    </div>
                    <ul className={styles.links}>
                        {linksList.map((linkList, i) => (
                            <li key={i}><a href={`#${linkList}`} onClick={() => setSidebarOpen(false)}> {linkList}</a></li>
                        ))}
                    </ul>
                </div>
                <div className={styles.closeSidebar} onClick={() => setSidebarOpen(false)}></div>
            </div>
        </>
    )
}
