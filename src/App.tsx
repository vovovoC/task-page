import { Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lazy } from 'react';

import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { TaskLayout } from './layout/TaskLayout';

const MainPage = lazy(() => import('./pages/MainPage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const TaskPage = lazy(() => import('./pages/TaskPage'));

const isAvailableLayout = window.localStorage.getItem('isAvailableLayout');

function PrivateRoute({ component, ...rest}: any) {
  const isAuthed = useSelector((state: any) => {
    return state.user['isAuth'];
  });
  return isAuthed ? component : <Navigate to="/login" />;
}

export default function Router() {
  return useRoutes([
    {
      path: '/tasks',
      element: <TaskLayout />,
      children: [
        { path: 'user', element: <UserPage /> },
        { path: 'tasks', element: <TaskPage /> },
        { path: 'layout', element: isAvailableLayout ? <MainPage /> :<NotFound/>  }
      ]
    },
    {
      path: '/',
      element: <Login />,
      children: [
        { path: '/', element: <Navigate to="/layout/main" /> },
        { path: 'login', element: <Login /> }
      ]
    },
    { path: '*', element: <NotFound /> }
  ]);
}

export { PrivateRoute };