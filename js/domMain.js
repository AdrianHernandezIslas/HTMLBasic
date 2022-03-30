const domMain = (() => {
  const $divRoot = document.getElementById("root");
  const $button = document.createElement("button");
  
  $button.innerText = "Soy un nuevo boton";

  const fnCallbackClick = (target) => {
    const $inputText = document.createElement("input");
    $divRoot.appendChild($inputText);
  };
  
  $button.addEventListener("click",fnCallbackClick);

  //$divRoot.appendChild($button);

})();
