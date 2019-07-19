import React, { memo } from "react";
import { LangCard } from "../lang-card";
import "./lang-list.css";

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

LangList.defaultProps = { listData: [] };
