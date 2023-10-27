console.log("It's working");
// variables to hold html elements
const food = document.querySelector("#food-input");
const goBtn = document.querySelector("#go-button");
const foodOutput = document.querySelector("#fav-food");

// now create a event listner for the go button
goBtn.addEventListener("click", function(){
    // get value of the input box
    const foodString = food.value;
    //place the string into the span element
    foodOutput.textContent = foodString;
    // empty the inpute box 
    food.value ="";
    // place the cursor back into the input box
    food.focus();
});


// example 2 js code
// Grab the HTML elements we want to interact with
const cupImage = document.querySelector("#my-picture");
const pictureDiv = document.querySelector(".picture-box");
const drinkBtn = document.querySelector("#drink-it-button");
const fillBtn = document.querySelector("#fill-it-button");


// add event listeners for the buttons
drinkBtn.addEventListener("click", function(){
    // change the image to the empty cup
    cupImage.src = "./empty.png";
    cupImage.alt = "empty cup";
    // change the background color style of the div
    pictureDiv.style.backgroundColor = "#4e4e4e";
});

fillBtn.addEventListener("click", function(){
    //change the image to the full cup
    cupImage.setAttribute("src", "./full.png");
    cupImage.setAttribute("alt", "now an full cup");
    // change the backgroudn of the div back to #f7f7f7
    pictureDiv.style.backgroundColor = "#f7f7f7";
});

// example 3
// grab the HTML elements

// the paragraph
const colorParagraph = document.querySelector("#color-text");
// the text picker input
const textColorPicker = document.querySelector("#text-picker");
// the bg picker input
const bgColorPicker = document.querySelector("#bg-picker");

// add the event listeners for the color pickers
textColorPicker.addEventListener("change", function(){
    // get the selected color
    const textColor = textColorPicker.value;
    // set the color of our paragraph
    colorParagraph.style.color = textColor;
});

bgColorPicker.addEventListener("input", function(){
    colorParagraph.style.backgroundColor = bgColorPicker.value;
});














