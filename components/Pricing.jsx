import styles from '../styles/Pricing.module.css'
import TopicHeading from './TopicHeading'
import { TiTick } from 'react-icons/ti'

export default function Pricing() {
    const advancePlans = ['5 PPC Campaigns', 'Digital Marketing', 'Marketing Agency', 'Seo Friendly', 'App Development', 'Social Development']
    const basicPlans = ['2 PPC Campaigns', 'Digital Marketing', 'Marketing Agency', 'Seo Friendly']
    return (
        <div className={styles.pricing} id='pricing'>
            <TopicHeading taglineText='Our Price Model' heading='Detailed Pricing Table' paragraph='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos!' />
            <div className={styles.main}>

                <div className={styles.priceDiv}>
                    <h1>Advance Plan</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, eius.</p>
                    <h3>₹159 <span>/mo</span></h3>
                    <div className={styles.buttonDiv}>
                        <button className={styles.buttonOne}>Purchase Now</button>
                        <button className={styles.buttonTwo}>Upgrade</button>
                    </div>
                    <div className={styles.rating}>
                        <h1>⭐⭐⭐⭐⭐</h1>
                        <p>Rated 4.8/5 Stars in 1000+ reviews.</p>
                    </div>
                </div>

                <div className={styles.plans}>
                    <div className={styles.plan}>
                        <h1>Advance Plans</h1>
                        <div>
                            {advancePlans.map((plan, i) => (
                                <div key={i}><TiTick /> {plan}</div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.plan}>
                        <h1>Basic Plans</h1>
                        <div>
                            {basicPlans.map((plan, i) => (
                                <div key={i}><TiTick /> {plan}</div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <hr className='h-0.5 w-11/12 absolute bottom-0' />
        </div>
    )
}
