import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About-body';

import './body.css';
import about from './images/about.jpg';
import chatbot from './images/chatbot.jpg';
import forum from './images/forum.avif';
import medita from './images/medita.mp4';
import portal from './images/portal.png';
import team1 from './images/team1.png';
import team2 from './images/team2.png';
import team3 from './images/team3.png';
import team4 from './images/team4.png';
import team5 from './images/team5.png';
import test from './images/test.jpg';
import medQuiz from './Medquiz';

const Body = () => {
  return (
    <div>
    <h1 className='start'>MEDITA: Your Daily Dose of Tranquility.</h1>
    <div className='box'>
    <div className='greybox'>
      <div className='home-img'>
      <div className='boximg'>
        <video  src={medita} type="medita/mp4" autoPlay loop muted></video>
      </div>
      </div>
      </div>
    </div>
    <div>
    <br />
    <br />
    <h1 className='start'>OUR DOMAIN</h1>
    <br />
    </div>
    <div className='domain'> 
    <div className='container'>
        <div className='domainimg'>
        <img src={forum} alt="forum" className="forum" />
        </div>
        <br />
        <span>Forum</span>
        <p>Building Bridges of Understanding in our Mental Health Forum.<br />
        Join the Conversation, Share Your Story, and Let’s Grow Stronger Together.</p>
      </div> 
      <div className='container'>
        <div className='domainimg'>
          <img src={chatbot} alt="chatbot" className="chatbots" />
        </div>
        <br />
        <span>Chatbot</span>
        <p>Your 24/7 Companion on the Path to Mental Wellness.<br />
        Chat with our AI friend for support, guidance, and a listening ear</p>
      </div>
      <div className='container'>
        <div className='domainimg'>
          <img src={portal} alt="portal" className="portal" />
        </div>
        <br />
        <span>Portal</span>
        <p>Empowering Healing Journeys: Your Therapist-Patient Portal.<br />
        Seamlessly connect, reflect, and progress on your path to mental wellness</p>
      </div>
    </div>

    <div className='test'>
      <div className='content'>
      <h1>Make sense of your experiences</h1>
      <p>Taking an online mental health test could be the first step towards getting the right help.</p><br />
      <Link to='/MedQuiz'>Medquiz</Link>
      <br />
      </div>
      <div className='contenimg'>
          <img src={test} alt="test" />
      </div>
    </div><br /><br /><br />
    <h1 className='start'>MEDITA at a Glance</h1><br />
    <br />
    <div className='test'>
      <div className='aboutimg'>
        <img src={about} alt="about" />
      </div>
      <div className='about'>
        <p>The Medita website was designed in collaboration with hundreds of people.
        Includes people with lived experience of mental health challenges and the people who support them, health professionals, and service providers.<br /><br />
        We hope it makes it easier to access wellbeing and mental health services.</p>
        <Link to="/About">Learn More</Link>
      </div>
    </div>
    <div>

      <br />
      <br />
      <br />

    <h1 className='start'> OUR TEAM</h1>
    <br />
    <br />

    </div>
    <div className='Our-team'>
      <div className='rectangle1'>
      <div className='team-container'>
        <div className='teamimg'>
          <img src={team1} alt="team1" />
        </div>
        <div className='team'>
          <h2 className='name'>Mathew,MD</h2>
        <p  className='profession'>Psychiatrist</p></div>
      </div>

      <div className='team-container'>
        <div className='teamimg'>
          <img src={team2} alt="team2" />
        </div>
        <div className='team'>
        <h2 className='name'>Jesica,MD</h2>
        <p  className='profession'>Psychiatrist</p>
        </div>
      </div>
      <div className='team-container'>
        <div className='teamimg'>
          <img src={team3} alt="team3" />
        </div>
        <div className='team'>
        <h2 className='name'>Johnson,MD</h2>
        <p  className='profession'>Psychiatrist</p>
        </div>
      </div>
      </div>
      <div className='rectangle2'>
      <div className='team-container'>
        <div className='teamimg'>
          <img src={team4} alt="team4" />
        </div>
        <div className='team'>
          <h2 className='name'>Jemy,MD</h2>
          <p  className='profession'>Psychiatrist</p>
        </div>
      </div>

      <div className='team-container'>
        <div className='teamimg'>
          <img src={team5} alt="team5" />
        </div>
        <div className='team'>
          <h2 className='name'>Zany,MD</h2>
        <p className='profession'>Psychiatrist</p></div>
      </div>
      </div>
      <h2 className='start'>Healing Minds, Changing Lives: Our Expert Team of Compassionate Psychiatrists.</h2>
      <br /><br />
    </div>
    <br /><br />
    <Routes>
      <Route>
        <Route path='/medquiz' element={<medQuiz/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>
      </Routes>
  </div>
  )
}

export default Body;
