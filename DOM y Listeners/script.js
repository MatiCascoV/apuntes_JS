// Selección de elementos del DOM
const miElemento = document.getElementById("mi-elemento");
const miClase = document.getElementsByClassName("mi-clase");
const misElementos = document.querySelectorAll(".mis-elementos");

// Manipulación del DOM
miElemento.textContent = "Nuevo contenido"; // Cambiar el texto
miElemento.style.color = "blue"; // Cambiar el color

// Event Listeners
miElemento.addEventListener("click", () => {
    alert("Haz hecho clic en el elemento");
});

// Funciones útiles

// Función para cargar un script dinámicamente
function cargarScript(url, callback) {
    const script = document.createElement("script");
    script.src = url;
    script.onload = callback;
    document.body.appendChild(script);
}

// Ejemplo de uso de la función cargarScript
cargarScript("mi-script.js", () => {
    // El script se ha cargado y ahora puedes usar sus funciones
    miFuncionDelScript();
});

// Función para hacer una solicitud a una API y procesar JSON
function cargarDatosDesdeAPI(url, callback) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Procesar los datos aquí
            callback(data);
        })
        .catch((error) => {
            console.error("Error al cargar datos:", error);
        });
}

// Ejemplo de uso de la función cargarDatosDesdeAPI
cargarDatosDesdeAPI("https://api.example.com/data", (datos) => {
    // Manipular y mostrar los datos en la página
    console.log(datos);
});

// Función para validar un formulario
function validarFormulario(formulario) {
    const nombre = formulario.nombre.value;
    const email = formulario.email.value;

    if (nombre === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return false; // Evitar que el formulario se envíe
    }

    // Otras validaciones aquí
    return true; // El formulario se enviará
}

// Ejemplo de uso en un formulario HTML
// <form onsubmit="return validarFormulario(this);">
