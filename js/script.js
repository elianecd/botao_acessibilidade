

document.addEventListener('DOMContentLoaded', function () {
    
    // -------------------------- BOTOES DO PASSWORD EYE ICON ----------------------------
    // Toggle para password
    function togglePasswordVisibility() {
        var passwordInput = document.querySelector('.password');

        //alterna a visibilidade da senha, se mostra oculto como senha ou se da para visualizar como texto
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    }

    var eyeIcon = document.querySelector('.eye-icon');
    eyeIcon.addEventListener('click', togglePasswordVisibility); //Quando o olho é clicado, a função togglePasswordVisibility é chamada.

    //verificacao do input
    var loginForm = document.querySelector('.form.login form'); //Encontra o formulário de login na página e armazena-o na variável loginForm.
    loginForm.addEventListener('submit', function (event) { //Quando o formulário é enviado, a função anônima (que tem acesso ao objeto de evento event) é chamada.
        //Impede o envio real do formulário para evitar que a página seja recarregada
        event.preventDefault();                             //Neste caso, a função apenas chama event.preventDefault() para impedir o envio real do formulário e exibe um alerta indicando que o botão de login foi clicado.
        alert('Login button clicked!'); //Exibe um alerta indicando que o botão de login foi clicado.
    });

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
        localStorage.setItem('fontSize', 'increase');
    }
    
    // Function to decrease font size
    function fontDecrease() {
        document.body.classList.add('body-decrease-font');
        document.body.classList.remove('body-increase-font');
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
