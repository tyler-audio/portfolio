/* eslint-disable @next/next/no-img-element */
import techSkills from '../lib/techSkills';

const About = () => {
  let isMobile = false;

  if (process.browser) {
    const letter= document.querySelector('.letter'),
      form = document.querySelector('.contact_form'),
      topFold = document.querySelector('.top_fold'),
      overlay = document.querySelector('.form_overlay'),
      envelope = document.querySelector('.envelope');

    const openForm = () => {
      if (letter.classList.contains('close')) letter.classList.remove('close');
      letter.classList.add('open');

      if (form.classList.contains('close')) form.classList.remove('close')
      form.classList.add('open');

      if (topFold.classList.contains('close')) topFold.classList.remove('close');
      topFold.classList.add('open');

      overlay.classList.toggle('active');
    }

    const closeForm = () => {
      letter.classList.remove('open');
      letter.classList.add('close');

      form.classList.remove('open');
      form.classList.add('close');

      topFold.classList.remove('open');
      topFold.classList.add('close');

      overlay.classList.toggle('active');
    }

    if (window.innerWidth <= 768) {
      isMobile = true;
      envelope.href = 'mailto:tylerj.audio94@gmail.com';
      envelope.target = '_blank';
    }
  }

  return (
    <section>
      <div className="form_wrapper">
        <div className="contact_form">
          <div className="form_border"></div>
          <h1 className="title contact_title">Contact Me</h1>
          <form
            id="form"
            action="https://formsubmit.co/e932efb2dddd95fceef701b75cce0bf4"
            method="POST"
            onSubmit={(e) => {
              e.target.reset();
              closeForm();
            }}
          >
            <input type="hidden" name="_next" value='https://www.tylerwjones.dev/thankyou'/>
            <input type="hidden" name="_captcha" value="false" />

            <label>
              <input
                type="text"
                name="name"
                required
                maxLength="20"
                placeholder="Name"
              />
            </label>

            <label>
              <input
                type="email"
                name="email"
                required
                maxLength="30"
                placeholder="E-mail"
              />
            </label>

            <label>
              <input
                type="text"
                name="subject"
                required
                maxLength="30"
                placeholder="Subject"
              />
            </label>

            <label id="textarea">
              <textarea
                type="text"
                name="message"
                required
                maxLength="240"
                placeholder="Message"
                onKeyUp={(e) => {
                  const charCount = document.querySelector('.char_count');
                  charCount.innerHTML = `${e.target.value.length}/240`;
                }}
              />
            </label>
            <div className="char_count">0/240</div>

            <div className="form_buttons">
              <button
                type="submit"
                onClick={() => {
                  const form = document.getElementById('form');
                  console.log(form.reportValidity());
                }}
              >Send</button>
              <button
                type="button"
                onClick={() => {
                  if (closeForm) {
                    closeForm();
                  } else {
                    alert('Please, try again');
                  }
                }}
              >Scrap</button>
            </div>
          </form>
        </div>
        <div
          className="form_overlay"
          onClick={() => {
            if (closeForm) {
              closeForm();
            } else {
              alert('Please, try again');
            }
          }}
        />
      </div>
      <div className="intro row">
        <div className="row headshot_container">
          <img
            id="headshot"
            src="/images/headshot.png"
            alt="Headshot of Tyler Jones"
          />
        </div>
        <div id="intro_text">
          <h2 className="title">Hey, I&apos;m Tyler!</h2>
          <p>I am a <strong>full stack software developer</strong> and <strong>audio engineer</strong> with a passion for the intersection between <strong>technology</strong> and <strong>art</strong>. Through my background in <strong>music production</strong>, I have developed <strong>strong creative intuition</strong> and a <strong>unique</strong>, <strong>versatile skill set</strong>. This perspective enables me to confidently navigate and find solutions in ambiguous situations.</p>
          <p>My initial pursuit of a career in the music industry led me to discovering the world of software engineering, where I instantly found a love for creating <strong>striking</strong>, <strong>intuitive</strong>, and <strong>innovative user interfaces</strong>. I am motivated by my ambitious nature as well as a desire to explore my passions and continue my growth both <strong>professionally</strong> and <strong>personally</strong>.</p>
          <p>When I am not coding or creating, you will find me either lost in a novel or laughing and enjoying time with loved ones.</p>
        </div>
      </div>
      <div className="details row">
        <div className="social_links row">
          <h3 className="title">Get in touch!</h3>
          <h3 className="link_container">
            <a
              href="https://www.linkedin.com/in/tyler-jones-audio/"
              target="_blank"
              rel="noopener noreferrer"
              className="social_link row"
              id="linkedin_btn"
            >
              LinkedIn
              <svg className="social_svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
          </h3>

          <h3 className="link_container">
            <a
              href="https://github.com/tyler-audio"
              target="_blank"
              rel="noopener noreferrer"
              className="social_link row"
              id="github_btn"
            >
              Github
              <svg className="social_svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </h3>
          <a
            className="envelope"
            onClick={(e) => {
              if (openForm && !isMobile) {
                openForm();
              } else if (isMobile) {
                console.log(isMobile);
              } else {
                alert('Please, try again');
              }
            }}
          >
            <div className="animated">
              <div className="back_fold"></div>
              <div className="letter">
                <div className="letter_border"></div>
                <div className="letter_title"></div>
                <div className="letter_text"></div>
                <div className="letter_stamp">
                  <div className="letter_stamp--inner"></div>
                </div>
              </div>
              <div className="top_fold"></div>
              <div className="env_body"></div>
              <div className="left_fold"></div>
            </div>
            <div className="shadow"></div>
          </a>
        </div>
        <div id="tech_skills" className="row">
          <h3 className="title">Technical Skills</h3>
          <div className="row tech_lists">
            {Object.keys(techSkills).map((category) => (
              <div key={category}>
                <h4 className="tech_list_title">{category}</h4>
                <ul className="tech_ul">
                  {techSkills[category].map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;