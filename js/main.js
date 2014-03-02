// Pop In Menu
(function () {
  var $menuTrigger = document.getElementById('menu-trigger'),
      $menu = document.getElementById('menu'),
      $close = document.getElementById('menu-close'),
      $logo= document.getElementById('site-logo'),
      revealed = false;

  $menu.classList.add('menu-closed');

  $menuTrigger.addEventListener('click', function() {
    if (!revealed) {
      reveal($menu);
      reveal($logo);
    } else {
      console.log("Test");
      close($menu);
      close($logo);
    }
  }, false);

  $close.addEventListener('click', function() {
    close($menu);
    close($logo);
  });

  // Trigger slideout
  var reveal = function (elem) {
    elem.classList.add('menu-open');
    elem.classList.remove('menu-closed');
    revealed = true;
  };

  // Hide elements
  var close = function (elem) {
    elem.classList.remove('menu-open');
    elem.classList.add('menu-closed');
    revealed = false;
  };

})();

// Topics List
(function() {
  var hash = window.location.hash,
      id = "",
      $topic =  $('[data-topic]'),
      $topicFilter = $('[data-topic-filter]');

  $topic.addClass('is-hidden');

  var setCurrentTopic = function(id) {
    $topic.addClass('is-hidden');
    $(id).removeClass('is-hidden');
    $topicFilter.removeClass('is-current');
    $(this).addClass('is-current');
  };

  var setCurrentFilter = function(id) {
    $current = $('[data-topic-filter][href='+id+']');
    console.log($current);
    $current.addClass('is-current');
  };

  if(hash) {
    setCurrentTopic(hash);
    setCurrentFilter(hash);
  } else {
    $topic.first().removeClass('is-hidden');
    $topicFilter.first().addClass('is-current');
  }

  $topicFilter.on('click', function(e) {
    e.preventDefault();
    id = $(this).attr("href");
    window.location.hash = id;
    id = String(id);
    setCurrentTopic(id);
    setCurrentFilter(id);
  });

})();