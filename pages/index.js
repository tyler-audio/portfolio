import Title from '../components/Title.jsx';
import Background from '../components/matter/Background.jsx';

const HomePage = () => {

  if (process.browser) {
    const pathname = window.location.pathname;
    pathname === '/' ? document.body.style.overflow = 'hidden' : null;
  }

  return (
    <section id="gif_section">
      {/* <div className="gif_container gif_left">
        <img className="img_gif" src="/media/vscode.gif"/>
      </div>
      <div className="gif_container vinyl_gif">
        <img className="img_gif" src="/media/vinyl.gif"/>
      </div>
      <div className="gif_container gif_right">
        <img className="img_gif" src="/media/ableton.gif"/>
      </div> */}
    </section>
  )
};

export default HomePage;