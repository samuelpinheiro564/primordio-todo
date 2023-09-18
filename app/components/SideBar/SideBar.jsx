
import styles from './SideBar.module.css';
import NavLink from '../NavLink/NavLink';
import Image from 'next/image';


const SideBar = () => {
    
        return (
            <>
            <div className={styles.sideBar}>
                <div className={styles.navLinks}>

                    <Image src="/logo.jpeg" alt="Logo" width={200} height={100} className={styles.image}/>
                        
                        <div className={styles.NavLinks}>
                    <NavLink route="/" name="Home" className={styles.darling}/>
                    <NavLink route="/about" name="About" className={styles.darling}/>
                    <NavLink route="/login" name="Login" className={styles.darling}/>
                    <NavLink route="/state" name="State" className={styles.darling}/>
                    <NavLink route="/todo" name="To Do List" className={styles.darling}/>
                    <NavLink route="/contact" name="Contact" className={styles.darling}/>
                    <NavLink route="/senai" name="SENAI" className={styles.darling}/>
                    <NavLink route="/sesi" name="SESI" className={styles.darling}/>
                    <NavLink route="/" name="Home" className={styles.darling}/>
                    <NavLink route="/about" name="About" className={styles.darling}/>
                    <NavLink route="/login" name="Login" className={styles.darling}/>
                    <NavLink route="/contact" name="Contact" className={styles.darling}/>
                    <NavLink route="/senai" name="SENAI" className={styles.darling}/>
                    <NavLink route="/sesi" name="SESI" className={styles.darling}/>
                    <NavLink route="/" name="Home" className={styles.darling}/>
                    <NavLink route="/about" name="About" className={styles.darling}/>
                    <NavLink route="/login" name="Login" className={styles.darling}/>
                    <NavLink route="/contact" name="Contact" className={styles.darling}/>
                    <NavLink route="/senai" name="SENAI" className={styles.darling}/>
                    <NavLink route="/sesi" name="SESI" className={styles.darling}/>
                    </div>
                </div>
            </div>
            </>
        );
    }

export default SideBar;