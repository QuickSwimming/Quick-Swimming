document.addEventListener("DOMContentLoaded", function() {
    // Toggle dropdown menu visibility
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const menuToggleBody = document.getElementById("menu-toggle-body");
    const dropdownMenuBody = document.getElementById("dropdown-menu-body");

    menuToggle.addEventListener("click", function(e) {
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    menuToggleBody.addEventListener("click", function(e) {
        e.preventDefault();
        dropdownMenuBody.style.display = dropdownMenuBody.style.display === "block" ? "none" : "block";
    });

    // Hide dropdown menu when clicking outside
    document.addEventListener("click", function(e) {
        if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = "none";
        }
        if (!menuToggleBody.contains(e.target) && !dropdownMenuBody.contains(e.target)) {
            dropdownMenuBody.style.display = "none";
        }
    });
});