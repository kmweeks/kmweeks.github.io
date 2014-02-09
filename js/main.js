(function () {
  var $container = document.getElementById('container'),
      $menuTrigger = document.getElementById('menu-trigger'),
      $menu = document.getElementById('menu'),
      $page = document.getElementById('page'),
      revealed = false;

  document.addEventListener('click', function () {
    close($container);
  });

  $menuTrigger.addEventListener('click', function (event) {

    event.stopPropagation();

    if (!revealed) {
      reveal($container);
    } else {
      close($container);
    }

  }, false);

  $menu.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  // Trigger slideout
  var reveal = function (elem) {
    elem.classList.add('menu-open');
    revealed = true;
  };

  // Hide elements
  var close = function (elem) {
    elem.classList.remove('menu-open');
    revealed = false;
  };

})();