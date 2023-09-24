var dice = {
    sides: 6,
    roll: function (){
        var randomNumber = Math.floor(Math.random()* this.sides) + 1;
        return randomNumber;

    }
}
function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    
    placeholder.innerHTML = number;
    
  }
function printNumber_two(number){
    var placeholder_two = document.getElementById('placeholder_two');
    placeholder_two.innerHTML = number;


}
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    var result_mario = dice.roll();
    printNumber(result);
    printNumber_two(result_mario);
    if (result > result_mario)
        alert("You Win!")
    else if (result_mario > result)
        alert("You Lose")
  };
  function roll_numbers(){
    var result = dice.roll();
    printNumber(result);


  }
  