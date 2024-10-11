function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    // Alternar la visibilidad de los formularios
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
}

function showRegisterFields() {
    const userType = document.getElementById('userType').value;
    const clientFields = document.getElementById('client-fields');
    const providerFields = document.getElementById('provider-fields');

    // Ocultar ambos campos primero
    clientFields.classList.add('hidden');
    providerFields.classList.add('hidden');

    // Mostrar campos según el tipo de usuario seleccionado
    if (userType === 'cliente') {
        clientFields.classList.remove('hidden');
    } else if (userType === 'proveedor') {
        providerFields.classList.remove('hidden');
    }
}

// Aquí puedes agregar la lógica para manejar el registro y el inicio de sesión
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para verificar el inicio de sesión
    alert('Iniciar sesión...');
});

document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para registrar al usuario
    alert('Registro exitoso!');
});