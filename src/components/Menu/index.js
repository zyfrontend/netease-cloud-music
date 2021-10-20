import React from "react";
import "./style.less";
export default function Menu(props) {
  const { title, item, more } = props;
  return (
    <div className="menu">
      <div className="menu_content">
        <span className="sprite_02 title_item"></span>
        <div className="menu_title">{title}</div>
        <div className="menu_item">
          {item
            ? item.map((items, index) => {
                return <div key={items} className="menu_item_items">{items}</div>;
              })
            : null}
        </div>
        <div className="menu_more">
          {more}
          <span className="sprite_02 more_item"></span>
        </div>
      </div>
      <div className="menu_border"></div>
    </div>
  );
}
