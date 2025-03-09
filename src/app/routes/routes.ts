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

const papersRoute = createRoute({
  getParentRoute: () => rootRouter,
  path: '/papers',
});

const informationRoute = createRoute({
  getParentRoute: () => rootRouter,
  path: '/information',
});

const guesthouseRoute = createRoute({
  getParentRoute: () => rootRouter,
  path: '/guesthouse',
});

export const routes = [
  mainRoute,
  roomsRoute,
  papersRoute,
  informationRoute,
  guesthouseRoute,
];
