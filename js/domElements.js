const domElements = (() => {
  const $table = document.getElementById("tableData");
  const $tBody = $table.children[1];

  const _createRow = (id, name, descripcion) => {
    const $tr = document.createElement("tr");
    const $tdId = document.createElement("td");
    const $tdName = document.createElement("td");
    const $tdDescripcion = document.createElement("td");
    const $tdAcciones = document.createElement("td");

    const $buttonEdit = document.createElement("button");
    $buttonEdit.innerText = "edit";

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

  _createRow(1, "Cangrejo","Tacaño");
  _createRow(2, "Patricio","Divertido");
  _createRow(3, "Arenita","Fuerte");
})();
