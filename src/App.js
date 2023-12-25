
import Hero from './Hero/Hero';
import Programs from './Programs/Programs';
import Reasons from './Reasons/Reasons';
import Plans from './Plans/Plans';
import Testimonials from './Testimonials/Testimonials';

import Footer from './Footer/Footer';


import './App.css';
import { Fragment } from 'react';



function App() {
 

  return (
    <Fragment>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Footer />
    </Fragment>
    
  );
}

export default App;
