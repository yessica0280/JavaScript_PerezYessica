document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultCount = document.getElementById('result-count');

    let allData = [];

    // Función para obtener datos del API
    const fetchData = async () => {
        try {
            const response = await fetch('https://www.datos.gov.co/resource/uqfr-drs5.json');
            const data = await response.json();
            allData = data;
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            dataContainer.innerHTML = '<p>Ocurrió un error al cargar los datos.</p>';
        }
    };

    // Función para mostrar los datos filtrados en el DOM
    const displayData = (filteredData) => {
        dataContainer.innerHTML = ''; 
        if (filteredData.length > 0) {
            filteredData.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('item');
                itemElement.innerHTML = `
                    <p><strong>Año:</strong> ${item.a_o}</p>
                    <p><strong>Mes:</strong> ${item.mes}</p>
                    <p><strong>Código Municipio:</strong> ${item.cod_municipio}</p>
                    <p><strong>Edad:</strong> ${item.edad}</p>
                    <p><strong>Género:</strong> ${item.genero}</p>
                    <p><strong>Zona:</strong> ${item.zona}</p>
                    <p><strong>Discapacidad:</strong> ${item.discapacidad}</p>
                `;
                dataContainer.appendChild(itemElement);
            });
        } else {
            dataContainer.innerHTML = '<p>No se encontraron resultados.</p>';
        }
    };

    // Función para mostrar la cantidad de resultados encontrados
    const displayResultCount = (count) => {
        resultCount.textContent = `Se encontraron ${count} resultados.`;
    };

    // Filtrar los datos por año
    const filterDataByYear = (year) => {
        return allData.filter(item => item.a_o && item.a_o === year);
    };

    // Manejar el envío del formulario
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const year = searchInput.value.trim();
        const filteredData = filterDataByYear(year); 
        displayResultCount(filteredData.length);
        displayData(filteredData); 
    });
    fetchData();
});
