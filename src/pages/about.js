import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>Currently a Team Lead for 6 developers working on the <a href="https://keyconservation.org">Key Conservation</a> project for our Labs section of Lambda School. I am also a student working on finishing my Computer Science studies and I dabble in freelance web design on the side.</p>
    
    <p>Originally from Prescott Valley, Arizona but found my home in Atlanta, Georgia. Movement and metal keeps me sane. I have a handsome dog named Kilo. </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default About;
