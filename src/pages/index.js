import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import ProjectCard from '../components/ProjectCard';
import { MetaData } from '../components/MetaData';

function HomePage() {
    // console.log(projectCard);
    // const projectList = projectCard.map((card) => (
    //    <ProjectCard />
    // ));
    return (
        <>
            <MetaData page='Works' />
            <div className={styles.projectsList}>{/* <ProjectCard /> */}</div>
        </>
    );
}

export default HomePage;
