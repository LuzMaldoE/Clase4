// Se agrega el contenido de la logica, propia de javaScript

document.getElementById('dataForm').addEventListener('submit', function(event){
    event.preventDefault(); // Sirve para prevenir elk comportamiento por defecto del formulario
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const rut = document.getElementById('rut').value;
    const nacionalidad = document.querySelector('input[name="nac"]:checked').value; // En el caso que no se selecciona un id. En este punt el radio
    const dirreccion = document.getElementById('dir').value;
    const email = document.getElementById('email').value;

    const resultado = `
        Nombre: ${nombre}
        Apellido: ${apellido}
        Rut: ${rut}
        Nacionalidad: ${nacionalidad}
        Dirrección: ${dirreccion}
        Email: ${email}
    `;

    document.getElementById('result').textContent = resultado;
});