import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/components/ProjectNav.module.css';

export const ProjectNav = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div className={styles.container}>
            <Link href='#' className='nextPrevLink prev'>
                <GrLinkPrevious className='icon' />
                <span>Prev</span>
            </Link>

            <Link href='#' className='nextPrevLink next'>
                <span>Next</span>
                <GrLinkNext className='icon' />
            </Link>
        </div>
    );
};
