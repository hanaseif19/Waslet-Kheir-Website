import React from 'react';
import { Link } from 'react-router-dom';
import Notif from './Organization/Notif';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const Navbar = ({ className }) => {
  const messages = [

    "The courier has arrived to pick up your winter clothes for the donation to Misr El Kheir Foundation",
    "The courier has arrived to pick up your fresh food for the donation to Nour al Amal Orphanage",

  ];
  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <img src="https://i.ibb.co/7bQ6pjm/logo.png" alt="Waslet Kheir" className="logo-image" />
                    <p style={{color:'#2e5359'}}>Waslet Kheir</p>
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/donate" className="navbar-link">
              Donate
            </Link>
          </li>
          <li className="navbar-item">
            <Notif messages={messages} />
          </li>
          <li className="navbar-item">
            <Link to="/DonorProfile">
              {/* <Avatar size="large" icon={<UserOutlined />} /> */}
              <p>Hi </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;