import { createRoute } from '@tanstack/react-router';

import { rootRouter } from './__root';

import { MainPage } from 'page/MainPage';
import { RoomsPage } from 'page/RoomsPage/ui/RoomsPage';

const mainRoute = createRoute({
  getParentRoute: () => rootRouter,
  path: '/',
  component: MainPage,
});

const roomsRoute = createRoute({
  getParentRoute: () => rootRouter,
  path: '/rooms',
  component: RoomsPage,
});

export const routes = [mainRoute, roomsRoute];
