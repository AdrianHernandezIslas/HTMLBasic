const domElements = (() => {
  const $table = document.getElementById("tableData");
  const $tBody = $table.children[1];

  const _createRow = (id, name, descripcion) => {
    const $tr = document.createElement("tr");
    const $tdId = document.createElement("td");
    const $tdName = document.createElement("td");
    const $tdDescripcion = document.createElement("td");
    const $tdAcciones = document.createElement("td");
    const $buttonEdit = _createButton();
   
    $tdId.innerText = id;
    $tdName.innerText = name;
    $tdDescripcion.innerText = descripcion;
    $tdAcciones.appendChild($buttonEdit);

    $tr.appendChild($tdId);
    $tr.appendChild($tdName);
    $tr.appendChild($tdDescripcion);
    $tr.appendChild($tdAcciones);
    $tBody.appendChild($tr);
  };

  const _createButton = () => {
    const $buttonEdit = document.createElement("button");
    $buttonEdit.innerText = "edit";

    $buttonEdit.addEventListener("click",(event) => {
      const $tdParent = event.target.parentElement;
      const $trParent = $tdParent.parentElement;

      const $inputId = document.getElementById("id");
      $inputId.value = $trParent.children[0].innerText;
      //$tBody.removeChild($trParent);
    });
    return $buttonEdit;
  }

 return{
  createRow:_createRow
 }
})();