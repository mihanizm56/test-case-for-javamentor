import { createSelector } from "reselect";

const langData = state => state.langData;

// export const getLangData = createSelector(
//   [langData],
//   ({ langData }) =>
//     console.log("/////", langData) || langData.length
//       ? langData.filter(item => item.logo)
//       : langData
// );

export const getLangData = createSelector(
  [langData],
  ({ langData }) => ({ langData: langData.filter(item => item.logo) })
);
