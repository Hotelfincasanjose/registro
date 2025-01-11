
function updateSelect() {
    var select = document.getElementById("id-type");
    var selectedOption = select.options[select.selectedIndex];
    var selectedValue = selectedOption.value; // Esta es la abreviatura seleccionada

    // Actualizamos el texto mostrado solo con la abreviatura
    select.options[select.selectedIndex].innerText = selectedValue;
}

function updateSelect2() {
    var select = document.getElementById("pais");
    var selectedOption = select.options[select.selectedIndex];
    var selectedValue = selectedOption.value; // Esta es la abreviatura seleccionada

    // Actualizamos el texto mostrado solo con la abreviatura
    select.options[select.selectedIndex].innerText = selectedValue;
}

