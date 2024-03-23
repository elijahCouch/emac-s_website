import React from 'react';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '800px', padding: '40px', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', overflow: 'hidden' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>Emacs Adventures</h1>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <iframe
            title="Video Clip"
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/VIDEO_ID"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ borderRadius: '20px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
          ></iframe>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Install Command</h2>
          <code style={{ backgroundColor: '#f0f0f0', padding: '1rem 1.5rem', borderRadius: '10px', fontSize: '1.4rem', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
            npm install emacs_game
          </code>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>About Emacs Adventures</h2>
          <p style={{ fontSize: '1.6rem', color: '#555' }}>
            Emacs Adventures is a fun game to teach you the basic commands that are in emacs
          </p>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Additional Resources</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="https://github.com/SpectreTheGray/EmacsAdventures/tree/main/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.6rem', color: '#007bff', textDecoration: 'none', marginRight: '1rem' }}>emacsadventures Github</a></li>
            <li><a href="https://www.gnu.org/software/emacs/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.6rem', color: '#007bff', textDecoration: 'none', marginRight: '1rem' }}>Official Emacs Website</a></li>
            <li><a href="https://www.emacswiki.org/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.6rem', color: '#007bff', textDecoration: 'none', marginRight: '1rem' }}>Emacs Wiki</a></li>
            <li><a href="https://www.masteringemacs.org/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.6rem', color: '#007bff', textDecoration: 'none', marginRight: '1rem' }}>Mastering Emacs</a></li>
          </ul>
        </div>
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Feedback</h2>
          <p style={{ fontSize: '1.6rem', color: '#555' }}>
            We'd love to hear your feedback on the Emacs Learning Game! If you have any suggestions, questions, or concerns, please feel free to reach out to me at <span style={{ color: '#007bff', fontWeight: 'bold' }}>elilemonlime@gmail.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
