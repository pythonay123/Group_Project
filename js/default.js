var incrementButtons = document.getElementsByClassName("add");
var decrementButtons = document.getElementsByClassName("subtract");

//Increment input value
for(var i = 0; i < incrementButtons.length; i++){
  var button = incrementButtons[i];
  button.addEventListener("click", (event) => {
    var buttonClicked = event.target;
    var parent = buttonClicked.parentElement;
    var input = parent.children[1];
    var inputValue = parseInt(input.value);
    inputValue++;
    input.value = inputValue; 
  })
}

//Decrement input value
for(var i = 0; i < decrementButtons.length; i++){
  var button = decrementButtons[i];
  button.addEventListener("click", (event) => {
    var buttonClicked = event.target;
    var parent = buttonClicked.parentElement;
    var input = parent.children[1];
    var inputValue = parseInt(input.value);
    if(inputValue > 0){
      inputValue--;
    }
    input.value = inputValue; 
  })
}


//rearrange footer elements at 1350px
const footerCard =  document.querySelector(".footer__row__card");
const footerCardCont = footerCard.parentElement;
const row2Col = document.querySelector(".row2_col"); 

function reArrangeFooter(screenSize){
  if(screenSize.matches){
    footerCard.style.width = "90%";
    row2Col.appendChild(footerCard);
  } else {
    footerCard.style.width = "110%";
    footerCardCont.appendChild(footerCard);
  }
}

var sizeCheck = window.matchMedia("(max-width: 1350px)");
reArrangeFooter(sizeCheck);
sizeCheck.addListener(reArrangeFooter);


/** Username and Password Validation */
const form = document.getElementById('form');

//show input element error message
function displayError(element, message){
  const small = element.nextElementSibling;
  element.classList.remove('success');
  element.classList.add('error');
  small.innerText = message;
  small.style.visibility = "visible";
}

//show input element success border color
function displaySuccess(element) {
  const small = element.nextElementSibling;
  element.classList.remove('error')
  element.classList.add('success');
  small.style.visibility = "hidden";
}

// check password length, password must be 9 characters in length
function checkPasswordLength(event, password, length) {
  if(password.value.length < length) {
    displayError(password, "Password must be at least 9 characters in length");
    //prevent form from submitting
    event.preventDefault();
  } else {
    displaySuccess(password);
  }
}

if(form){
  //form event listener
  form.addEventListener('submit', function(event){
  //prevent form from submitting
  event.preventDefault();
  const username = document.getElementById('email');
  const password = document.getElementById('password');

  if(username.value.trim() === ''){
    displayError(username, 'Email must be provided');
  } else {
    displaySuccess(username)
  }

  if(password.value.trim() === ''){
    displayError(password, 'Password must be provided');
  } else {
    checkPasswordLength(event, password, 9);
  } 
});
}
