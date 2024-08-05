import React from 'react'
import pen from './images/pen.svg'
import book from './images/book.svg'
import globe from './images/globe.svg'
import './about.css';
import Footer from './Footer';
import Header from './Header';

const About = () => {
return (
    <div>
        <Header/>
    <div className="bg2">
    <div className="title"><br/>
        <h1>ABOUT US</h1><br/>
        <div className="about-content">
            <p>
                At Medita, We believe in the transformative power of mental well-being. Our Aim is to provide a safe and supportive online platform where individuals can explore, learn, and grow on their journey towards better mental health.
            </p>
        </div>
    </div><br/>
    <div className="components">
        <div className="aboutus-container">
            <div className="images">
                <img src={book} alt="book"/>
            </div>
            <h2>MISSION</h2>
            <div className="hrtag"></div>
            <hr/>
            <p> Fosters mental well-being with accessible resources, guided meditations, therapy, education, and community support, empowering resilience and clarity.</p>
        </div>
        <div className="aboutus-container">
            <div className="images">
                <img src={globe} alt="globe" className="image"/>
            </div>
            <h2>VISION</h2>
            <div className="hrtag"></div>
            <hr/>
            <p> Envisions a world where mental well-being is accessible to all, fostering resilience, clarity, and compassion in every individual.</p>
        </div>
        <div className="aboutus-container">
            <div className="images">
                <img src={pen} alt="pen"/>
            </div>
            <h2>APPROACH</h2>
            <div className="hrtag"></div>
            <hr/>
            <p>Evidence-based practices, inclusivity, and compassion to empower individuals on their mental health journey with support and guidance.</p>
        </div>
    </div>
    <br/><br/>
    <div className="components">
        <div className="aboutus-container2">
             <h2>Our Key Features</h2>
             <div className="hrtag"></div>
            <hr/>
            <ul className="key">
                <li>Guided Meditations,therapy,education,community</li>
                <li>Empower individuals for mental well-being</li>
                <li>Licensed therapists,mental health experts</li>
                <li>Confidential and secure environment</li>
                <li>Continuously evolving to meet community needs.</li>
                <li>Open and honest communication</li>
                
            </ul>
        </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
</div>
<Footer/>
</div>
)
}

export default About