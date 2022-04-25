const clientHttp = (() => {
  const _get = (url, fnExito, fnFallo) => {
    fetch(url)
      .then((resp) => resp.json())
      .then(fnExito)
      .catch(fnFallo);
  };
  //Llamadas -> Asincronas
  const _post = (url, payload, fnExito, fnFallo) => {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((resp) => resp.json())
      .then(fnExito)
      .catch(fnFallo);
  };

  const _postAsync = async (url, payload) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseJSON = await response.json();

    return responseJSON;
  };

  return {
    get: _get,
    post: _post,
    postAsync:_postAsync
  };
})();
