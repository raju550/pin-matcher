const incorrect = document.querySelector(".incorrect");
incorrect.style.display = "none";
const correct = document.querySelector(".correct");
correct.style.display = "none";
let generatedPin = 0;
let submittedPin = 0;

///GENERATE RANDOM NUMBER 4 DIGIT
const generatePin = document.querySelector(".generate-btn");
const generateRandomPin = document.querySelector(".generateRandomPin");
generatePin.addEventListener("click", function () {
  const generatedPin = Math.floor(1000 + Math.random() * 9000);
  generateRandomPin.value = generatedPin;
});

///write 4 digit number pin
const calculatorBtns = document.querySelectorAll(".calc-body .button");
const showPin = document.getElementById("showPin");
calculatorBtns.forEach((btn) => {
  btn.addEventListener("click", userPinGenerator);
});
// User pin generate

function userPinGenerator(e) {
  const { innerText: btnLabel } = e.target;

  if (btnLabel === "<") {
    showPin.value = showPin.value.slice(0, -1);
  } else if (btnLabel === "C") {
    showPin.value = "";
  } else {
    if (showPin.value.length < 4) {
      showPin.value += btnLabel;
      submittedPin = parseInt(showPin.value);
    }
  }
}
// submitted btm match
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function () {
  const pin = submittedPin;
  const pinType = parseInt(generateRandomPin.value);
  if (pin === pinType) {
    correct.style.display = "block";
    showPin.value = "";
    generateRandomPin.value = "";
  } else {
    showPin.value = "";
    generateRandomPin.value = "";
    incorrect.style.display = "block";
  }
});
