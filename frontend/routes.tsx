import { TodoView } from 'Frontend/views/TodoView.jsx';
import { lazy } from 'react';
import { createBrowserRouter, IndexRouteObject, NonIndexRouteObject, useMatches } from 'react-router-dom';

const router = createBrowserRouter([{ path: '/', element: <TodoView /> }]);
export default router;
