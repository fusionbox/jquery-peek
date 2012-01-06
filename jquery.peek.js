/**
 * jquery.peek.js
 * by Rocky Meza
 *
 * Peek is a plugin that adds iframe preview functionality to any form.  It
 * uses an iframe to simply handle images and such.  In order for the server
 * code to differentiate a real request from a peek request, Peek adds a hidden
 * field to the form with the name `peek` and the value `1`.  After the preview
 * is created, the form is returned to normal and a normal submit will still
 * work.
 */
;(function($) {
  var id_name = 'peek_iframe_'
    , id_number = 0;

  /**
   * `$.fn.peek` can be run with no options, and it will search for an element
   * with the class `peek` to use as the trigger.  Alternatively, you can pass
   * in a selector or a jQuery object.
   */
  $.fn.peek = function(selector) {
    var $form = this
      , form = this[0]
      , old_target = form.target
      , iframe = $('<iframe class="peek_window" id="' + id_name + id_number++ +'">').appendTo($form)[0]
      , $hidden = $('<input type="hidden" name="peek" value="1">')
      , $button = $(selector || '.peek', this)
      ;

    $button.click(function(event) {
      event.preventDefault();

      $form.append($hidden);
      form.target = iframe.id;
      $form.submit();
      form.target = old_target;
      $hidden.remove();
    });
  };
})(jQuery);
