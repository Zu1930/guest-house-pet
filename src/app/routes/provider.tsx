import { RouterProvider } from '@tanstack/react-router';
import { router } from '../../shared/config/routeConfig/config';

export const RoutingProvider = () => {
  return <RouterProvider router={router} />;
};
