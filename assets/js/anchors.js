$(function() {
    return $("h2, h3, h4, h5, h6").each(function(i, el) {
      var $el, icon, id;
      $el = $(el);
      id = $el.attr('id');
    //   icon = '<i class="fa fa-link"></i>';
      icon = '<i class="fa-solid fa-link"></i>';
      if (id) {
        return $el.append($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
      }
    });
  });
