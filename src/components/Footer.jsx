import React from "react";
import "./Footer.css";
import GooglePlay from "../assets/img/logo_playstore.png";
import AppStore from "../assets/img/logo_appstore.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-company-name">CÔNG TY TNHH JOLLIBEE VIỆT NAM</p>
        <p className="footer-address">
          Địa chỉ: Tầng 26, Tòa nhà CII Tower, số 152 Điện Biên Phủ, Phường 25,
          Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam
        </p>
        <p className="footer-phone">Điện thoại: (028) 39309168</p>
        <p className="footer-hotline">Tổng đài: 1900-1533</p>
        <p className="footer-tax">Mã số thuế: 0303883266</p>
        <p className="footer-date">
          Ngày cấp: 15/07/2008 – Nơi cấp: Cục Thuế Hồ Chí Minh
        </p>
        <p className="footer-email">
          Hộp thư góp ý: jbvfeedback@jollibee.com.vn
        </p>
      </div>
      <div className="footer-center">
        <h3 className="footer-hotline-number">1900-1533</h3>
        <button className="footer-order-button">GIAO HÀNG TẬN NƠI</button>
      </div>
      <div className="footer-right">
        <h4>HÃY KẾT NỐI VỚI CHÚNG TÔI</h4>
        <p>
          <a className="link" href="https://facebook.com">
            Facebook
          </a>
        </p>
        <p>
          <a className="link" href="mailto:email@example.com">
            E-Mail
          </a>
        </p>

        <h4>TẢI ỨNG DỤNG ĐẶT HÀNG VỚI NHIỀU ƯU ĐÃI HƠN</h4>
        <div className="footer-app-links">
          <a className="link" href="https://play.google.com/store">
            <img src={GooglePlay} alt="Google Play" />
          </a>
          <a className="link" href="https://www.apple.com/app-store/">
            <img src={AppStore} alt="App Store" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
