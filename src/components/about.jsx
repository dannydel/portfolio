import React, { Component } from 'react';

class About extends Component {
  state = {};
  render() {
    return (
      <section className='s2'>
        <div className='main-container'>
          <div className='about-wrapper'>
            <div className='about-me'>
              <h4>More about me:</h4>
              <p>
                I'm Senior Software Engineer with 6+ years of experience
                building and maintaining web based applications. Outside of my
                job I really enjoy everything to do with coffee (check below for
                my coffee setup!), exercise is a huge part of my life and also
                enjoying time with my beautiful wife and dog.
              </p>
              <p>
                Current Coffee Nerd Setup 2 ☕:
                <ul>
                  <li>Fellow Ode 2</li>
                  <li>Fellow Stagg</li>
                  <li>AeroPress</li>
                </ul>
              </p>

              <hr />
              <h4>What I am good at:</h4>
              <p>
                Being a senior software engineer, I have used many different
                technologies but my favorite so far has been C#, .NET7, and
                Blazor. But I am casual enjoyer of React, Vue, and Vanilla
                JavaScript.
                <br />
                <a
                  href='https://drive.google.com/drive/folders/1_keZFf2JFgtYUUXPLBcPyE8xvDiHRZMY?ths=true'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Download Resume
                </a>
              </p>
              <div id='skills'>
                <ul>
                  <li>C#</li>
                  <li>NET 7</li>
                  <li>Blazor - WASM & Server</li>
                  <li>NET Web API</li>
                  <li>Azure</li>
                </ul>
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Vue3</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
            </div>
            <div className='social-links'>
              <img
                id='social-image'
                alt='making friends'
                srcSet='/images/making-friends.jpg'
              />
              <p>
                * Making friends with locals.{' '}
                <span role='img' aria-label='jsx-ally/accessible-emoji'>
                  &#x1F986;
                </span>
              </p>
              <h3> Find me at:</h3>
              <a
                href='https://github.com/dannydel'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a
                href='https://www.linkedin.com/in/daniel-del-grosso-186655a5/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Linked-In
              </a>
              <a href='http://stackoverflow.com/users/3858633/ddelgro'>
                <img
                  src='http://stackoverflow.com/users/flair/3858633.png?theme=dark'
                  width='208'
                  height='58'
                  alt='profile for DDelgro at Stack Overflow, Q&amp;A for professional and enthusiast programmers'
                  title='profile for DDelgro at Stack Overflow, Q&amp;A for professional and enthusiast programmers'
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
