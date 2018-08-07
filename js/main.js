function nasaBG() {
  var url = "https://api.nasa.gov/planetary/apod?api_key=e0iOm38ojRgMvysE95lpWe2PCnsEo9OOVUkZRnMP";
  var image = $("#nasa");
  $.ajax({
    url: url,
    success: function(result) {
      image.attr("src", result.url);
    }
  });
}
nasaBG();

// function hi() {
//   $(window).on('click keypress wheel', function() {
//     $('.hi').stop().fadeOut('slow');
//     $('.hey').delay('600')
//       .css('visibility','visible')
//       .hide().fadeIn('slow');
//   })
// };
// hi();