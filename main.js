'use strict';

$(document).ready(init);

function init() {
  console.log('ready!');
//   $('#makeBox').on('click', makeBox);
//   $('#randomBox').on('click', randomBox);
  // $('.container-pole-left').on('click', '.box', leftPoleClicked);
  // $('.container-pole-left').on('click', '.box', rightPoleClicked);
  // $()

$("div.el").on("click", function(){
  var $this = $(this);
  if ($this.hasClass("box-1-left")) {

    $this.removeClass("box-1-left").addClass("box-1-middle").prependTo("#pole-middle");
  } else {

    $(this).removeClass("box-1-middle").addClass("box-1-left").prependTo("#pole-left");
  }
});

//   $('.container').click(makeBox);
}

// function moveBox(){
//   var $this = $(this);

//   if (!$('.selected').length || $this.children('.selected').length){

//     return;
// }

  var $selected = $('.selected').detach();
  $this.append($selected.detach().removeClass('selected'));
}

function boxClicked(event){
  event.stopPropagation();
  var $target = $(event.target);

  var isSelected = $target.hasClass('selected');

  if (isSelected){
    $target.removeClass('selected');
  } else {
    $('.selected').removeClass('selected');
    $target.addClass('selected');
  }
}

  // function moveSelected(){

  //   console.log('moveSelected');
  //   if ($(this).find(".selected").length > 0){

  //   }else{detached = $('.selected').detach().removeClass('selected');
  //       $(this).append(detached)};
  // }



// function makeBox() {
//   var color = $('#color').val();
//   var $box = makeColoredBox(color);
//   $('#boxes').append($box);
// }





