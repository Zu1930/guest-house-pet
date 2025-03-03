import { FC, ReactNode } from 'react';
import { Layout as LayoutAntd } from 'antd';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <LayoutAntd style={{ minHeight: '100vh', minWidth: '100vw' }}>
    {children}
  </LayoutAntd>
);
