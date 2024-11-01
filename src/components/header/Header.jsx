import title from '../../images/title.png';
// import quote from '../../images/quote.jpeg';
// import './Header.css';
import styles from './Header.module.css';

export function Header() {
    return(
        <header>
            <h1 className={styles["title-law"]}>
                <img src={title} alt="10000 hours" className={styles["img-title"]} />
            </h1>
            {/* <img src={quote} alt="work hard dream big never give up" className="img-text"> */}
            <p className={styles["img-txt"]}>
                <strong className={styles["title-des"]}>The rule of 10,000 hours</strong><br />
                is the rule that in order to master a skill,<br />
                you must invest 10,000 hours of training.
            </p>
        </header>

    )
}