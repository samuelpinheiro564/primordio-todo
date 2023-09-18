import styles from './NavLink.module.css';
import Link from 'next/link';



const NavLink = ({ route, name }) => {

    return (
    <div className={styles.cao}>
        <Link href={route} className={styles.bkg}> {name} </Link>

    </div>
    );
}

export default NavLink;





