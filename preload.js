window.addEventListener('DOMContentLoaded', () => {
  const mouse = document.getElementById('mouse');

  // Variáveis para rastrear o estado dos botões do mouse
  let leftPressed = false;
  let rightPressed = false;
  let middlePressed = false; // Estado do botão do meio (scroll)

  // Função para atualizar a imagem com base no estado dos botões
  function updateMouseImage() {
    if (leftPressed && rightPressed) {
      mouse.src = 'assets/bothBtns.png'; // Imagem para ambos os botões pressionados
    } else if (leftPressed) {
      mouse.src = 'assets/leftBtn.png'; // Imagem para o botão esquerdo pressionado
    } else if (rightPressed) {
      mouse.src = 'assets/RightBtn.png'; // Imagem para o botão direito pressionado
    } else if (middlePressed) {
      mouse.src = 'assets/scrollBtn.png'; // Imagem para o botão do scroll pressionado
    } else {
      mouse.src = 'assets/mouse.png'; // Imagem padrão do mouse
    }
  }

  // Evento para detectar pressionamento de botões do mouse
  mouse.addEventListener('mousedown', (e) => {
    if (e.button === 0) { // Botão esquerdo
      leftPressed = true;
      updateMouseImage();
      console.log('Botão esquerdo pressionado');
    } else if (e.button === 2) { // Botão direito
      rightPressed = true;
      updateMouseImage();
      console.log('Botão direito pressionado');
    } else if (e.button === 1) { // Botão do meio (scroll)
      middlePressed = true;
      updateMouseImage();
      console.log('Botão do scroll pressionado');
    }
  });

  // Evento para liberar botões do mouse
  document.addEventListener('mouseup', (e) => {
    if (e.button === 0) { // Botão esquerdo
      leftPressed = false;
      updateMouseImage();
      console.log('Botão esquerdo liberado');
    } else if (e.button === 2) { // Botão direito
      rightPressed = false;
      updateMouseImage();
      console.log('Botão direito liberado');
    } else if (e.button === 1) { // Botão do meio (scroll)
      middlePressed = false;
      updateMouseImage();
      console.log('Botão do scroll liberado');
    }
  });

  // Previne o menu de contexto ao clicar com o botão direito
  mouse.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  // Função para tratar o scroll
  document.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
      // Scroll para cima
      mouse.src = 'assets/ScrollUpBtn.png';
      console.log('Scroll para cima');
    } else {
      // Scroll para baixo
      mouse.src = 'assets/ScrollDownBtn.png';
      console.log('Scroll para baixo');
    }

    // Reverte a imagem após um pequeno atraso
    setTimeout(() => {
      updateMouseImage();
    }, 200); // Tempo em milissegundos
  });
});
