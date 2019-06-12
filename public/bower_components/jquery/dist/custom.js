$(function() {
  $(document).on(
    {
      mouseenter: function() {
        $("html")
          .children("div")
          .addClass("notShowImages");
      },
      mouseleave: function() {
        //stuff to do on mouse leave
        $("html")
          .children("div")
          .removeClass("notShowImages");
      }
    },
    "img"
  );
});
