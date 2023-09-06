try {
    // Código que podría generar un error
    throw new Error("Este es un error personalizado");
} catch (error) {
    console.log("Se produjo un error:", error.message);
}
