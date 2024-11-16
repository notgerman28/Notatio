document.addEventListener('DOMContentLoaded', function () {
    const classesMenu = document.getElementById('classes-menu');
    const classesSubmenu = document.getElementById('classes-submenu');
    const dropdownIcon = classesMenu.querySelector('.dropdown-icon');

    classesMenu.addEventListener('click', function (e) {
        e.preventDefault();
        classesSubmenu.classList.toggle('active');
        dropdownIcon.textContent = classesSubmenu.classList.contains('active') ? '▲' : '▼';
    });

    populateTable();
});

const students = [
    { id: 1, name: "John Smith", grades: [99, 99, 99, 99] },
    { id: 2, name: "Emma González", grades: [99, 99, 99, 99] },
    { id: 3, name: "Lucas Martínez", grades: [70, 70, 70, 70] },
    { id: 4, name: "Isabella Rivera", grades: [99, 99, 99, 99] },
    { id: 5, name: "Sofía Castillo", grades: [99, 99, 99, 99] },
    { id: 6, name: "Gabriel Torres", grades: [90, 0, 0, 0] },
    { id: 7, name: "Isabella Rivera", grades: [99, 99, 99, 99] },
    { id: 8, name: "Sofía Castillo", grades: [99, 99, 99, 99] },
    { id: 9, name: "Gabriel Torres", grades: [90, 0, 0, 0] },
    { id: 10, name: "Isabella Rivera", grades: [99, 99, 99, 99] },
    { id: 11, name: "Sofía Castillo", grades: [99, 99, 99, 99] },
    { id: 12, name: "Gabriel Torres", grades: [90, 0, 0, 0] },
    { id: 13, name: "Sofía Castillo", grades: [99, 99, 99, 99] },
    { id: 14, name: "Gabriel Torres", grades: [90, 0, 0, 0] },
    { id: 15, name: "Isabella Rivera", grades: [99, 99, 99, 99] },
    { id: 16, name: "Sofía Castillo", grades: [99, 99, 99, 99] },
    { id: 17, name: "Gabriel Torres", grades: [90, 0, 0, 0] },
];

function populateTable() {
    const tableBody = document.querySelector("#gradeTable tbody");
    tableBody.innerHTML = students.map(student => {
        const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
        const [status, statusClass] = average >= 90 ? ["Aprobado", "aprobado"] :
            average >= 70 ? ["Aprobado", "aprobado-warning"] :
                ["Reprobado", "reprobado"];
        return `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                ${student.grades.map(grade => `<td class="editable">${grade}</td>`).join('')}
                <td>${average.toFixed(2)}</td>
                <td><span class="${statusClass}">${status}</span></td>
            </tr>
        `;
    }).join('');

    tableBody.addEventListener('click', handleCellEdit);
}

function handleCellEdit(event) {
    const cell = event.target.closest('.editable');
    if (!cell || cell.querySelector('input')) return;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = cell.textContent;
    input.style.width = '15px';
    cell.textContent = '';
    cell.appendChild(input);
    input.focus();

    input.addEventListener('blur', () => updateCellValue(cell, input));
    input.addEventListener('keydown', event => {
        if (event.key === 'Enter') input.blur();
    });
}

function updateCellValue(cell, input) {
    const newValue = parseInt(input.value);
    const rowIndex = cell.parentElement.rowIndex - 1;
    const columnIndex = cell.cellIndex - 2;

    if (!isNaN(newValue) && newValue >= 0 && newValue <= 100) {
        students[rowIndex].grades[columnIndex] = newValue;
        populateTable();
    } else {
        cell.textContent = 'Invalido';
        setTimeout(() => {
            cell.textContent = students[rowIndex].grades[columnIndex];
        }, 1000);
    }
}

function exportToPDF() {
    // Obtener la tabla
    const table = document.getElementById('gradeTable');

    // Configuración para html2pdf
    const opt = {
        margin: 1,
        filename: 'tabla_calificaciones.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    };

    // Crear un elemento temporal que contiene solo la tabla
    const tempElement = document.createElement('div');
    tempElement.appendChild(table.cloneNode(true));

    // Añadir estilos inline para asegurar que se vean en el PDF
    const style = document.createElement('style');
    style.textContent = `
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #d1d5db; padding: 8px; text-align: center; }
        th { background-color: #f8f9fa; color: #1A628F; }
        .aprobado { background-color: #d7fcd7; color: #20a120; font-weight: bold; }
        .aprobado-warning { background-color: #fcf1a3; color: #e3ae6c; font-weight: bold; }
        .reprobado { background-color: #f9b0b0; color: #d76262; font-weight: bold; }
    `;
    tempElement.appendChild(style);

    // Generar y descargar el PDF
    html2pdf().from(tempElement).set(opt).save();
}

function exportToExcel() {
    // Obtener la tabla
    const table = document.getElementById('gradeTable');

    // Convertir la tabla HTML a una hoja de cálculo
    const ws = XLSX.utils.table_to_sheet(table);

    // Crear un libro de trabajo y añadir la hoja
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Calificaciones");

    // Generar el archivo XLSX
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    // Convertir el archivo a un Blob
    function s2ab(s) {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }

    // Crear el Blob y descargarlo
    const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
    saveAs(blob, "tabla_calificaciones.xlsx");
}