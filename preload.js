window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }

    const mouse = document.getElementById('mouse');

    // Variáveis para rastrear o estado dos botões do mouse
    let leftPressed = false;
    let rightPressed = false;
    
    // Função para atualizar a imagem com base no estado dos botões
    function updateMouseImage() {
      if (leftPressed && rightPressed) {
        mouse.src = 'assets/bothBtns.png'; // Imagem para ambos os botões pressionados
      } else if (leftPressed) {
        mouse.src = 'assets/leftBtn.png'; // Imagem para o botão esquerdo pressionado
      } else if (rightPressed) {
        mouse.src = 'assets/RightBtn.png'; // Imagem para o botão direito pressionado
      } else {
        mouse.src = 'assets/mouse.png'; // Imagem original
      }
    }
    
    // Evento para o botão esquerdo do mouse
    mouse.addEventListener('mousedown', (e) => {
      if (e.button === 0) { // Botão esquerdo
        leftPressed = true;
        updateMouseImage();
        console.log('Botão esquerdo pressionado');
        setInterval(() => {
          retorno();
        }, 500);
      } else if (e.button === 2) { // Botão direito
        rightPressed = true;
        updateMouseImage();
        console.log('Botão direito pressionado');
        setInterval(() => {
          retorno();
        }, 5000);
      }
    });
    
    // Evento para liberar os botões do mouse
    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) { // Botão esquerdo
        leftPressed = false;
        updateMouseImage();
        console.log('Botão esquerdo liberado');
      } else if (e.button === 2) { // Botão direito
        rightPressed = false;
        updateMouseImage();
        console.log('Botão direito liberado');
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
    
    // Função retorno
    function retorno() {
      console.log('Função retorno chamada');
    }
    
    
    // Evento para liberar os botões do mouse
    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) { // Botão esquerdo
        leftPressed = false;
        updateMouseImage();
        console.log('Botão esquerdo liberado');
      } else if (e.button === 2) { // Botão direito
        rightPressed = false;
        updateMouseImage();
        console.log('Botão direito liberado');
      }
    });
    
    // Previne o menu de contexto ao clicar com o botão direito
    mouse.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    
    // Função retorno
    function retorno() {
      console.log('Função retorno chamada');
    }
    
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }
  });
