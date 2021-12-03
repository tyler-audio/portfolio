const Contact = () => {
  return (
    <section>
      <div className="envelope"
        onClick={() => {
          const letter = document.querySelector('.letter');
          if (letter.classList.contains('close')) letter.classList.remove('close');
          letter.classList.add('open');

          const form = document.querySelector('.contact_form');
          if (form.classList.contains('close')) form.classList.remove('close')
          form.classList.add('open');

          const topFold = document.querySelector('.top_fold');
          if (topFold.classList.contains('close')) topFold.classList.remove('close');
          topFold.classList.add('open');

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
      </div>
      <div className="form_wrapper">
        <div className="contact_form">
          <div className="form_border"></div>
          <h1>Contact Me</h1>
          <form>
            <label></label>
            <input
              type="text"
              name="name"
              required
              maxLength="20"
              placeholder="Name"
              onInvalid={(e) => e.target.setCustomValidity('Please, leave your name')}
            />

            <label></label>
            <input
              type="email"
              name="email"
              required
              maxLength="30"
              placeholder="E-mail"
              onInvalid={(e) => e.target.setCustomValidity('Please, leave your e-mail')}
            />

            <label></label>
            <input
              type="text"
              name="subject"
              required
              maxLength="30"
              placeholder="Subject"
              onInvalid={(e) => e.target.setCustomValidity('Please, write a subject')}
            />

            <label></label>
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
              onInvalid={(e) => e.target.setCustomValidity('Please, leave me a message')}
            />
            <div className="char_count">0/240</div>

            <button type="submit">Send</button>
            <button type="button"
              onClick={() => {
                const letter= document.querySelector('.letter');
                letter.classList.remove('open');
                letter.classList.add('close');

                const form = document.querySelector('.contact_form');
                form.classList.remove('open');
                form.classList.add('close');

                const topFold = document.querySelector('.top_fold');
                topFold.classList.remove('open');
                topFold.classList.add('close');
              }}
            >Scrap</button>
          </form>
        </div>
      </div>
    </section>
  )
};

export default Contact;