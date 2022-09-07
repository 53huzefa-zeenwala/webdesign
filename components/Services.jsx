import { Fade } from 'react-awesome-reveal'
import styles from '../styles/Service.module.css'
import TopicHeading from './TopicHeading'

export default function Services() {
    const data = [
        {
            name: 'web development',
            detail: 'There are many variations variations.'
        },
        {
            name: 'Design & Creative',
            detail: 'There are many variations variations.'
        },
        {
            name: 'App Development',
            detail: 'There are many variations variations.'
        },
        {
            name: 'Product Design',
            detail: 'There are many variations variations.'
        },
    ]
    return (
        <div className={styles.services} id='services'>
            <TopicHeading taglineText='We can do everything.' heading='Services provided for you.' paragraph='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos!' />
            <div className={styles.main}>
                {data?.map(({ name, detail }, i) => (
                    <Fade key={i}>
                        <div className={styles.service}>
                            <div>
                                <h3>{i + 1}</h3>
                            </div>
                            <h1>{name}</h1>
                            <p>{detail}</p>
                        </div>
                    </Fade>
                ))}
            </div>
            <hr className='h-0.5 w-11/12 absolute bottom-0' />
        </div>
    )
}
