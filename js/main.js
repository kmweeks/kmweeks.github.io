// Slide In Menu
(function () {
  var $container = document.getElementById('container'),
      $menuTrigger = document.getElementById('menu-trigger'),
      $menu = document.getElementById('menu'),
      $page = document.getElementById('page'),
      revealed = false;

  document.addEventListener('click', function () {
    close($container);
  });

  $menuTrigger.addEventListener('click', function (e) {

    e.stopPropagation();

    if (!revealed) {
      reveal($container);
    } else {
      close($container);
    }

  }, false);

  $menu.addEventListener('click', function (e) {
    e.stopPropagation();
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

// Topics List
(function() {
  var $topic =  $('[data-topic]'),
      $topicFilter = $('[data-topic-filter]');

  $topic.addClass('is-hidden');

  $topicFilter.on('click', function(e) {
    e.preventDefault();

    var id = $(this).attr("href");
    id = String(id);

    $topic.addClass('is-hidden');
    $(id).removeClass('is-hidden');

    $topicFilter.removeClass('is-current');
    $(this).addClass('is-current');
  });

})();