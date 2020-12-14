import { Router } from '@reach/router';
import React from 'react';
import { CountryDetailPage, HomePage } from '../pages';

const AppRouter: React.FC = () => (
  <Router>
    <HomePage path="/" />
    <CountryDetailPage path="detail" />
  </Router>
);

export default AppRouter;
