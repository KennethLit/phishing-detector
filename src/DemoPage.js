import React from 'react';
import { Link } from 'react-router-dom';
import './DemoPage.css';

const DemoPage = () => {
  return (
    <div className="demo-page">
      <header className="demo-header">
        <h1>Demo</h1>
        <nav className="demo-nav">
          <ul>
            <li>
              <Link to="/">
                <button>Back to Abstract</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="demo-content">
        {/* Add your demo components and functionality here */}
      </main>
    </div>
  );
};

export default DemoPage;
