import React, { memo } from "react";
import "./lang-card.css";

export const LangList = memo(({ listData }) =>
  listData.map(({ title, createdAt, numberOfProjects, link }) => (
    <LangCard
      title={title}
      createdAt={createdAt}
      numberOfProjects={numberOfProjects}
      link={link}
    />
  ))
);
