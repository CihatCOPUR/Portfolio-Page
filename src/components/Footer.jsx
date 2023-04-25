import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <marquee>
        <div class="footer_container">
          <p>Cihat © 2020 All Rights Reserved.</p>
          //! boşluk bırakamadım--------------------------
          <p>{new Date().toLocaleString("tr-TR")}</p>
        </div>
      </marquee>
    </footer>
  );
};

export default Footer;
