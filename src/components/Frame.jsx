import React, { useRef, useEffect, useState } from 'react';

import './Frame.css';

export default function Frame() {
  const searchInputRef = useRef(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Enter the username you want to browse.');

  // warming up server
  useEffect(() => {
    fetch(process.env.REACT_APP_WARM_PROXY, { method: 'HEAD' });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = searchInputRef.current.value;
    fetch(`${process.env.REACT_APP_TWITTER_PROXY}${name}`)
      .then((res) => res.text())
      .then((data) => {
        setContent(data);
        setLoading(false);
        setStatus('Result:');
      })
      .catch(() => {
        setLoading(false);
        setStatus('There was an error, try again.');
      });
  };

  return (
    <div className="frame">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="input-group-text">@</span>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g., pythonsway"
            pattern="^[a-zA-Z0-9]+$"
            minLength="4"
            maxLength="15"
            required
            autoFocus
            ref={searchInputRef}
          />
          <button className="button" type="submit" disabled={loading}>
            <span className="button-text">Check</span>
          </button>
        </div>
      </form>
      <div className="status">
        <p>{status}</p>
      </div>
      <div className="media-frame">
        <iframe className="frame-content" srcDoc={content} title="tt"></iframe>
      </div>
    </div>
  );
}
