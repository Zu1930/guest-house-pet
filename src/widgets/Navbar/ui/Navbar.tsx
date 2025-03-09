import { Link } from '@tanstack/react-router';
import { Layout as LayoutAntd, Menu, MenuProps, Typography } from 'antd';
const { Header } = LayoutAntd;
const { Title } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

// TODO: внести отсюда
const items: MenuItem[] = [
  {
    label: <Link to='/'>Главная</Link>,
    key: 'home',
  },
  {
    label: <Link to='/rooms'>Номера и цены</Link>,
    key: 'rooms',
  },
  {
    label: <Link to='/papers'>Статьи</Link>,
    key: 'papers',
  },
  {
    label: <Link to='/information'>Информация</Link>,
    key: 'information',
  },
  {
    label: <Link to='/guesthouse'>Полный пансион</Link>,
    key: 'guesthouse',
  },
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
    <Typography style={{ width: '166px' }}>
      <Title level={3}>Valentina Guest House</Title>
    </Typography>
    <Menu
      theme='light'
      mode='horizontal'
      items={items}
      defaultSelectedKeys={['home']}
      style={{ flex: 1, minWidth: 0, width: '1260px', margin: '0 auto' }}
    />
  </Header>
);
