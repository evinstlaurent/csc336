function first() {
    alert(document.title)
}

function varTest() {
    var x=1;
    if (true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

let sampleArray = [1,2,3,4,5,-2000,7,8,9,-1];
findMin(sampleArray)

function findMin(numArray) {
    let minNum = numArray[0];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < minNum) {
            minNum = numArray[i];
        } 
    }
    document.write("The minimum value is "+minNum+"<br>");
}

let num = -12345
reverseNumber(num)
function reverseNumber(num) {
    let numString = Math.abs(num).toString();
    document.write("The original value is "+num+"<br>");
    numReverse = numString.split("").reverse().join("");
    if (num < 0) {
        document.write("The reversed value is -"+numReverse+"<br>");
    } else {
        document.write("The reversed value is "+numReverse+"<br>");
    }

}

function numGuesser() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    guess = prompt("Guess an answer between 1 and 10");
    if (guess != randomNum) {
        if (guess > randomNum) {
            document.write("No Match! Too High")
        } else {
            document.write("No Match! Too Low!")
        }
    } else {
        document.write("Yes Match!")
    }
}

let str = "I am very very tired and sad."
splitstr = stringSplitter(str)
alert(splitstr)
document.write(splitstr)
rowWriter(splitstr)

function stringSplitter(str) {
    strArray = str.split(" ")
    return strArray
}

function rowWriter(strArray) {
    document.write("<br>")
    for (let i = 0; i < strArray.length; i++) {
        document.write(strArray[i]+"<br>")
    }
}

function getDate() {
    var d = new Date()
    
}
