import Link from 'next/link';
import styles from './NavBar.module.css';
import GearButton from '../GearIcon';

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
            <GearButton className={styles.gear_btn} />
        </div>
    );
}
