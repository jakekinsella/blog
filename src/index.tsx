import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";

import './global-styles';

import * as Articles from './routes/articles';

import About from './routes/About';
import ShowArticles from './routes/ShowArticles';
import NotFound from './routes/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(
  Articles.All
    .map((article): RouteObject => ({ path: article.Path, element: <ShowArticles articles={[article]} /> }))
    .concat([
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/",
        element: <ShowArticles articles={Articles.All.slice(0, 3)} />,
        errorElement: <NotFound />
      },
    ])
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
