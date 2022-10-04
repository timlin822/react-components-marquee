import IconMarquee from 'components/marquee/IconMarquee';
import BrandMarquee from 'components/marquee/BrandMarquee';

import './App.css';

function App() {
  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <IconMarquee />
        <BrandMarquee />
      </div>
    </section>
  );
}

export default App;