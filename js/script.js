

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
        body.classList.toggle('dark_mode');  // Alterna a classe 'dark_mode' no elemento <body> puxando do css. classList: É uma propriedade do Elemento HTML, que fornece acesso a uma lista de classes CSS associadas ao elemento.
        const theme = body.classList.contains('dark_mode') ? 'dark' : 'light'; // Verifica se a classe 'dark_mode' está presente no elemento <body> e define o tema (theme) com base nisso. Se body.classList.contains('dark_mode') for verdadeiro (true), o código retornará a string 'dark'.
        localStorage.setItem('theme', theme); // Salva a preferência do usuário para o tema no armazenamento local. O primeiro argumento representa o nome do item a ser armazenado ou a chave usada para identificar o valor armazenado. O segundo argumeno eh o valor armazenado.
        // O segundo argumento eh o valor da const theme definida na linha anterior.

        // Atualiza o texto do botão de acordo com o tema atual
        var darkModeBtn = document.querySelector('.darkModeBtn');
        darkModeBtn.textContent = body.classList.contains('dark_mode') ? 'Modo Claro' : 'Modo Escuro'; //textContent está manipulando o conteúdo textual do elemento que foi selecionado
    }
    // A constante theme definida dentro da função toggleDarkMode() é usada para calcular o valor atual do tema do site com base no estado atual do elemento body do documento e armazenar esse valor no local storage do navegador.

    // Event listeners for dark mode buttons
    document.querySelector('.darkModeBtn').addEventListener('click', toggleDarkMode);

    window.addEventListener('load', () => { // Quando a página está completamente carregada, este código é executado.
        const theme = localStorage.getItem('theme'); // Recupera a preferência do usuário para o tema do armazenamento local
        // A constante theme definida aqui dentro é usada para recuperar a preferência do usuário para o tema do site do local storage do navegador quando a página é carregada. O valor recuperado é então usado para definir o estado inicial do site quando a página é carregada.
        
        if (theme === 'dark') {
            document.body.classList.add('dark_mode'); // Se a preferência for 'dark', adiciona a classe 'dark_mode' ao elemento <body>
        }
    });

    // -------------------------- BOTOES DE TAMANHOS DA FONTE ----------------------------

    var fontIncreaseBtn = document.querySelector('.fontIncreaseBtn'); // querySelector é utilizado para selecionar os elementos do DOM que possuem as respectivas classes
    var fontDecreaseBtn = document.querySelector('.fontDecreaseBtn');

    fontIncreaseBtn.addEventListener('click', fontIncrease);
    fontDecreaseBtn.addEventListener('click', fontDecrease);

    function fontIncrease() {
        document.body.classList.add('body-increase-font'); // adiciona uma classe (body-increase-font) ao elemento <body>
        document.body.classList.remove('body-decrease-font');
        localStorage.setItem('fontSize', 'increase'); // O armazenamento local é uma maneira de armazenar pares chave-valor, onde as chaves e valores são sempre armazenados como strings.
    }
    
    function fontDecrease() {
        document.body.classList.add('body-decrease-font');
        document.body.classList.remove('body-increase-font');
        localStorage.setItem('fontSize', 'decrease'); //armazena a preferência do usuário no armazenamento local como 'decrease'.
    }

    window.addEventListener('load', () => {
        const fontSizePreference = localStorage.getItem('fontSize');

        if (fontSizePreference === 'increase') {
            fontIncrease(); 
        } else if (fontSizePreference === 'decrease') {
            fontDecrease(); 
        }
    }); 

});
