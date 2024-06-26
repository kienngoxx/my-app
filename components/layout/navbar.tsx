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
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[current]} onClick={handleClick}>
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