import { Outlet } from '@tanstack/react-router';
import { Layout as LayoutAntd, theme } from 'antd';

import { Layout } from 'shared/ui/Layout';
import { Navbar } from 'widgets/Navbar/ui/Navbar';

const { Content, Footer } = LayoutAntd;

export const CommonLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Navbar />
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
