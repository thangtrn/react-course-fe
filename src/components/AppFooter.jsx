import React from 'react';
import { Layout } from 'antd';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { TfiYoutube } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const { Footer } = Layout;

const AppFooter = () => {
   return (
      <Footer className="footer">
         <div className="container">
            <div className="row">
               <div className="col-md-4 mb-3">
                  <p className="logo">
                     <img src="logo192.png" alt="" />
                  </p>
                  <p>
                     Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện
                     các kỹ năng lập trình của bạn. Tất cả các mentor của chúng
                     tôi đều có nhiều kinh nghiệm trong thực tế và giảng day.
                  </p>
                  <div>
                     <span className="social-title">
                        Theo dõi chúng tôi tại:
                     </span>
                     <div>
                        <BiLogoFacebook className="social-icon" />
                        <BiLogoLinkedin className="social-icon" />
                        <TfiYoutube className="social-icon" />
                     </div>
                  </div>
               </div>
               <div className="col-md-2 mb-3">
                  <div>
                     <span className="link-title">Menu</span>
                  </div>
                  <div className="link-list">
                     <Link to="/">Trang chủ</Link>
                     <Link to="/">Trang chủ</Link>
                     <Link to="/">Trang chủ</Link>
                     <Link to="/">Trang chủ</Link>
                     <Link to="/">Trang chủ</Link>
                     <Link to="/">Trang chủ</Link>
                     <Link to="/">Trang chủ</Link>
                  </div>
               </div>
               <div className="col-md-2 mb-3">
                  <div className="mb-3">
                     <div>
                        <span className="link-title">Menu</span>
                     </div>
                     <div className="link-list">
                        <Link to="/">Trang chủ</Link>
                        <Link to="/">Trang chủ</Link>
                     </div>
                  </div>
                  <div>
                     <div>
                        <span className="link-title">Menu</span>
                     </div>
                     <div className="link-list">
                        <Link to="/">Trang chủ</Link>
                        <Link to="/">Trang chủ</Link>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 mb-3">
                  <div>
                     <span className="link-title">Liên hệ với chúng tôi</span>
                  </div>
                  <div className="link-list contact">
                     <Link to="/" className="contact-link">
                        <img
                           src="images/icon-location.png"
                           alt=""
                           className="contact-icon"
                        />
                        S9A3 Q9
                     </Link>
                     <Link to="/" className="contact-link">
                        <img
                           src="images/icon-gmail.png"
                           alt=""
                           className="contact-icon"
                        />
                        Amazing@gmail.com
                     </Link>
                     <Link to="/" className="contact-link">
                        <img
                           src="images/icon-phone.png"
                           alt=""
                           className="contact-icon"
                        />
                        090909090
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <hr style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }} />
         <div className="d-flex justify-content-center">
            <span>© 2023 Amazing Tech. All Rights Reserved.</span>
         </div>
      </Footer>
   );
};

export default AppFooter;
