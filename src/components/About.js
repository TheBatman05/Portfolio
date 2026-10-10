import styles from "./About.module.css"

const About =()=>{
    return(
        <>
            <div id={styles.container}>
                <div id={styles.current}>
                    <div id={styles.texts}>
                        <p className={styles.smalltxt}>Currently</p>
                        <p id={styles.text}>Learning → Building → Shipping</p>
                        <p className={styles.smalltxt}>
                            My goal is to become a developer who can <br />understand 
                            the whole product, not only one <br />side of it.
                        </p>
                    </div>
                </div>
                <div id={styles.left}>
                    <p id={styles.title}>. About</p>
                    <p id={styles.maintxt}>
                        Not just writing code. <br />
                        <span>Building things.</span>
                    </p>
                    <p id={styles.smalltxt}>
                        I’m a Computer Engineering student and front-end developer 
                        who enjoys turning ideas into clean, useful web experiences. 
                        Right now I’m deepening my JavaScript and React skills while 
                        expanding into backend development with Django.
                    </p>
                </div>
            </div>
            <hr id={styles.mainhr} />
        </>
    );
};

export default About;