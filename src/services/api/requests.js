import { getRequest } from "./rest";
import { getLangEndpoint } from "./endpoints";

export const fetchLangRequest = langParam => {
  console.log("fetchLoginRequest goes");

  return getRequest({
    endpoint: `${getLangEndpoint}?group=${langParam}`
  });
};
