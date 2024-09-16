window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
      const element = document.getElementById(selector);
      if (element) element.innerText = text;
  };

  const btnLeft = document.querySelector('#btnLeft');
  const btnRight = document.querySelector('#btnRight');

  // Função para alterar temporariamente a classe
  function temporarilyChangeClass(element, newClass, oldClass) {
      if (element) {
          element.classList.add(newClass);
          element.classList.remove(oldClass);

          // Define um temporizador para reverter a classe após 1 segundo
          setTimeout(() => {
              element.classList.add(oldClass);
              element.classList.remove(newClass);
          }, 100); // Altere 1000 para a duração desejada em milissegundos
      }
  }

  // Listener para cliques no documento
  document.addEventListener('mousedown', (event) => {
      if (event.button === 0) { // Clique esquerdo
          temporarilyChangeClass(btnLeft, 'btnLeft2', 'btnLeft');
      } else if (event.button === 2) { // Clique direito
          temporarilyChangeClass(btnRight, 'btnRight2', 'btnRight');
      }
  });

  // Adiciona um listener para evitar o menu de contexto ao clicar com o botão direito
  document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // Isso evitará que o menu de contexto padrão seja exibido
  });

  // Substitui a informação da versão
  for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type]);
  }
});
