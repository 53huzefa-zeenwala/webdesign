import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    const data = [
        {
            name: 'service',
            list: [
                'Clients', 'Company', 'Marketing', 'Startup'
            ],
        },
        {
            name: 'products',
            list: [
                'About', 'Portfolio', 'Contact', 'Service'
            ],
        },
        {
            name: 'Company',
            list: [
                'Corporate', 'Portfolio', 'Seo Agency', 'Web agency'
            ],
        },
        {
            name: 'solutions',
            list: [
                'Gallery', 'Testimonials', 'Contact', 'Service'
            ],
        },
    ]
    return (
    <div className={styles.footer}>
            <div className={styles.main}>
                <div className={styles.about}>
                    <div className={styles.logoDiv}>
                        <div className={styles.logoImage}>
                            <div className='h-[85%] aspect-square relative rounded-full overflow-hidden'>
                                <Image layout='fill' objectFit='cover' src={'/profile.webp'} />
                            </div>
                        </div>
                        <h1>WebDesign</h1>
                    </div>
                    <p>Create Website With Us. Download The Files And Create Your Website As Fast As Possible.</p>
                </div>
                <div className={styles.lists}>
                    <div>
                        <h1>{data[0].name}</h1>
                        {data[0].list.map((list, i) => (
                            <h3 data-content={list} key={i}>{list}</h3>
                        ))}
                    </div>
                    <div>
                        <h1>{data[1].name}</h1>
                        {data[1].list.map((list, i) => (
                            <h3 data-content={list} key={i}>{list}</h3>
                        ))}
                    </div>
                </div>
                <div className={styles.lists}>
                    <div>
                        <h1>{data[2].name}</h1>
                        {data[2].list.map((list, i) => (
                            <h3 data-content={list} key={i}>{list}</h3>
                        ))}
                    </div>
                    <div>
                        <h1>{data[3].name}</h1>
                        {data[3].list.map((list, i) => (
                            <h3 data-content={list} key={i}>{list}</h3>
                        ))}
                    </div>
                </div>
                <div className={styles.subscription}>
                    <h1>Newsletter</h1>
                    <h5>1000+ Our clients are subscribe Around the World!</h5>
                    <input type="email" placeholder='Your@email.com' id="" />
                    <button>Submit</button>
                </div>
            </div>
            <div className={styles.botSection}>
                <ul>
                    <li data-content='Privacy Policy'>Privacy Policy</li>
                    <li data-content='Terms And Conditions'>Terms And Conditions</li>
                    <li data-content='Contact us'>Contact us</li>
                </ul>
                <h6>@ Huzefa Zeenwala 2022</h6>
            </div>
        </div>
    )
}
