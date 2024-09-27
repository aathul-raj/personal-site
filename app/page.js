"use client"
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useWindowSize from "./hooks/windowSize";
import styles from "./page.module.css";
import Header from "./components/header/header";
import Wave from "../public/wave.png"
import Research from "../public/research.svg"
import Websites from "../public/websites.svg"
import Builder from "../public/builder.svg"
import AI from "../public/ai.svg"
import Smiley from "../public/smiley.png"
import M2 from "../public/memoji_two.svg"
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import ScrollToTopButton from "./components/scrollButton/button";

config.autoAddCss = false;

export default function Home() {

  const { scrollY } = useScroll();
  const [isBrowser, setIsBrowser] = useState(false);
  const { width } = useWindowSize();

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 275,
    damping: 30,
    restDelta: 0.001
  });

  const aiX = useTransform(smoothScrollY, [0, 500], [0, -1200]);
  const aiY = useTransform(smoothScrollY, [0, 500], [0, -500]);
  const aiYMobile = useTransform(smoothScrollY, [0, 500], [0, -200]);
  const aiRotate = useTransform(smoothScrollY, [0, 500], [20, 300]);

  const builderX = useTransform(smoothScrollY, [0, 500], [0, 1200]);
  const builderY = useTransform(smoothScrollY, [0, 500], [0, -250]);
  const builderYMobile = useTransform(smoothScrollY, [0, 800], [0, -50]);
  const builderRotate = useTransform(smoothScrollY, [0, 500], [-20, -90]);
  const builderRotateMobile = useTransform(smoothScrollY, [0, 500], [-20, -200]);

  const websitesX = useTransform(smoothScrollY, [0, 500], [0, -350]);
  const websitesXMobile = useTransform(smoothScrollY, [0, 500], [0, -550]);
  const websitesY = useTransform(smoothScrollY, [0, 500], [0, -750]);
  const websitesRotate = useTransform(smoothScrollY, [0, 500], [5, -150]);

  const researchX = useTransform(smoothScrollY, [0, 800], [0, 1000]);
  const researchY = useTransform(smoothScrollY, [0, 500], [0, -700]);
  const researchYMobile = useTransform(smoothScrollY, [0, 500], [0, -1000]);
  const researchRotate = useTransform(smoothScrollY, [0, 500], [-10, 75]);
  const researchRotateMobile = useTransform(smoothScrollY, [0, 500], [-10, 250]);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const topicAnimations = {
    ai: {
      x: aiX,
      y: width > 768 ? aiY : aiYMobile,
      rotate: aiRotate,
    },
    builder: {
      x: builderX,
      y: width > 768 ? builderY : builderYMobile,
      rotate: width > 768 ? builderRotate : builderRotateMobile,
    },
    websites: {
      x: width > 768 ? websitesX : websitesXMobile,
      y: websitesY,
      rotate: websitesRotate,
    },
    research: {
      x: researchX,
      y: width > 768 ? researchY : researchYMobile,
      rotate: width > 768 ? researchRotate : researchRotateMobile,
    },
  };

  let iconHeight = 25;
  let iconWidth = 25;

  return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.heroSection} id="landing">
          <Header/>
          <div className={styles.landingSpacer}></div>
          <div className={styles.landingContent}>
            <div className={styles.landingSubContainer}>
              <Image src={Wave.src} width={30} height={30} alt="Wave Icon" className={styles.waveIcon}/>
              <h2>hey, i’m athul, a junior at tamu and currently...</h2>
            </div>
            { width > 768 ? <h1>building bridges<br/>between wild ideas<br/>and innovative tech</h1> : <h1>building bridges between wild ideas + innovative tech</h1>}
          </div>
          {isBrowser && (
            <>
              <motion.div 
                className={`${styles.topic} ${styles.topicBlue}`}
                style={{
                  x: topicAnimations.ai.x,
                  y: topicAnimations.ai.y,
                  rotate: topicAnimations.ai.rotate
                }}
              >
                <Image src={AI.src} width={iconWidth} height={iconHeight} alt="Topic"/>
                <h1>ai</h1>
              </motion.div>
              <motion.div 
                className={`${styles.topic} ${styles.topicOrange}`}
                style={{
                  x: topicAnimations.builder.x,
                  y: topicAnimations.builder.y,
                  rotate: topicAnimations.builder.rotate
                }}
              >
                <Image src={Builder.src} width={iconWidth} height={iconHeight} alt="Topic"/>
                <h1>builder</h1>
              </motion.div>
              <motion.div 
                className={`${styles.topic} ${styles.topicPink}`}
                style={{
                  x: topicAnimations.websites.x,
                  y: topicAnimations.websites.y,
                  rotate: topicAnimations.websites.rotate
                }}
              >
                <Image src={Websites.src} width={iconWidth} height={iconHeight} alt="Topic"/>
                <h1>websites</h1>
              </motion.div>
              <motion.div 
                className={`${styles.topic} ${styles.topicGreen}`}
                style={{
                  x: topicAnimations.research.x,
                  y: topicAnimations.research.y,
                  rotate: topicAnimations.research.rotate
                }}
              >
                <Image src={Research.src} width={iconWidth} height={iconHeight} alt="Topic"/>
                <h1>research</h1>
              </motion.div>
            </>
          )}
        </div>
      </div>

      <div className={styles.aboutContainer} id="about">
        <div className={styles.aboutSubContainer}>
          <Image src={M2.src} width={415} height={348} className={styles.pfpImage} alt="PFP"/>
          <div className={styles.aboutContent}>
            <h1>
              born in kerala, in.<br/>
              raised in austin, tx.
            </h1>

            <h1>
            applied maths + comp sci @ tamu.<br/>
            tamu formula electric software lead.
            </h1>

            <h1>
            first swe internship @ 17. <br/>
            startup technical founder @ 19.
            </h1>

            <h1>
              2x hackathon top 5 finisher. <br/>
              1st in tx, fbla website design 2021.
            </h1>
          </div>
        </div>
        <h1 className={styles.aboutSubText}><a href="https://drive.google.com/file/d/186gt3oK0TV9alF2lGKlufRVoIWuIvX_j/view?usp=sharing" target="_blank">wanna learn more? take a look at my resume.</a></h1>
        <h1 className={styles.aboutRecText}><a href="https://drive.google.com/file/d/1IuyFQJjW_HXr5k0g1dxO6wszc_fLCnM3/view?usp=sharing" target="_blank">or, here&apos;s a letter of rec from my former manager at retailmenot.</a></h1>
      </div>

      <div className={styles.portfolioContainer} id="fs-works">
      {width > 768 ?  <h1>my top three most impressive (full-stack) works:</h1> :  <h1>my top three most impressive <br/>(full-stack) works:</h1>}
        <div className={styles.portfolio}>
          <div className={styles.portfolioItem}>
            <p><a className={styles.hoverGreen} href="https://old.preptify.com/" target="_blank">preptify</a> - my startup, where i was the technical cofounder. it&apos;s an ai-powered mock interview assistant that 
            tracks your performance and gives personalized feedback. i was responsible for building the whole product.</p>
            <p className={styles.builtWith}>built with: react, node, firebase, aws, gpt, figma, deepgram, and stripe.</p>
          </div>

          <div className={styles.portfolioItem}>
            <p><a className={styles.hoverPink} href="https://emily-archive.vercel.app/" target="_blank">emily&apos;s archive</a> - a blog for my girlfriend. built the whole cms for this from scratch. articles, images, the works.</p>
            <p className={styles.builtWith}>built with: next.js, node, postgresql, firebase, and slate.</p>
          </div>

          <div className={styles.portfolioItem}>
            <p><a className={styles.hoverRed} href="https://prof-rec.vercel.app/" target="_blank">aggie prof rec</a> - backend dev for this tamu prof-comparing site. when i joined, slashed query times from {'>'}30 seconds to milliseconds by building a 
            massive database of tamu profs, courses, and stats.
            </p>
            <p className={styles.builtWith}>built with: next.js, flask, selenium, cron, and postgresql.</p>
          </div>
        </div>
      </div>

      <div className={styles.portfolioContainer} id="ai-works">
       {width > 768 ?  <h1>three more impressive (ai) works:</h1> :  <h1>three more <br/>impressive (ai) works:</h1>}
        <div className={styles.portfolio}>
          <div className={styles.portfolioItem}>
            <p><a className={styles.hoverBlue} href="https://github.com/aathul-raj/alphazero" target="_blank">alphazero tictactoe</a> - replicated alphazero paper but for tictactoe because i dont have google researcher level compute (@google tryna change that???).</p>
            <p className={styles.builtWith}>built with: tensorflow.</p>
          </div>

          <div className={styles.portfolioItem}>
            <p><a className={styles.hoverPurple} href="https://github.com/aathul-raj/agentic-assistant" target="_blank">agentic ai assistant</a> - needs a better name. proactive gpt based voice assistant that can handle multiple complex queries at once, roughly siri level latency.</p>
            <p className={styles.builtWith}>built with: python, gpt, whisper, elevenlabs.</p>
          </div>

          <div className={styles.portfolioItem}>
            <p><a className={styles.hoverBrown} href="https://github.com/aathul-raj/feedforward-network" target="_blank">neural net from scratch</a> - built a high-performance neural network library achieving 99% accuracy on MNIST. based off of micheal nielsen&apos;s book. no tensor libraries, just python.
            </p>
            <p className={styles.builtWith}>built with: python.</p>
          </div>
        </div>
      </div>

      <footer className={styles.footer} id="footer">
        <div className={styles.footerWrapper}>
          <div className={styles.footerRowOne}>
            <div className={styles.footerLeftCol}>
              <h1>need help or have<br/> questions?</h1>
              <h1>reach out!</h1>
              <button><a href="mailto:athulrsuresh@gmail.com" target="_blank">get in touch</a></button>
            </div>
            <Image src={Smiley.src} height={150} width={150} className={styles.footerImage} alt="Smiley"/>
          </div>
          <div className={styles.footerSpacer}></div>
          <div className={styles.footerRowTwo}>
            <h1><a href="mailto:athulrsuresh@gmail.com" target="_blank">athulrsuresh@gmail.com</a></h1>
            <div className={styles.socialContainer}>
                <a className={styles.iconLeft} href="https://www.instagram.com/aathul.raj/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a className={styles.iconRight} href="https://github.com/aathul-raj" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a className={styles.iconLeft} href="https://www.linkedin.com/in/athul-suresh/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a className={styles.iconRight} href="https://twitter.com/aathulrs" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </a>
            </div>
          </div>
          <div className={styles.credits}>
            <p>made with ❤️ in atx</p>
            {width > 768 ? <p>design inspo credits: daniel sun</p> : <p>design inspo credits:<br/>daniel sun</p>}
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </>
  );
}
