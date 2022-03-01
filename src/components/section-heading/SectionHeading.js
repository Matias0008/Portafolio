import React from "react";
import "./SectionHeading.css";

export const SectionHeading = ({ title }) => {
  return (
    <h2 className="section-heading" data-outline={title}>
      {title}
    </h2>
  );
};
