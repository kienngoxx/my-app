import { Layout } from 'antd';

const { Footer } = Layout;

const CustomFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2024 Created by You
    </Footer>
  );
};

export default CustomFooter;