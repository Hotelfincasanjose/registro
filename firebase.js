// Importar SDKs de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAmOE2v0IQUL80NV2OkzrlAeK_73u3BLU0",
  authDomain: "registro-hotel-deb85.firebaseapp.com",
  databaseURL: "https://registro-hotel-deb85-default-rtdb.firebaseio.com",
  projectId: "registro-hotel-deb85",
  storageBucket: "registro-hotel-deb85.appspot.com",
  messagingSenderId: "122625030325",
  appId: "1:122625030325:web:2c32f582ef1c29eb0126fc",
  measurementId: "G-1VD0GZQ5T2"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Realtime Database
const database = getDatabase(app);

// Función para enviar datos a Realtime Database
async function sendData() {
  const em = document.getElementById("id-type").value;
  const id = document.getElementById("numeroIdentificacion").value;
  const name = document.getElementById("nombres").value;
  const lastname = document.getElementById("apellidos").value;
  const email = document.getElementById("correo").value;
  const city = document.getElementById("ciudad").value;
  const room = document.getElementById("habitacion").value;
  const chekink = document.getElementById("fecha-ingreso").value;
  const checkout = document.getElementById("fechasalida").value;
  const country = document.getElementById("pais").value;
  const tel = document.getElementById("telefono").value;
  try {
    // Crear la referencia a la base de datos
    //const userRef = ref(database, "users");
    const userRef = ref(database, 'users/' + id);

    // Crear una nueva referencia para agregar un nuevo usuario
    const newUserRef = push(userRef);

    // Establecer los datos del nuevo usuario en Firebase
    await set(newUserRef, {
      id_type: em,
      id: id,
      name: name,
      lastname: lastname,
      email: email,
      city: city,
      room: room,
      checkin: chekink,
      checkout: checkout,
      country: country,
      phone: tel,
    });

    document.getElementById("status").innerText = "¡Datos enviados correctamente! Redirigiendo a Instagram...";

    // Redirigir a Instagram después de un breve retraso
    setTimeout(() => {
         window.location.href = "https://www.instagram.com/fincasanjosehb?igsh=dDczeWh0Z3I4eTB0"; // URL de Instagram
        }, 2000); // 2 segundos de espera antes de redirigir
  } catch (error) {
    console.error("Error al enviar datos:", error);
    document.getElementById("status").innerText = "Error al enviar datos. Ver consola.";
  }
}

// Hacer que la función sea accesible desde el archivo HTML
window.sendData = sendData;
