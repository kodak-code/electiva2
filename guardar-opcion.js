// Mostrar mensaje de éxito
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}

// Aplicar tamaño de fuente
function applyFontSize(fontSize) {
    document.body.style.fontSize = fontSize === 'small' ? '0.8rem' : fontSize === 'large' ? '1.2rem' : '1rem';
}

// Aplicar configuración de contraste
function applyContrast(contrast) {
    document.body.className = contrast; // Asegúrate de que tengas estilos CSS para cada clase
}

// Guardar configuración de Tamaño de Fuente
function saveFontSize() {
    const fontSize = document.getElementById('fontSizeSelect').value; // Obtener el valor seleccionado
    localStorage.setItem('fontSizeConfig', JSON.stringify({ selected: fontSize })); // Guardar en localStorage
    applyFontSize(fontSize); // Aplicar el tamaño de fuente
    console.log('Tamaño de fuente guardado:', { selected: fontSize }); // Mostrar en consola
    showSuccessMessage(); // Mostrar mensaje de éxito
}


// Guardar configuración de Contraste
function saveContrast() {
    const contrastOptions = document.getElementsByName('contrastOptions'); // Obtener todas las opciones de contraste
    let selectedContrast;

    for (let option of contrastOptions) {
        if (option.checked) {
            selectedContrast = option.value; // Guarda el valor seleccionado
            break; // Salir del bucle una vez que se encuentra una opción seleccionada
        }
    }

    if (selectedContrast) {
        localStorage.setItem('contrastConfig', JSON.stringify({ selected: selectedContrast })); // Guardar en localStorage
        applyContrast(selectedContrast); // Aplicar el contraste seleccionado
        console.log('Configuración de contraste guardada:', { selected: selectedContrast }); // Mostrar en consola
        showSuccessMessage(); // Mostrar mensaje de éxito
    } else {
        console.warn('No se seleccionó ninguna opción de contraste.'); // Advertencia si no hay selección
    }
}


function applyContrast(contrast) {
    document.body.className = contrast; // Asegúrate de tener clases CSS correspondientes
}
// Guardar configuración de Narrador
function saveNarratorSettings() {
    const voiceSpeed = document.getElementById('voiceSpeed').value; // Obtener la velocidad de voz
    const voiceVolume = document.getElementById('voiceVolume').value; // Obtener el volumen
    const enableNarrator = document.getElementById('enableNarrator').checked; // Verificar si el narrador está habilitado

    const narratorSettings = {
        voiceSpeed: parseFloat(voiceSpeed), // Convertir a número
        voiceVolume: parseFloat(voiceVolume), // Convertir a número
        enableNarrator: enableNarrator // Booleano
    };

    localStorage.setItem('narratorConfig', JSON.stringify(narratorSettings)); // Guardar en localStorage
    console.log('Configuración del narrador guardada:', narratorSettings); // Mostrar en consola
    showSuccessMessage(); // Mostrar mensaje de éxito
}


// Cargar configuraciones desde localStorage al cargar la página
function loadSettings() {
    // Cargar configuraciones desde JSON
    fetch('settings.json')
        .then(response => response.json())
        .then(config => {
            console.log('Configuración cargada desde settings.json:', config); // Mostrar la configuración en consola

            // Cargar configuración de Tamaño de Fuente
            const fontSizeConfig = JSON.parse(localStorage.getItem('fontSizeConfig'))?.selected || config.fontSize; // Usar localStorage o el valor por defecto
            document.getElementById('fontSizeSelect').value = fontSizeConfig; // Establecer el valor en el select
            applyFontSize(fontSizeConfig); // Aplicar el tamaño de fuente

            // Cargar configuración de Contraste
            const contrastConfig = JSON.parse(localStorage.getItem('contrastConfig'))?.selected || config.contrast.selected; // Usar localStorage o el valor por defecto
            const contrastOptions = document.getElementsByName('contrastOptions');
            for (let option of contrastOptions) {
                if (option.value === contrastConfig) {
                    option.checked = true; // Marca la opción seleccionada
                    applyContrast(contrastConfig); // Aplica el contraste
                }
            }

            // Cargar configuración de Narrador
            const narratorConfig = JSON.parse(localStorage.getItem('narratorConfig')) || config.narrator; // Usar localStorage o el valor por defecto
            document.getElementById('voiceSpeed').value = narratorConfig.voiceSpeed; // Establecer velocidad
            document.getElementById('voiceVolume').value = narratorConfig.voiceVolume; // Establecer volumen
            document.getElementById('enableNarrator').checked = narratorConfig.enableNarrator; // Establecer estado del narrador
        })
        .catch(error => {
            console.error('Error loading settings:', error);
        });
}


// Asignar eventos a los botones de Guardar Cambios
document.getElementById('saveFontSizeBtn').addEventListener('click', saveFontSize);
document.getElementById('saveContrastBtn').addEventListener('click', saveContrast);
document.getElementById('saveNarratorBtn').addEventListener('click', saveNarratorSettings);

// Cargar configuraciones al iniciar
window.onload = loadSettings;
