// Navigation Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.has-dropdown');

    // Toggle dropdown on click
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');

        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Close other dropdowns
            dropdownItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current dropdown
            item.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.has-dropdown')) {
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});
