// Función asincrónica que simula una solicitud a una API
async function obtenerDatosDeAPI() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error al obtener datos de la API: ' + error.message);
    }
}

// Llamada a la función asincrónica
async function mostrarDatos() {
    try {
        const datos = await obtenerDatosDeAPI();
        console.log('Datos obtenidos de la API:', datos);
    } catch (error) {
        console.error(error.message);
    }
}

// Llamar a la función que muestra los datos
mostrarDatos();
