$(document).ready(init);

function init() {
  $('.tower').on('click', decideWhatToDo)
  console.log($(".tower").length)

  // $('.tower').on('click', selectDisk)
}

function decideWhatToDo(){
  var $itemSelected = $(this);
  console.log(this)
  var firstKid = $(this).find(".disk:first-child")

  if ($(".clicked").length === 0) {
    //SELECT
    // This is what happens when there is not an item that is clicked:
    // weight1 = parseInt(firstKid.text())
    if (firstKid.hasClass('clicked')) {
      firstKid.removeClass('clicked')
    } else {
      $(".clicked").removeClass('clicked')
      firstKid.addClass('clicked')
    }

  } else {

    // MOVE
    // This is what happens when the item is clicked:
    console.log("hello")
    var opposingChild = $(this).find(".disk:first-child");
    console.log(opposingChild);
    console.log("move to function working!")
    weight2 = parseInt(opposingChild.text());
    weight1 = parseInt($(".clicked").text());

    //  It is a legal move if the disk you are trying to move is smaller than the top disk on the stack

    var isLegalMove = (weight1 < weight2) || ($(this).find(".diskContainer").children().length === 0);

    console.log($(this).find(".diskContainer"))
    // If the id of the one you move is smaller than the disk on the top of the stack

    // move it!
    if (isLegalMove) {
      $(".clicked").prependTo( $(this).find(".diskContainer") );
    }

    // WIN

    if ($("#diskContainer3").children().length === 3) {
      console.log("You won!")
      alert("You won!");
    };



    // if(weight2 === NaN){
    //   $(".clicked").appendTo($(".diskContainer"))
    //   console.log("weigh2 = NaN")
    // } else if (weight2 >= weight1){
    //   $(this).prepend($(".clicked"))
    // } else if (weight1 > weight2){
    //   return
    // } else {
    //   $(this).prepend($(".clicked"))
    // }

    // unselect
    $(".clicked").removeClass("clicked");
  }
};

var weight1 = ""
var weight2 = ""
// If there is anything that is "clicked", then move that selected item to "this"





