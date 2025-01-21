// efeito rolagem

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// mensagem de boas vindas

document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = 'Bem-vindo ao meu portfólio!';
    welcomeMessage.style.position = 'fixed';
    welcomeMessage.style.top = '10px';
    welcomeMessage.style.right = '10px';
    welcomeMessage.style.backgroundColor = '#333';
    welcomeMessage.style.color = '#fff';
    welcomeMessage.style.padding = '10px';
    welcomeMessage.style.borderRadius = '5px';
    document.body.appendChild(welcomeMessage);
  
    setTimeout(() => {
      welcomeMessage.remove();
    }, 5000); // A mensagem desaparece após 5 segundos
  });

  // responderemos
   document.getElementById('contact-form').addEventListener('submit', function(e) {
     e.preventDefault();
      alert('Obrigado por entrar em contato! Responderemos em breve.'); });
  
      // modo escuro

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;
  
    toggleButton.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
      } else {
        toggleButton.textContent = 'Modo Escuro';
      }
    });
  });
  
