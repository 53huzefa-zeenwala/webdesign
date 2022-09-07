import Image from 'next/image'
import {BiRightArrowAlt} from 'react-icons/bi'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header id='home' className={styles.header}>
            <div className={styles.image}>
                <Image src={'/intro.svg'} layout='fill' objectFit='contain' priority={true} />
            </div>
            <div className={styles.main}>
                <h1>Marketing Agency <br /> For <br /> Developers</h1>
                <p>We help our clients succeed by creating brand identities, digital experiences, and print materials.</p>
                <div>
                    <button className={styles.buttonOne}>New Customer <BiRightArrowAlt className='text-xl mt-0.5' /> </button>
                    <button className={styles.buttonTwo}>Contact us <BiRightArrowAlt className='text-xl mt-0.5' /></button>
                </div>
            </div>
            <hr className='h-0.5 w-11/12 absolute bottom-0' />
        </header>
    )
}
