import Link from 'next/link';
import Background from '../components/matter/Background.jsx';

const ThankYou = () => (
  <section>
    <div className="thankyou_items">
      <h1 className="thankyou_title">Thank You!</h1>
      <h3 className="title thankyou_note">I will get back to you ASAP</h3>
    </div>
    <Background />
  </section>
);

export default ThankYou;