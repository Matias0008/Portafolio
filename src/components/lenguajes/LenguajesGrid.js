import React from "react";

export const LenguajesGrid = ({ id, title, url }) => {
  return (
    <div className="wrapper-item">
      <img src={url} alt={title} />
      <h2 className="item-title">{title}</h2>
    </div>
  );
};
