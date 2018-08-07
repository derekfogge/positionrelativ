function nasaBG() {
  var url = "https://api.nasa.gov/planetary/apod?api_key=e0iOm38ojRgMvysE95lpWe2PCnsEo9OOVUkZRnMP";
  var image = $(".hi");
  $.ajax({
    url: url,
    success: function(result) {
      image.css('background-image', 'url(' + result.url + ')');
    }
  });
}
nasaBG();


$(window).resize(function() {
    $('.hi').height($(window).height() / 1);
    $('.hi h1').css('padding-top', $(window).height() / 2.5);
}).resize();

