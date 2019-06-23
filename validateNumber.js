/*
Name: Benjamin Cruse
Date Created: 06/18/2019
Most recent revision:
*/
function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["bet"].elements.length; loopCounter++) {
        if (document.forms["bet"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
            document.forms["bet"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}
function validateNumber() {
    clearErrors();
    var gameMoney = document.forms["bet"]["betAmount"].value;
    if (gameMoney <= 0 || isNaN(gameMoney)) {
        alert("The Starting Bet must be filled in with a positive number.");
        document.forms["bet"]["betAmount"].parentElement.className = "form-group has-error";
        document.forms["bet"]["betAmount"].focus();
        return false;
    }
    gameMoney = parseInt(gameMoney);
    var initialBet = gameMoney;
    var totalRolls = 0;
    var maxMoney = 0;
    var rollAmount = 0;
    var diceRoll = 0;
    while(gameMoney >= 1){
      diceRoll = 0;
      var roll1 = 0;
      var roll2 = 0;
      roll1 = Math.floor(Math.random() * 6) + 1;
      roll2 = Math.floor(Math.random() * 6) + 1;
      diceRoll = roll1+roll2;
      //diceRoll = Math.floor(Math.random() * 6) + 1;
      //diceRoll += Math.floor(Math.random() * 6) + 1;
      if (diceRoll === 7) {
        gameMoney += 4;
      }
      else{
        gameMoney--;
      }
      totalRolls++;
      if(maxMoney < gameMoney){
        maxMoney = gameMoney;
        rollAmount = totalRolls;
      }
    }
   document.getElementById("results").style.display = "block";

   document.getElementById("initialBet").innerText = initialBet;
   document.getElementById("totalRolls").innerText = totalRolls;
   document.getElementById("maxMoney").innerText = maxMoney;
   document.getElementById("rollAmount").innerText = rollAmount;
   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
}
