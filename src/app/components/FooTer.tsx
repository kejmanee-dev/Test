"use client";
import React, { useState } from "react";
import "./Footer.css";

function FooTer() {
  const [footer, setFooter] = useState(false);
  return (
    <div className="footer-blog flex flex-row justify-center items-center">
      <div className="container">
        <footer className="flex justify-between items-center">
          <div className="flex flex-row">
            <div className="justify-start ">
              <ul className="footer-text">
                <li>ศูนย์เทคโนโลยีและการสื่อสาร สำนักงานปลัดกระทรวงมหาดไทย</li>
                <li>โทรศัพท์ 02 282 6560 ต่อ 50657 หรือ 50348</li>
                <li>E-mail moi0203.4@moi.go.th</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-row">
              <div className="justify-end">
                <img
                  className="banner-blog"
                  src="/banner.png"
                  alt="BANNER"
                ></img>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default FooTer;
