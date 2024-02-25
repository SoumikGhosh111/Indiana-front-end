import React from 'react';
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
                    <h1>Get ready for your dream job</h1>
                    <p>Practice with thousands of questions for Aptitude, Reasoning, and GS. Start now for free</p>
                    <button onClick={(e) => handleStartPracticing(e)}>Start Practicing</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection