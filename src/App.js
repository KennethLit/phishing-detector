import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Phishing Website Detection</h1>
        <nav>
          <ul>
            <li><a href="#proposal">Abstract</a></li>
            <li><a href="#dataset-features">Dataset & Features</a></li>
            <li><a href="/demo">Demo</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="proposal">
          <h2>Abstract</h2>
          <p>
            Phishing is described as a form of online attack/scam where scammers target consumers as a *well-known source – an internet service provider, a bank, or a mortgage company, for example *in an email asking the consumer for personal identifying information. With this new-found information, scammers attempt to access or open new accounts posing as the consumer. An analysis done by a Forbes Advisor on the Federal Bureau of Investigation's (FBI) Internet Crimes Report found that over 300,000 online users fell victim to phishing attacks with a total loss of $52,089,159 in the U.S. in 2022. Over 500 million phishing attacks were reported in 2022, with phishing attacks becoming more clever, intricate, and convincing over the years.
          </p>
          <p>
            To prevent consumers from falling victim to these forms of cyber-attacks, we propose to build an application to detect phishing websites using supervised learning techniques. The application will either take the form of an online web extension (for seamless use) or web application utilizing web-scraping techniques to collect input for validating the website.
          </p>
        </section>

        <section id="dataset-features">
          <h2>Dataset & Features</h2>
          <p>
            The dataset used for this project is available on Kaggle: <a href="https://www.kaggle.com/datasets/prishasawhney/phishing-url-website-dataset-cleaned" target="_blank" rel="noopener noreferrer">Phishing URL Website Dataset (Cleaned)</a>
          </p>
          <p>
            The dataset contains numerous relevant features (15+) for detecting phishing websites such as URL and HTML markers, HTTP protocols, and images/scripts. The original UCI dataset has been cleaned using outlier removal and feature selection techniques.
          </p>
          <p>Some of the relevant features in the dataset include:</p>
          <ul>
            <li>URL and HTML markers</li>
            <li>HTTP protocols</li>
            <li>Images and scripts</li>
            {/* Add more features here */}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Phishing Website Detection</p>
      </footer>
    </div>
  );
};

export default App;
