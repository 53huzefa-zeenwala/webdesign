import styles from '../styles/TopicHeading.module.css'

export default function TopicHeading({ taglineText, heading, paragraph}) {
    return (
        <div className={styles.heading}>
            <div className={styles.tagline}>
                <h6>{taglineText}</h6>
            </div>
            <h1>{heading}</h1>
            {paragraph && <p>{paragraph}
            </p>}
        </div>
    )
}
