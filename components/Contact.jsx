import styles from "../styles/Contact.module.css";
import TopicHeading from "./TopicHeading";

export default function Contact() {
    return (
        <div className={styles.contact} id="contact">
            <TopicHeading taglineText="Contact Form" heading="Contact With Us!" />
            <from className={styles.form}>

                <div className={styles.first}>
                    <div className={styles.input}>
                        <label htmlFor="name" className={styles.label}>
                            name
                        </label>
                        <input type="text" name="name" />
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="phone" className={styles.label}>
                            phone
                        </label>
                        <input type="tel" name="phone" />
                    </div>
                </div>

                <div className={styles.first}>
                    <div className={styles.input}>
                        <label htmlFor="email" className={styles.label}>
                            email
                        </label>
                        <input type="email" name="email" />
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="subject" className={styles.label}>
                            subject
                        </label>
                        <input type="text" name="subject" />
                    </div>
                </div>

                <div className={styles.textarea}>
                    <label htmlFor="message" className={styles.label}>
                        message
                    </label>
                    <textarea
                        name="message"
                        id=""
                        cols="30"
                        rows="10"

                    />
                </div>

            </from>
        </div>
    );
}
