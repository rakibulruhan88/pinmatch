 console.log("test");

 let generateBtn = document.querySelector(".generate-btn");
 let generatedPin = document.querySelector(".generatedPin");
 let randomNum = Math.random()*9000+1000;
 let floor = Math.floor(randomNum);
 let showValue = document.querySelector(".showValue");
 let submitBtn = document.querySelector(".submit-btn");
 let wrongPin = document.querySelector(".wrong-pin");
 let correctPin = document.querySelector (".correct-pin");
 let clearBtn = document.querySelector(".clear");
 let tryLeft = document.getElementById("tryLeft");
 let tryValue = parseInt(tryLeft.innerText);
 let actionLeft =document.querySelector(".action-left");
 let removeBtn = document.getElementById("removeBtn");

 

 console.log(tryValue -1);
 

 clearBtn.addEventListener("click", () => {
    showValue.value = ("");
 })

 wrongPin.style.display = ("none");
 correctPin.style.display = ("none");



 generateBtn.addEventListener("click", () => {
    generatedPin.value = (floor);
    console.log(floor);
 });

 submitBtn.addEventListener("click", () => {
    if(generatedPin.value==showValue.value) {
        console.log ("yes you pass");
        correctPin.style.display = ("block");
        wrongPin.style.display = ("none");

    }
    else{
        wrongPin.style.display = ("block");
        correctPin.style.display = ("none");
        tryLeftFunction();

    }
    showValue.value = ("")
 });

 function inputValue (number) {
    const showValue = document.querySelector(".showValue");
    console.log(number);
    showValue.value += (number);

 }

 removeBtn.addEventListener("click", removeSingelItem);

 function removeSingelItem () {
   let currentValue = showValue.value;
   let newCurrentValue = currentValue.slice(0, -1);
   showValue.value = newCurrentValue;
 }



 function tryLeftFunction () {
   
    if (tryValue > 1) {
        tryValue = tryValue-1;
    }
    else if (tryValue==1){
        submitBtn.style.display = "none";
        actionLeft.innerHTML = "You are Blocked";
    }

    tryLeft.innerHTML = tryValue;
    console.log(tryValue);
 }

//  console.log(tryLeftFunction());