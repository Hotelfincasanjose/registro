
  const firebaseConfig = {
    apiKey: "AIzaSyADLDTb3BiUVnJ94h_xqM-EPx_MsIAr7cI",
    authDomain: "contacto-17311.firebaseapp.com",
    databaseURL: "https://contacto-17311-default-rtdb.firebaseio.com",
    projectId: "contacto-17311",
    storageBucket: "contacto-17311.firebasestorage.app",
    messagingSenderId: "427448141649",
    appId: "1:427448141649:web:97eecaefb08a941e2cf570"
  };
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);
 
  // Función que se ejecutará al enviar el formulario
  function sendToFirestore(event) {
    event.preventDefault(); // Evita que el formulario se recargue

    // Obtén los valores de los campos del formulario
    const idType = document.getElementById('id-type').value;
    const number = document.getElementById('numeroIdentificacion').value;
    const firstName = document.getElementById('nombres').value;
    const lastName = document.getElementById('apellidos').value;
    const city = document.getElementById('ciudad').value;
    const entryDate = document.getElementById('fechaIngreso').value;
    const departureDate = document.getElementById('fechaSalida').value;
    const room = document.getElementById('habitacion').value;
    const email = document.getElementById('correo').value;
    const phoneCode = document.getElementById('pais').value;
    const phoneNumber = document.getElementById('telefono').value;

    // Crear un objeto con los datos
    const userData = {
        idType,
        nnumeroIdentificacion,
        nombres,
        apellidos,
        ciudad,
        fechaIngreso,
        fechaSalida,
        habitacion,
        correo,
        pais,
        telefono,
    };
    // Guardar los datos en Firestore
    db.collection("users").add(userData)
    .then((docRef) => {
        console.log("Documento escrito con ID: ", docRef.id);
        alert("¡Datos enviados correctamente!");
    })
    .catch((error) => {
        console.error("Error al agregar el documento: ", error);
        alert("Hubo un error al enviar los datos.");
    });
 }
 document.querySelector('form').addEventListener('submit', sendToFirestore);

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

