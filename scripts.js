// Ambil elemen-elemen yang diperlukan dari DOM
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// Tambahkan event listener untuk klik pada tombol menu
menuToggle.addEventListener('click', function() {
    // Toggle untuk menampilkan atau menyembunyikan dropdown menu
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});