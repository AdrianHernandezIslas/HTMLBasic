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
    domElements.createRow(id,name,description);
  };
  
  $button.addEventListener("click",fnCallbackClick);


  const fnExito = (response) => {
    for (let index = 0; index < response.length; index++) {
        const id = response[index]['id'];
        const name = response[index]['name'];
        domElements.createRow(id,name,'');
      
    }
  };

  const fnFallo = () => {

  };

  clientHttp.get("https://jsonplaceholder.typicode.com/users",fnExito,fnFallo);

  //$divRoot.appendChild($button);

})();