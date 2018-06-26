var serverController = (function() {
  var Question = function(question, answer) {
    this.question = question;
    this.answer = answer;
  };
  q1 = new Question('Which country has won the most world cups?', 'Brazil');
  q2 = new Question(
    'Which country made it to the world cup for the first time in 2018',
    'Iceland'
  );
  q3 = new Question('Which country does Messi play for?', 'Argentina');
  q = [q1, q2, q3];
})();

var UIController = (function() {
  var DOMstrings = {
    inputQuestion: '.question'
  };

  // Record user input and save into array
  var getInput = [];
  document.onkeypress = function(e) {
    getInput.push(e.key.toLowerCase());
    return getInput;
  };

  return {
    getInput: getInput
  };
})();

var controller = (function(serverCtrl, UICtrl) {


})(serverController, UIController);
