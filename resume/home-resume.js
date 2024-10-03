const name = document.getElementById("name");
name.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/yasemin-nurluoglu-a32b70264/")
})
let firstVal;
let secondVal;
let result;

function Addition() {
    firstVal = document.getElementById("first-input").value;
    secondVal = document.getElementById("second-input").value;
    result = Number(firstVal) + Number(secondVal);
    changeColor(result);
}

function Subtraction() {
    firstVal = document.getElementById("first-input").value;
    secondVal = document.getElementById("second-input").value;
    result = Number(firstVal) - Number(secondVal);
    changeColor(result);
}

function Multiplication() {

    firstVal = document.getElementById("first-input").value;
    secondVal = document.getElementById("second-input").value;
    result = Number(firstVal)*Number(secondVal);
    changeColor(result);
}

function Division() {


    firstVal = document.getElementById("first-input").value;
    secondVal = document.getElementById("second-input").value;
    result = Number(firstVal)/Number(secondVal);
    changeColor(result);
}

function Exponential() {

    result = 1;
    firstVal = document.getElementById("first-input").value;
    secondVal = document.getElementById("second-input").value;
    for (i = 0; i<Number(secondVal); i++) {
        result = result*Number(firstVal);
    }
    changeColor(result);
}

function doClear() {
    document.getElementById("first-input").value = "";
    document.getElementById("second-input").value = "";
}

function changeColor(result){
    if (result<=0){
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = String(result);

    }
    else {
        document.getElementById("output").style.color = "black";
        document.getElementById("output").innerHTML = String(result);


    }
}
