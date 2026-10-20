let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value;;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");
    // get boolean values from the form
    let wineSelected = document.getElementById("wine").checked;
    let rabbitSelected = document.getElementById("rabbit").checked;
    let honeySelected = document.getElementById("honey").checked;
    // give result based on what they selected
    if (wineSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. You are probably an alcoholic, hop off the wine buddy."
    }
    else if (rabbitSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong, and not only that but an absolute idiot. You will never get married, never have kids, never get rich, and will absolutely never get happy, you bozo."
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are right! You are a God among men, you shall be promoted to my senior, you are probably the most handsome, funny, intelligent, smart, cool, auraful, rizzy, divine, pristine person to have ever lived. Love you!"
    }
}