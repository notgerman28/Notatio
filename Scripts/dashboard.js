document.addEventListener('DOMContentLoaded', function () {
    const classesMenu = document.getElementById('classes-menu');
    const classesSubmenu = document.getElementById('classes-submenu');
    const dropdownIcon = classesMenu.querySelector('.dropdown-icon');

    classesMenu.addEventListener('click', function (e) {
        e.preventDefault();
        classesSubmenu.classList.toggle('active');
        dropdownIcon.textContent = classesSubmenu.classList.contains('active') ? '▲' : '▼';
    });
});

document.getElementById('searchBar').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const courses = document.querySelectorAll('.course-card');

    courses.forEach(function (course) {
        const courseTitle = course.querySelector('.course-header').textContent.toLowerCase();
        if (courseTitle.includes(searchQuery)) {
            course.classList.remove('hidden');
        } else {
            course.classList.add('hidden');
        }
    });
});