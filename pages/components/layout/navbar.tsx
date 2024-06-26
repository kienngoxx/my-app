import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState<string>('home');

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <Header>
      <div className="logo" style={{ width: 120, height: 31, background: 'rgba(255, 255, 255, 0.2)', margin: '16px 28px 16px 0', float: 'left' }} />
      <Menu theme="dark" mode="horizontal" selectedKeys={[current]} onClick={handleClick} style={{ lineHeight: '64px' }}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          <Link href="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          <Link href="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;