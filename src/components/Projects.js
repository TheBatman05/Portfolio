import styles from "./Projects.module.css"
import ProjectCard from "./ProjectCard"

const Projects =()=>{
    return(
        <>
        <div id={styles.container}>
            <p id={styles.title}>Projects</p>
            <p id={styles.maintxt}>Things I’ve <span>built</span>.</p>
            <div id={styles.jalinki}>
                <a href="https://github.com/TheBatman05"><button id={styles.smalltxt}>View GitHub 🡥</button></a>
            </div>
            <div id={styles.jacarti}>
                <ProjectCard 
                    title='wagwan team website'
                    desc='A modern web application built with React,featuring reusable components and responsive design.'
                    tec1='Css'
                    tec2='React'
                    tec3='JavaScript'

                />
                <ProjectCard 
                    title='soon...'
                    desc='A modern web application built with Next.js, focused on performance, responsive design, and seamless user experiences.'
                    tec1='Next'
                    tec2='React'
                    tec3='JavaScript'

                />
                <ProjectCard 
                    title='soon...'
                    desc='A backend project built with Python and Django, focused on API development and data management.'
                    tec1='Django'
                    tec2='Python'
                    tec3='FastApi'
                />
            </div>
        </div>
        </>
    );
};
export default Projects;