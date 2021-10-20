import React from "react";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";
import { dicoverMenu } from "./menu";
import "./style.less";
export default function Discover(props) {
  return (
    <div className="discover">
      <div className="topmenu">
        {dicoverMenu.map((item, index) => {
          return (
            <div className="item" key={index}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          );
        })}
      </div>
	  {renderRoutes(props.route.routes)}
    </div>
  );
}
