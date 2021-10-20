import React from "react";
import { footerLinks, footerImages } from "./data";
import "./style.less";
export default function Footer() {
  return (
    <div className="music_footer">
      <div className="footer_left">
        {footerLinks.map((item, index) => {
          return (
            <a className="footer_item" key={index} href={item.link}>
              {item.title}
            </a>
          );
        })}
        <div>
          <span>网易公司版权所有©1997-2021</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a href="#/">浙网文[2021] 1186-054号</a>
          <br />
          <span>
            违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com
          </span>
        </div>
      </div>
      <div className="footer_right">
        {footerImages.map((item, index) => {
          return (
            <li className="item" key={index}>
              <a
                className="link"
                href={item.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
              </a>
              <span className="title">{item.title}</span>
            </li>
          );
        })}
      </div>
    </div>
  );
}
