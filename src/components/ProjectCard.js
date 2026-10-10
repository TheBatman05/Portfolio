import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.preview}>
                <span className={styles.tag}>React</span>
                <div className={styles.previewContent}>
                    <span className={styles.codeIcon}>{"</>"}</span>
                </div>
            </div>
            <div className={styles.info}>
                <h3>{props.title}</h3>
                <p className={styles.description}>
                    {/* A modern web application built with React,
                    featuring reusable components and responsive design. */}
                    {props.desc}
                </p>
                <div className={styles.technologies}>
                    <span>{props.tec1}</span>
                    <span>{props.tec2}</span>
                    <span>{props.tec3}</span>
                </div>
                <a
                    href="https://github.com/TheBatman05/Wagwan_React"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                >
                    View Project <span>↗</span>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;