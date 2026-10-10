import styles from "./Hero.module.css"

const Hero =()=>{
    return(
        <>
            <div id={styles.container}>
                <div id={styles.left}>
                    <p id={styles.skill}>COMPUTER ENGINEERING . FRONT-END DEVELOPER</p>
                    <p id={styles.maintxt}>
                        I build digital <br /> <span>Experiences</span> <br /> that feel alive.
                    </p>
                    <p id={styles.smalltxt}>
                        I’m a front-end developer focused on React, modern interfaces and
                        <br /> building toward full-stack development with Django.
                    </p>
                    <div id={styles.btns}>
                        <button id={styles.work}>View my work </button>
                        <button id={styles.talk}>Let's talk</button>
                    </div>
                    <div id={styles.status}>
                        <div className={styles.status}>
                            <span className={styles.num}>01+</span> <br />
                            <span className={styles.text}>Years coding</span>
                        </div>
                        <div className={styles.status}>
                            <span className={styles.num}>02</span> <br />
                            <span className={styles.text}>featured projects</span>
                        </div>
                        <div className={styles.status}>
                            <span className={styles.num}>∞</span> <br />
                            <span className={styles.text}>things to build</span>
                        </div>
                    </div>
                </div>
                <div id={styles.samplecode}>
                    <div id={styles.boxrangbox}>
                        <span className={styles.rangbox} id={styles.red}></span>
                        <span className={styles.rangbox} id={styles.yellow}></span>
                        <span className={styles.rangbox} id={styles.green}></span>
                    </div>
                    <hr id={styles.hr} />
                    <p id={styles.code}>
                        {`
                        const developer = {
                            name: "Abolfazl Kharazmi",
                            stack: [
                                "Front-end",
                                "React.js",
                                "Next.js",
                                "JavaScript",
                                "Python"
                            ],
                            status: "building..."
                            };
                        `}
                    </p>
                </div>
            </div>
            <hr id={styles.mainhr} />
        </>
    );
}
export default Hero;