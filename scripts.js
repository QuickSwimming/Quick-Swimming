document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const bodyMenuToggle = document.getElementById('menu-toggle-body');
    const dropdownMenuBody = document.getElementById('dropdown-menu-body');

    // Pastikan menu disembunyikan saat halaman dimuat
    dropdownMenu.style.display = 'none';
    dropdownMenuBody.style.display = 'none';

    menuToggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    bodyMenuToggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownMenuBody.style.display = dropdownMenuBody.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (e) {
        if (!dropdownMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
        if (!dropdownMenuBody.contains(e.target) && !bodyMenuToggle.contains(e.target)) {
            dropdownMenuBody.style.display = 'none';
        }
    });
});