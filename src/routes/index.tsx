import { Redirect, Router } from '@reach/router';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { HomePage } from '../pages';

const AppRouter: React.FC = () => (
  <Fade triggerOnce>
    <Router>
      <HomePage path="/" />
      <Redirect from="*" to="/" />
    </Router>
  </Fade>
);

export default AppRouter;
