import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';

import { HomePage } from './pages/HomePage/HomePage';
import { LookBookPage } from './pages/LookBookPage/LookBookPage';
import { DeliveringPage } from './pages/DeliveringPage/DeliveringPage';
import { Page404 } from './pages/Page404/Page404';

export const Root: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />}
      >
        <Route
          index
          element={<HomePage />}
        />

        <Route
          path="home"
          element={<Navigate to="/" replace />}
        />

        <Route
          path="lookBook"
          element={<LookBookPage />}
        />

        <Route
          path="delivering"
          element={<DeliveringPage />}
        />

        <Route
          path="*"
          element={<Page404 />}
        />
      </Route>
    </Routes>
  );
};
