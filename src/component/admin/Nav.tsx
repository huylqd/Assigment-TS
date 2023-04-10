import { Menu } from "antd";
import React from "react";
import { navitems } from "../../data/nav";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["DashBoard"]}>
      {navitems.map((item) => (
        <Menu.Item key={item.key}>
          {item.link ? (
            <Link to={item.href} className="text-decoration-none ">
              {item.label}
            </Link>
          ) : (
            item.label
          )}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Nav;