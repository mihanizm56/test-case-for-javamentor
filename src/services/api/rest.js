export const getRequest = ({ endpoint }) =>
  fetch(endpoint, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  });
