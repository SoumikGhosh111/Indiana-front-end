import React from 'react';
import {motion} from "framer-motion";
import "./styles.css";

function HeroSection() {
    const handleStartPracticing = (e) => { 
        e.preventDefault(); 
        window.location.href = '/dynamic_page_1'; 
    }
    return (
        <div className='hero-section-wrapper'>
            <div className='hero-section-div'>
                <div className='hero-section-hero-cont'>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17, duration: 0.25, delay: 0.5 }}
                    >Get ready for your dream job</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17, duration: 0.25, delay: 1 }}
                    >Practice with thousands of questions for Aptitude, Reasoning, and GS. Start now for free</motion.p>
                    <motion.button onClick={(e) => handleStartPracticing(e)}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                        whileHover={{scale: 1.07}} 
                        whileTap={{scale: 0.9}}
                        transition={{ type: "spring", stiffness: 400, damping: 17, duration: 0.25 }}
                    >Start Practicing</motion.button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection