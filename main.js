$(document).ready(init);

function init() {
  $('.tower').on('click', decideWhatToDo)
  console.log($(".tower").length)

}

function decideWhatToDo(){
  var $itemSelected = $(this);
  console.log(this)
  var firstKid = $(this).find(".disk:first-child")

  if ($(".clicked").length === 0) {
    if (firstKid.hasClass('clicked')) {
      firstKid.removeClass('clicked')
    } else {
      $(".clicked").removeClass('clicked')
      firstKid.addClass('clicked')
    }

  } else {

    console.log("hello")
    var opposingChild = $(this).find(".disk:first-child");
    console.log(opposingChild);
    console.log("move to function working!")
    weight2 = parseInt(opposingChild.text());
    weight1 = parseInt($(".clicked").text());

    var isLegalMove = (weight1 < weight2) || ($(this).find(".diskContainer").children().length === 0);

    console.log($(this).find(".diskContainer"))

    if (isLegalMove) {
      $(".clicked").prependTo( $(this).find(".diskContainer") );
    }

    $(".clicked").removeClass("clicked");
  }
};

var weight1 = ""
var weight2 = ""





