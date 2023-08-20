import React from 'react';

import './Footer.css';

const Footer = () => (
  <div className="footer">
     <div className="app-name">
      <p>* The name "Twitt-agra" comes from a monologue in the 2010 movie <a rel="noreferrer noopener" href="https://www.imdb.com/title/tt1231587" target="_blank">Hot Tub Time Machine</a>:</p>
      <blockquote>
        <p>-What about Twitter? Whatever the fuck that is.</p>
        <p>-Hey, we could combine Twitter with fucking Viagra.</p>
        <p>-Twitt-agra.</p>
        <p>...</p>
        <cite>Lou</cite>      
      </blockquote>
    </div>
    <hr />
    <div className="">
      <p>by <a href="https://pythonsway.it" target="_blank" rel="noopener noreferrer">Python&#39;s way</a></p>
    </div>
  </div>
);

export default Footer;
