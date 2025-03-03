import { Link } from '@tanstack/react-router';
import { Layout as LayoutAntd, Menu, MenuProps } from 'antd';
const { Header } = LayoutAntd;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link to='/'>Главная</Link>,
    key: 'home',
  },
  {
    label: <Link to='/rooms'>Номера и цены</Link>,
    key: 'rooms',
  },
  //   {
  //     label: <Link to='/information'>Информация</Link>,
  //     key: 'information',
  //   },
];

export const Navbar = () => (
  <Header
    style={{
      position: 'sticky',
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      height: '120px',
      boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.25)',
      zIndex: 1,
    }}
  >
    <Menu
      theme='light'
      mode='horizontal'
      items={items}
      defaultSelectedKeys={['home']}
      style={{ flex: 1, minWidth: 0, width: '1260px', margin: '0 auto' }}
    />
  </Header>
);
