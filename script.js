document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login berhasil!');
    window.location.href = 'index.html';
});

document.getElementById('registerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pendaftaran berhasil!');
    window.location.href = 'login.html';
});

