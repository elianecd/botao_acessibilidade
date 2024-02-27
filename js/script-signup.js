document.addEventListener('DOMContentLoaded', function () {
    
    function togglePasswordVisibility() {
        const passwordFields = document.querySelectorAll('.password'); //Encontra todos os campos de senha na página e armazena-os em uma NodeList.
        passwordFields.forEach(field => { //Itera sobre cada campo de senha.
            const eyeIcon = field.nextElementSibling; //Encontra o elemento irmão seguinte (o icon do olho) para cada campo de senha.
            eyeIcon.addEventListener('click', function () {
                const fieldType = field.type === 'password' ? 'text' : 'password';
                field.type = fieldType; //Define o novo tipo para o campo de senha.
                eyeIcon.classList.toggle('bx-hide');
                eyeIcon.classList.toggle('bx-show');
            });
        });
    }

    // Chama a função togglePasswordVisibility para alternar a visibilidade da senha quando a página é carregada.
    togglePasswordVisibility();

    function validateForm() { 
        const form = document.querySelector('form'); //Encontra o formulário na página.
        form.addEventListener('submit', function (event) {
            const requiredFields = document.querySelectorAll('[required]'); // Encontra todos os campos obrigatórios no formulário.
            let isValid = true; //Inicializa uma variável para verificar se o formulário é válido.

            requiredFields.forEach(field => { //Itera sobre cada campo obrigatório
                if (field.value.trim() === '') { //Verifica se o valor do campo está vazio.
                    isValid = false; //Define isValid como falso se algum campo obrigatório estiver vazio.
                    field.classList.add('invalid'); //Adiciona uma classe para indicar que o campo é inválido.
                } else { //Se o campo não estiver vazio, executa o bloco de código a seguir.
                    field.classList.remove('invalid'); //Remove a classe de campo inválido.
                }
            });

            if (!isValid) { //Verifica se o formulário não é válido.
                event.preventDefault(); //Impede a submissão real do formulário.
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }

    validateForm();

    // -------------------------- BOTOES DE ACESSIBILIDADE ----------------------------
    
    var accessibilityBtn = document.querySelector('.accessibility_btn').addEventListener('click', toggleAccessibilityOptions);

    // Function to toggle accessibility options visibility
    function toggleAccessibilityOptions() {
        var options = document.querySelector('.accessibility_options');
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    }


    // Function to toggle dark mode
    function toggleDarkMode() {
        const body = document.body; // Obtém a referência ao elemento <body> do documento
        body.classList.toggle('dark_mode');  // Alterna a classe 'dark_mode' no elemento <body>
        const theme = body.classList.contains('dark_mode') ? 'dark' : 'light'; // Verifica se a classe 'dark_mode' está presente no elemento <body> e define o tema (theme) com base nisso
        localStorage.setItem('theme', theme); // Salva a preferência do usuário para o tema no armazenamento local
    
        // Atualiza o texto do botão de acordo com o tema atual
        var darkModeBtn = document.querySelector('.darkModeBtn');
        darkModeBtn.textContent = body.classList.contains('dark_mode') ? 'Modo Claro' : 'Modo Escuro';
    }
    
    // Event listeners for dark mode buttons
    document.querySelector('.darkModeBtn').addEventListener('click', toggleDarkMode);
    //document.getElementById('lightModeBtn').addEventListener('click', toggleDarkMode);

    window.addEventListener('load', () => {
        const theme = localStorage.getItem('theme');

        if (theme === 'dark') {
            document.body.classList.add('dark_mode');
        }
    });

    // -------------------------- BOTOES DE TAMANHOS DA FONTE ----------------------------

    var fontIncreaseBtn = document.querySelector('.fontIncreaseBtn');
    var fontDecreaseBtn = document.querySelector('.fontDecreaseBtn');

    fontIncreaseBtn.addEventListener('click', fontIncrease);
    fontDecreaseBtn.addEventListener('click', fontDecrease);

    function fontIncrease() {
        document.body.classList.add('body-increase-font');
        document.body.classList.remove('body-decrease-font');

        // Adicione classe de aumento de fonte aos elementos select dentro das classes .custom-dropdown
        const customDropdowns = document.querySelectorAll('.custom-dropdown select');
        customDropdowns.forEach(select => {
            select.classList.add('font-increase');
        });
        
        localStorage.setItem('fontSize', 'increase');
    }
    
    // Function to decrease font size
    function fontDecrease() {
        document.body.classList.add('body-decrease-font');
        document.body.classList.remove('body-increase-font');

        // Adicione classe de diminuição de fonte aos elementos select dentro das classes .custom-dropdown
        const customDropdowns = document.querySelectorAll('.custom-dropdown select');
        customDropdowns.forEach(select => {
            select.classList.add('font-decrease');
        });

        localStorage.setItem('fontSize', 'decrease');
    }

    // Check for user preference on page load
    window.addEventListener('load', () => {
        const fontSizePreference = localStorage.getItem('fontSize');

        if (fontSizePreference === 'increase') {
            fontIncrease(); // Apply larger font size
        } else if (fontSizePreference === 'decrease') {
            fontDecrease(); // Apply smaller font size
        }
    }); 
   

});
