import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Method.module.css'
import TopicHeading from './TopicHeading'
import { Fade, JackInTheBox } from 'react-awesome-reveal'

export default function Methods() {
    const [methodOne, setMethodOne] = useState(true)
    const [methodTwo, setMethodTwo] = useState(false)
    const [methodThree, setMethodThree] = useState(false)
    return (
        <div className={styles.methods} id='methods'>
            <TopicHeading taglineText='You Can Acquire Everything.' heading='Acquire new customers.' paragraph='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos!' />
            <div className={styles.main}>
                <div className={styles.lists}>
                    <JackInTheBox>
                        <button onClick={() => {
                            setMethodOne(true)
                            setMethodTwo(false)
                            setMethodThree(false)
                        }}
                            className={methodOne ? styles.active : styles.normalButton}>
                            <h1>market research</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </button>
                    </JackInTheBox>
                    <JackInTheBox>
                        <button onClick={() => {
                            setMethodOne(false)
                            setMethodTwo(true)
                            setMethodThree(false)
                        }}
                            className={methodTwo ? styles.active : styles.normalButton}>
                            <h1>reporting & designing</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </button>
                    </JackInTheBox>

                    <JackInTheBox>
                        <button onClick={() => {
                            setMethodOne(false)
                            setMethodTwo(false)
                            setMethodThree(true)
                        }}
                            className={methodThree ? styles.active : styles.normalButton}>
                            <h1>software Development</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </button>
                    </JackInTheBox>
                </div>
                <div className={styles.image}>
                    <Image src={methodOne ? '/method1.webp' : methodTwo ? '/method2.webp' : '/method3.webp'} layout='fill' objectFit='cover' priority={true} quality={50} />
                </div>
            </div>
            <hr className='h-0.5 w-11/12 absolute bottom-0' />
        </div>
    )
}
