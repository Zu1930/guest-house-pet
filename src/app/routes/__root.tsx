import { createRootRoute } from '@tanstack/react-router';
import { CommonLayout } from 'widgets/CommonLayout';

export const rootRouter = createRootRoute({
  component: CommonLayout,
});
