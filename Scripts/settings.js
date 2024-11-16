document.addEventListener('DOMContentLoaded', function () {
    const classesMenu = document.getElementById('classes-menu');
    const classesSubmenu = document.getElementById('classes-submenu');
    const dropdownIcon = classesMenu.querySelector('.dropdown-icon');
    const darkModeToggle = document.getElementById('dark-mode');
    const body = document.getElementById('main-body');
    const languageSelect = document.getElementById("language");
    const newPasswordInput = document.getElementById("new-password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const timezoneSelect = document.getElementById("timezone");
    const newUsernameInput = document.getElementById("new-username");
    const resetConfigButton = document.getElementById("reset-config");

    // Función pa la notificaciones
    function showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `notification ${type}`;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // menú desplegable de clases
    classesMenu.addEventListener('click', function (e) {
        e.preventDefault();
        classesSubmenu.classList.toggle('active');
        dropdownIcon.textContent = classesSubmenu.classList.contains('active') ? '▲' : '▼';
    });

    // Modo oscuro
    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }

    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
        darkModeToggle.checked = true;
    } else {
        disableDarkMode();
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    // Función para cargar valores desde localStorage
    function loadFromLocalStorage(key, element) {
        const value = localStorage.getItem(key);
        if (value) {
            if (element.type === 'checkbox') {
                element.checked = value === 'true';
            } else {
                element.value = value;
            }
        }
    }

    // Función para guardar valores en localStorage
    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }

    // Cargar valores guardados
    loadFromLocalStorage("selectedLanguage", languageSelect);
    loadFromLocalStorage("newPassword", newPasswordInput);
    loadFromLocalStorage("confirmPassword", confirmPasswordInput);
    loadFromLocalStorage("selectedTimezone", timezoneSelect);
    loadFromLocalStorage("newUsername", newUsernameInput);

    // Guardar valores al cambiar
    languageSelect.addEventListener("change", () => {
        saveToLocalStorage("selectedLanguage", languageSelect.value);
        showNotification("Idioma guardado: " + languageSelect.value, "success");
    });

    timezoneSelect.addEventListener("change", () => {
        saveToLocalStorage("selectedTimezone", timezoneSelect.value);
        showNotification("Zona horaria guardada: " + timezoneSelect.value, "success");
    });

    newUsernameInput.addEventListener("change", () => {
        saveToLocalStorage("newUsername", newUsernameInput.value);
        showNotification("Nombre de usuario guardado", "success");
    });

    // Validación de contraseñas
    let passwordValidationTimeout;

    function validatePasswords() {
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (newPassword && confirmPassword && newPassword !== confirmPassword) {
            showNotification("Las contraseñas no coinciden", "error");
            return false;
        }
        return true;
    }

    function handlePasswordInput() {
        clearTimeout(passwordValidationTimeout);
        passwordValidationTimeout = setTimeout(() => {
            if (validatePasswords()) {
                saveToLocalStorage("newPassword", newPasswordInput.value);
                saveToLocalStorage("confirmPassword", confirmPasswordInput.value);
                showNotification("Contraseña guardada", "success");
            }
        }, 1000);
    }

    newPasswordInput.addEventListener("input", handlePasswordInput);
    confirmPasswordInput.addEventListener("input", handlePasswordInput);

    // Restablecer configuración
    resetConfigButton.addEventListener("click", () => {
        localStorage.clear();
        darkModeToggle.checked = false;
        disableDarkMode();
        languageSelect.value = "Español Latino";
        timezoneSelect.value = "GMT-04 RD";
        newPasswordInput.value = "";
        confirmPasswordInput.value = "";
        newUsernameInput.value = "";
        showNotification("Configuración restablecida", "success");
    });
});