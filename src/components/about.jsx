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
                I love my doggo Marcie who was adopted in October 20'.(Pictured
                above) In my free time you can find me either programming,
                working out/running, checking out a new brewery/winery, or
                hanging with my wife and dog. I also dabble in some photography
                here and there.
              </p>
              <p>
                Philly philly!{' '}
                <span role='img' aria-label='jsx-ally/accessible-emoji'>
                  &#x1F919;
                </span>
              </p>

              <hr />
              <h4>What I am good at:</h4>
              <p>
                Primarily a C# back-end developer for Deacom Inc. But enjoys
                Front-End development in React, HTML, and CSS.
                <br />
                <a
                  href='https://docs.google.com/document/d/1JeWAhBC9cbRK1fqdHePOGaK_eLfFw1AJz0dFqX4rzPU/edit?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Download Resume
                </a>
              </p>
              <div id='skills'>
                <ul>
                  <li>C#</li>
                  <li>MSSQL</li>
                  <li>MVC</li>
                  <li>NET Core</li>
                </ul>
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Vue3</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
              <p>
                This fully responsive website is made from React, Express, and
                Node.JS, EmailJs plus some neat little CSS tricks I've picked
                up. Learned to make this template by Dennis Ivy{' '}
                <a
                  href='https://youtu.be/r_hYR53r61M'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Build Portfolio site
                </a>
                .
              </p>
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
