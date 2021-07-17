import params from "./params";

export default {
  get: (url = '', _params = {}) => {
    const newUrl = params.setParams(url, _params);

    return fetch(newUrl)
      .then(async (res) => {
        if(!res.ok) throw Error()
        const data = await res.json()
        return data
      })
  },
};
