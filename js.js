// creating DOM
var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".input");
var elResult = elForm.querySelector(".result");
var elSelect= elForm.querySelector(".select");


// creating Function
var convertor = function (evt) {
  evt.preventDefault();

  var convertInput = Number(elInput.value.trim(), 10);

  // creating formula
  var celciusToFarenheit = (convertInput * 9 / 5) + 32;
  var farenheitToCelsius = (convertInput - 32) * 5 / 9;
//   elResult.textContent = celciusToFarenheit;

//   var farenheitToCelsius = ((convertInput - 32) * 5) / 9;
//   elResult.textContent = farenheitToCelsius;

  if (elSelect.value === "fa") {
    elResult.textContent = celciusToFarenheit.toFixed(2) + " °F";
  }else if (elSelect.value === "ce"){
    elResult.textContent = farenheitToCelsius.toFixed(2) + " °C";
  } else{
      "to'gri qiymat kiriting"
  }

  

 
};

elForm.addEventListener("submit", convertor);
elInput.addEventListener("change", convertor);
// elSelectF.addEventListener("submit", convertor);
// elSelectC.addEventListener("submit", convertor);