/*var dice = {
  //old function that is not calling rest API.
    sides: 6,
    roll: function (){
        var randomNumber = Math.floor(Math.random()* this.sides) + 1;
        return randomNumber;

    }
}*/
var dice = {
  roll: function() {
      return fetch('https://random-number-generator-node.azurewebsites.net/')
          .then(response => response.json())
          .then(data => {
              return data.randomNumber; // Return the random number from the promise chain
          })
          .catch(error => {
              console.error('Error:', error);
              throw error; // Re-throw the error to be caught by the caller
          });
  }
};

function printNumber(number, elementId) {
  var placeholder = document.getElementById(elementId);
  placeholder.innerHTML =  number;
}

var button = document.getElementById('button');

button.onclick = function() {
  Promise.all([dice.roll(), dice.roll()]).then(values => {
      var result = values[0];
      var resultMario = values[1];
      printNumber(result, 'placeholder');
      printNumber(resultMario, 'placeholder_two');

      if (result > resultMario) {
          alert("You Win!");
      } else if (resultMario > result) {
          alert("You Lose");
      } else {
          alert("It's a Tie!");
      }
  }).catch(error => {
      // Handle errors that occurred during the fetch operation
      console.error('Error:', error);
      // You might want to inform the user about the error
      alert("Error occurred while fetching random numbers. Please try again later.");
  });
};
