import { createRouter } from '@tanstack/react-router';

import { routes } from '../../../app/routes/routes';
import { rootRouter } from '../../../app/routes/__root';

export const router = createRouter({
  routeTree: rootRouter.addChildren(routes),
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
