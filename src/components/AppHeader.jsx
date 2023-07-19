import { Layout } from 'antd';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const { Header } = Layout;

const navItems = [
   { name: 'Trang chủ', link: '/' },
   { name: 'Về chúng tôi', link: '/about' },
   { name: 'Khoá học STEM', link: '/course-stem' },
   { name: 'Khoá học', link: '/course' },
   { name: 'Mentor', link: '/mentor' },
   { name: 'Blog', link: '/blog' },
];

const AppHeader = ({ onToggleSidebar }) => {
   return (
      <Header className="header-layout position-fixed fixed-top">
         <div className="container d-flex justify-content-between align-items-center">
            <Link to="/" className="logo">
               <img src="logo192.png" alt="" />
            </Link>
            <div className="d-none d-md-block">
               {navItems.map(({ name, link }) => (
                  <NavLink
                     to={link}
                     key={link}
                     className={({ isActive }) =>
                        isActive ? 'mx-2 nav-item active' : 'mx-2 nav-item'
                     }
                  >
                     {name}
                  </NavLink>
               ))}
            </div>
            <div className="cart d-none d-md-block" counter={0}>
               <img src="/images/icon-shopping-cart.jpg" alt="" />
            </div>
            <div className="d-block d-md-none">
               <button className="btn" onClick={onToggleSidebar}>
                  <GiHamburgerMenu />
               </button>
            </div>
         </div>
      </Header>
   );
};

export default AppHeader;
