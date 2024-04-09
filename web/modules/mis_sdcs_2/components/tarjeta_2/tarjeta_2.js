(Drupal => {

  Drupal.behaviors.inicializarTarjeta = {
    attach: (context, settings) => {
      once('tarjeta-init', '.tarjeta', context).forEach(tarjeta => {
        tarjeta.classList.add('tarjeta--modulo');
      });
    }
  }

})(Drupal);
