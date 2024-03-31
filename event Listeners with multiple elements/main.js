// var myText = document.getElementById('clickText');
// var btn = document.querySelectorAll('button')[0];
// btn.addEventListener('click', function() {
//    myText.innerHTML = "You have clicked button-1";
// })

// var myText = document.getElementById('clickText');
// var btn = document.querySelectorAll('button')[1];
// btn.addEventListener('click', function() {
//    myText.innerHTML = "You have clicked button-2";
// })

// var myText = document.getElementById('clickText');
// var btn = document.querySelectorAll('button')[2];
// btn.addEventListener('click', function() {
//    myText.innerHTML = "You have clicked button-3";
// })

// var myText = document.getElementById('clickText');
// var btn = document.querySelectorAll('button')[0];
// btn.addEventListener('click', function() {
//    var text = this.innerHTML;
//    myText.innerHTML = "You have clicked " + text;
// })
// Using loop....
 for (var i = 0;i<3;i++){
   var myText = document.getElementById('clickText');
   var btn = document.querySelectorAll(".button")[i];
   btn.addEventListener('click', function() {
      var text = this.innerHTML;
      myText.innerHTML = "You have clicked " + text;
   })
 }

