const domMain = (() => {
  //const $divRoot = document.getElementById("root");
  const $button = document.getElementById("guardar");
  const $inputId = document.getElementById("id");
  const $inputName = document.getElementById("nombre");
  const $inputDescription = document.getElementById("descripcion");
  
  //$button.innerText = "Soy un nuevo boton";

  const fnCallbackClick = (target) => {
    const id = $inputId.value;
    const name = $inputName.value;
    const description = $inputDescription.value;
    clientHttp.post("https://dsos-test.herokuapp.com/api/compras/comprar/",{
      costoTotal: id ,
      idCliente:name ,
      idProducto:description
      },fnExito,fnFallo);
  };
  
  $button.addEventListener("click",fnCallbackClick);


  const fnExito = (response) => {
    const httpResponse = response.httpCode;
    if(httpResponse >= 200 && httpResponse <= 299){
      const id = $inputId.value;
      const name = $inputName.value;
      const description = $inputDescription.value;
      domElements.createRow(id,name,description);
    }else{
      alert(response);
    }
  };

  const fnFallo = (err) => {
    console.error(err);
  };

  //clientHttp.get("http://localhost:8080/api/v1/cuenta",fnExito,fnFallo);
  /*clientHttp.post("https://dsos-test.herokuapp.com/api/compras/comprar/",{
    costoTotal: 34 ,
    idCliente:1 ,
    idProducto:1
    },fnExito,fnFallo);*/

  //$divRoot.appendChild($button);

})();