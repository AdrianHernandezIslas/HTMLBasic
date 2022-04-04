const clientHttp = (()=> {

    const _get = (url,fnExito,fnFallo) => {
        fetch(url).
        then((resp) => resp.json()).
        then(fnExito).catch(fnFallo);
    };

    return{
        get:_get

    };
})();