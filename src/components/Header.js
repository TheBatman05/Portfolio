import styles from "./Header.module.css";
const Header = ()=>{
    return(
        <div id={styles.container}>
            <p id={styles.brand}>TheBatman05</p>
            <div id={styles.navbar}>
                <a href="#Home"><button className={styles.btn}>Home</button></a>
                <a href="#About"><button className={styles.btn}>About</button></a>
                <a href="#Projects"><button className={styles.btn}>Projects</button></a>
                <button className={styles.btn}>Skills</button>
                <button className={styles.btn}>Contact</button>
            </div>
        </div>
    );
}
export default Header; 