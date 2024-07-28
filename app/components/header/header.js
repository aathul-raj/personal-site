"use client"
import React, { useEffect, useState } from 'react';
import useSmoothScroll from '@/app/hooks/smoothScroll';
import useWindowSize from '@/app/hooks/windowSize';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import styles from './header.module.css';
import Image from "next/image";

export default function Header(){
    const [activeSection, setActiveSection] = useState('landing');
    const { scrollY } = useScroll();
    const controls = useAnimation();
    const { width } = useWindowSize();
    useSmoothScroll(250, 1500);

    const headerScroll = width > 768 ? [840, 841] : [520, 521]
    const headerWidthVals = width > 768 ? ['78vw', '50vw'] : ['80vw', '88vw']

    const headerWidth = useTransform(
        scrollY,
        headerScroll,
        headerWidthVals
    );

    const logoAnimationConfig = {
        rotate: { duration: 2, type: "spring", stiffness: 30 },
        filter: { duration: 1 }
    };

    useEffect(() => {
        controls.start({
            rotate: [25, 385, 25],
            filter: ['drop-shadow(0 0 0px #CD9280)', 'drop-shadow(0 0 10px #CD9280)', 'drop-shadow(0 0 0px #CD9280)'],
            transition: {
                duration: 2,
                times: [0, 0.5, 1],
                ease: "easeInOut",
            }
        });

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = document.querySelectorAll('#landing, #about, #fs-works, #ai-works, #footer');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [controls]);

    return (
        <motion.header 
            className={styles.header}
            style={{ width: headerWidth }}
            transition={{ type: "spring", stiffness: 20 }}
        >
            <div className={styles.headerBrandContainer}>
            <motion.svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.logo}
                    initial={{ rotate: 25, filter: 'drop-shadow(0 0 0px #CD9280)' }}
                    animate={controls}
                    whileHover={{ 
                        rotate: 385, 
                        filter: 'drop-shadow(0 0 10px #CD9280)',
                    }}
                    transition={logoAnimationConfig}
                >
                    <motion.path
                        d="M20 38c9.941 0 18-8.059 18-18S29.941 2 20 2c2.5 0 9 8.059 9 18s-6.5 18-9 18z"
                        fill="#CD9280"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.svg>
                <h1>athul suresh</h1>
            </div>
            <nav className={styles.navContainer}>
                <ul>
                    <li className={`${styles.headerItem} ${activeSection === 'about' ? styles.active : ''}`}>
                        <a href="#about">story</a>
                    </li>
                    <li className={`${styles.headerItem} ${activeSection === 'fs-works' ? styles.active : ''}`}>
                        <a href="#fs-works">full stack</a>
                    </li>
                    <li className={`${styles.headerItem} ${activeSection === 'ai-works' ? styles.active : ''}`}>
                        <a href="#ai-works">ai</a>
                    </li>
                    <li className={`${styles.headerItem} ${activeSection === 'footer' ? styles.active : ''}`}>
                        <a href="#footer">connect</a>
                    </li>
                    <li className={styles.headerContact}>
                        <a href="mailto:athulrsuresh@gmail.com" target="_blank">say &ldquo;hi&ldquo;</a>
                    </li>
                </ul>
            </nav>
        </motion.header>
    );
}