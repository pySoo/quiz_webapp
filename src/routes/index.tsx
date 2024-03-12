import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LayoutPage from '@/pages/LayoutPage/LayoutPage';

import { PATH } from './path';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const QuizPage = lazy(() => import('../pages/QuizPage/QuizPage'));
const QuizResultPage = lazy(
  () => import('../pages/QuizResultPage/QuizResultPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <LayoutPage />,
    children: [
      {
        path: PATH.ROOT,
        element: <MainPage />,
      },
      {
        path: `/quiz/:id`,
        element: <QuizPage />,
      },
      {
        path: `${PATH.QUIZ_RESULT}`,
        element: <QuizResultPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
