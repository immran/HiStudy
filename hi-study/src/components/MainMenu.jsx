import React, { useState } from "react";
import { AppstoreOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const items = [
  {
    label: "Home",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "Courses",
    key: "/courses",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Help",
    key: "/help",
  },
];

const MainMenu = () => {
  const [current, setCurrent] = useState("/");
  const navigate = useNavigate();

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <Layout>
      <Header className="main-menu">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Header>
    </Layout>
  );
};

export default MainMenu;
