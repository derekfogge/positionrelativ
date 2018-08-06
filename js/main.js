var url = "https://api.nasa.gov/planetary/apod?api_key=e0iOm38ojRgMvysE95lpWe2PCnsEo9OOVUkZRnMP";

$.ajax({
  url: url,
  success: function(result) {
    $("#nasa").attr("src", result.url);
    $("#test p").text(result.explanation);
  }
});