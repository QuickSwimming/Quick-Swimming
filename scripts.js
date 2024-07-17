document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const searchIcon = document.querySelector('.search-icon');
    
    // Toggle dropdown menu
    menuToggle.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Example search functionality
    searchIcon.addEventListener('click', function() {
        alert('Fitur pencarian belum diimplementasikan.');
    });
});