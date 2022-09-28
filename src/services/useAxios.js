import axios from "axios";

export function AxiosPost(link, payload = {}, extraHeaders = {}) {
  return axios.post(link, payload, {
    headers: {
      "content-type": "application/json",
      ...extraHeaders,
    },
  });
  // .then((res) => {
  //   console.log(res.data);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
}

export function AxiosGet(link, extraHeaders = {}) {
  return axios
    .get(link, {
      headers: {
        "content-type": "application/json",
        ...extraHeaders,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
}
