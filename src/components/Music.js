import React from 'react';
import './Music.css';

const Music = () => (
  <section className="music">
    <h2>Music Interests</h2>
    <p>
      I’m an avid music enthusiast, exploring diverse genres and sharing my reviews on 
      <a href="https://rateyourmusic.com/~dinnarus" target="_blank" rel="noopener noreferrer">RateYourMusic</a>.
    </p>
    <iframe 
      src="https://rateyourmusic.com/~dinnarus" 
      title="RateYourMusic Profile" 
      width="100%" 
      height="500px"
      style={{ border: 'none' }}
    ></iframe>
  </section>
);

export default Music;
