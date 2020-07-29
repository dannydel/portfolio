import React, { Component } from 'react';

class Top extends Component {
  scrollTo = (e) => {
    e.preventDefault();
    document
      .getElementById('contact-start')
      .scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    const { themeSwitchClick } = this.props;
    return (
      <section className='s1'>
        <div className='main-container'>
          <div className='greeting-wrapper'>
            <h1>Hi, I'm Danny Del Grosso</h1>
          </div>

          <div className='intro-wrapper'>
            <div className='nav-wrapper'>
              <div className='dots-wrapper'>
                <div id='dot-1' className='browser-dot'>
                  {' '}
                </div>
                <div id='dot-2' className='browser-dot'>
                  {' '}
                </div>
                <div id='dot-3' className='browser-dot'>
                  {' '}
                </div>
              </div>
              <ul id='navigation'>
                <li>
                  <a href='#contact-start' onClick={this.scrollTo}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className='left-column'>
              <img id='profile-pic' srcSet='/images/me-small.jpg' alt='me' />
              <h5 id='theme-tagline'>Set Theme</h5>
              <div id='theme-options-wrapper'>
                <div
                  id='light-mode'
                  className='theme-dot'
                  data-mode='default'
                  onClick={() => themeSwitchClick()}
                ></div>
                <div
                  id='blue-mode'
                  className='theme-dot'
                  data-mode='blue'
                  onClick={() => themeSwitchClick('blue')}
                ></div>
                <div
                  id='green-mode'
                  className='theme-dot'
                  data-mode='green'
                  onClick={() => themeSwitchClick('green')}
                ></div>
                <div
                  id='purple-mode'
                  className='theme-dot'
                  data-mode='purple'
                  onClick={() => themeSwitchClick('purple')}
                ></div>
              </div>
              <p id='settings-note'>*Theme settings will be saved.</p>
            </div>
            <div className='right-column'>
              <div id='preview-shadow'>
                <div id='preview'>
                  <div id='corner-tl' className='corner'></div>
                  <div id='corner-tr' className='corner'></div>
                  <h3>What I do:</h3>
                  <p>
                    I am a Philly based software developer and aspiring web
                    developer.
                  </p>
                  <div id='corner-bl' className='corner'></div>
                  <div id='corner-br' className='corner'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Top;
