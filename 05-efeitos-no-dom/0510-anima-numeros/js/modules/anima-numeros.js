export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
  
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const inscremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start = start + inscremento;
        numero.innerText = start;
        if(start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  
  function handleMutation(mutation) {
   if(mutation[0].target.classList.contains('ativo')) {
    //  Parando de observar depois que a animação dos números animarem
    observer.disconnect();
    animaNumeros();
   }
  }
  
  // Observador para quando a seção de números receber a classe ativo
  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);
  
  observer.observe(observerTarget, {attributes: true});
}