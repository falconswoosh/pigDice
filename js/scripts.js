// Business Logic
function Player (playerID) {
  this.playerID = playerID;
  this.roundScore = 0;
  this.totalScore = 0;
  // this.hold = "hold"
  this.currentRoll = 0;
}
function Game (playerID) {
  this.playerID = playerID;
  this.currentRoll = 0;
  this.round = 0;
  this.hold = $("#hold").click(function(){
        var id = $(this).attr("id");
        alert("You clickd the " + id + " button...");
      });
}

// var diceValue = dice();
// var playerOne =  new Player.this.playerID("1");
// var playerTwo = new Player.this.playerID("2");
//
Player.prototype.roll = function () {
  // console.log("roll method");
  this.currentRoll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  this.roundScore=this.roundScore++;
  if (this.currentRoll === 1) {
    this.roundScore = 0;
    console.log("Your turn is done!");
    $(".row").show();
    $(".outputOne").append("<li>"+"You rolled a "+playerOne.currentRoll+"</li>");
  } else {
    $("#hold").click(function() {
      var id = $(this).attr("id");
      alert("Your clicked the " + id + " button");
      return;
});
}
}
// Game.protype.hold = function() {
//     $("#hold").click(function() {
//       var id = $(this).attr("id");
//       alert("You clickd the " + id + " button...");
//     });
// };
    //--------- Beginning of Hold test --------------------------------------
    // Below works; yet value is zero even before the hold button is clicked.
    // var buttonHold = $("button#hold").val()
    // if (buttonHold == "0") {
    //   alert("HOld!");
    // }
    //------- End of Hold test ----------------------------------------------

        // this.roundScore = 0
        // this.round=this.round++
        // alert("hi");

// Game.prototype.hold = function () {
//     if ($("#hold").click(function() === true) {
//       // this.round=this.round++
//       //     Player.totalScore = Player.totalScore + Player.roundScore;
//       //     this.round=this.round++
//       alert("hi");
// }
// }
// if (("button#hold").click(function() {
//   // if (document.getElementById('button#hold').clicked == true) {
//   // this.totalScore = this.totalScore + this.roundScore;var flavor = $("input:radio[name=flavor]:checked").val();Ω
//   // var hold = $("button:button[name=hold]:clicked").val();
//   console.log("You are on hold");
// })

// function myfunction() {
//   if (document.getElementById("hold").val() === true) {
//     alert("You got it!");
// }
// }
//User Interface
$(document).ready(function() {
  $("#roll").click(function(event) {
    event.preventDefault();
  var playerOne =  new Player("1");
  playerOne.roll();
  // console.log(playerOne.currentRoll)
  // var playerTwo = new Player("2");
  // playerTwo.roll();
  // if (currentPlayer === "One") {
  //   $(".outputOne").prepend("<li>"+diceValue+"</li>")
  // } else {
    // return $(".outputTwo").prepend("<li>"+diceValue+"</li>")
    // $(".row").show();
    // $(".outputOne").prepend("<li>"+diceRoll+"</li>");
    $(".row").show();
    $(".outputOne").append("<li>"+playerOne.currentRoll+"</li>");
  });


    $("#hold").click(function(event) {
      event.preventDefault();
      // var buttonHold = $("button#hold").val()
      // if (buttonHold == "0") {
      //   alert("HOld!");
      // }

//------ This works if placed under Player.prototype.roll
      $("#hold").click(function() {
        var id = $(this).attr("id");
        alert("Your clicked the " + id + " button");
    });

    // var diceRoll = parseInt($("button#roll").val());
    var playerOne =  new Player("1");
    // playerOne.hold();
    console.log(playerOne.currentRoll)
    var playerTwo = new Player("2");
    // playerTwo.hold();
    // if (currentPlayer === "One") {
    //   $(".outputOne").prepend("<li>"+diceValue+"</li>")
    // } else {
      // return $(".outputTwo").prepend("<li>"+diceValue+"</li>")
      // $(".row").show();
      // $(".outputOne").prepend("<li>"+diceRoll+"</li>");
      $(".row").show();
      $(".outputOne").prepend("<li>"+playerOne.currentRoll+"</li>");
  });
});
