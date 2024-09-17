window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }

    const mouse = document.getElementById('mouse');
    mouse.addEventListener('click', () => {
      mouse.src = ('assets/leftBtn.png');
      console.log('mouse clicked');
      setInterval(() => {
        retorno()
      }, 500);
    });

    mouse.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      mouse.src = ('assets/RightBtn.png');
      console.log('mouse clicked');
      setInterval(() => {
        retorno()
      }, 5000);
    });




    let lastScrollTop = 0;
    window.addEventListener('scroll', (e) => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop < lastScrollTop) {
        mouse.src = 'assets/scrollbtn.png';
        console.log('mouse scrolled up');

        setTimeout(() => {
          retorno();
        }, 5000);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
    });
    
    function retorno() {
      // Defina a função retorno aqui
      console.log('Função retorno chamada');
    }
    

    function retorno (){
      mouse.src = ('assets/mouse.png');
    }
    
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }
  });
