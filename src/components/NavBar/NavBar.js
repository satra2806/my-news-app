import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        // write your code here to render the NavBar component
        <div className={styles.navbar}>
            <Link href="/" legacyBehavior> 
                <a className={styles.navbar__link}>Home</a>
            </Link>
            <Link href="/news" legacyBehavior>
                <a className={styles.navbar__link}>News</a>
            </Link>
        </div>
    );
}
