//function calculates both peoples bmi and returns reuslts to the html file
function calculateBMI() {
    //store all user inputted information values and result section html in variables
    let height1 = document.getElementById("height1").value;
    let weight1 = document.getElementById("weight1").value;
    let height2 = document.getElementById("height2").value;
    let weight2 = document.getElementById("weight2").value;
    let BMIOutput = document.getElementById("bmiResults").innerHTML;

    //check if any of the input field variables were blank
    if (height1, weight1, height2, weight2 == "") {
        alert("Please complete all fields.");
        return;
    }

    //calculate bmi
    let bmi1 = weight1 / height1**2;
    let bmi2 = weight2 / height2**2;

    //append height, weight, and calculated bmi for each person in html to BMIOutput variable
    BMIOutput = BMIOutput + `<div class="outputText">Person 1 Height: ${height1}m<br>Person 1 Weight: ${weight1}kg<br><br>Person 2 Height: ${height2}m<br>Person 2 Weight: ${weight2}kg<br><br><br>Person 1 BMI: ${bmi1}<br>Person 2 BMI: ${bmi2}</div><br><br>`;

    // if bmi1 is larger, html stating this is appended to BMIOutput variable
    if (bmi1 > bmi2) {
        BMIOutput = BMIOutput + '<div class="outputText">Person 1 has a larger BMI<div><br><hr><br>';
    }

    // if bmi2 is larger, html stating this is appended to BMIOutput variable
    if (bmi1 < bmi2) {
        BMIOutput = BMIOutput + '<div class="outputText">Person 2 has a larger BMI<div><br><hr><br>';
    }

    // if bmi1 and bmi2 are the same, html stating this is appended to BMIOutput variable
    if (bmi1 == bmi2) {
        BMIOutput = BMIOutput + '<div class="outputText">Person 1 and Person 2 have the same BMI<div><br><hr><br>';
    }

    // replace the element in the html file with the id bmiResults with the value of BMIOutput
    document.getElementById("bmiResults").innerHTML = BMIOutput;
}

//function clears all bmi fields by setting the elements with the specific input field ids to empty
function clearBMIFields() {
    document.getElementById("height1").value = "";
    document.getElementById("weight1").value = "";
    document.getElementById("height2").value = "";
    document.getElementById("weight2").value = "";
}

//function clears all bmi results by setting the element with the bmiResults id to empty
function clearBMIResults() {
    document.getElementById("bmiResults").innerHTML = "";
}

function calculateWinner() {
    let pandas1 = document.getElementById("pandas1").value;
    let pandas2 = document.getElementById("pandas2").value;
    let pandas3 = document.getElementById("pandas3").value;
    let koalas1 = document.getElementById("koalas1").value;
    let koalas2 = document.getElementById("koalas2").value;
    let koalas3 = document.getElementById("koalas3").value;
    let winnerOutput = document.getElementById("winnerResults").innerHTML;

    if (pandas1, pandas2, pandas3, koalas1, koalas2, koalas3 == "") {
        alert("Please complete all fields.");
        return;
    }

    let pandasAverage = (pandas1*1 + pandas2*1 + pandas3*1) / 3;
    let koalasAverage = (koalas1*1 + koalas2*1 + koalas3*1) / 3;

    winnerOutput = winnerOutput + `<div class="outputText">Panda's Average Score: ${pandasAverage}<br>Koala's Average Score: ${koalasAverage}<div><br>`;

    if (pandasAverage > koalasAverage) {
        if (pandasAverage >= 100) {
            winnerOutput = winnerOutput + `<div class="outputText">Pandas Win!<div><br><hr><br>`;
        } else {
            winnerOutput = winnerOutput + `<div class="outputText">No Winner. Neither team exceeded 100 points :(<div><br><hr><br>`;
        }
    }

    if (koalasAverage > pandasAverage) {
        if (koalasAverage >= 100) {
            winnerOutput = winnerOutput + `<div class="outputText">Koalas Win!<div><br><hr><br>`;
        } else {
            winnerOutput = winnerOutput + `<div class="outputText">No Winner. Neither team exceeded 100 points :(<div><br><hr><br>`;
        }
    }

    if (pandasAverage == koalasAverage) {
        if (pandasAverage >= 100 && koalasAverage >= 100) {
            winnerOutput = winnerOutput + `<div class="outputText">It's a Draw!<div><br><hr><br>`;
        } else {
            winnerOutput = winnerOutput + `<div class="outputText">No Winner. Neither team exceeded 100 points :(<div><br><hr><br>`;
        }
    }

    document.getElementById("winnerResults").innerHTML = winnerOutput;
}

//function clears all points fields by setting the elements with the specific input field ids to empty
function clearPointsFields() {
    document.getElementById("pandas1").value = "";
    document.getElementById("pandas2").value = "";
    document.getElementById("pandas3").value = "";
    document.getElementById("koalas1").value = "";
    document.getElementById("koalas2").value = "";
    document.getElementById("koalas3").value = "";
}

//function clears all winner results by setting the element with the bmiResults id to empty
function clearWinnerResults() {
    document.getElementById("winnerResults").innerHTML = "";
}

function calculateTip() {
    let billCost = document.getElementById("billCost").value;
    let tipOutput = document.getElementById("tipResults").innerHTML;

    if (billCost == "") {
        alert("Please complete all fields.");
        return;
    }

    let tip = billCost >= 50 && billCost <= 300 ? billCost*0.15 : billCost*0.2;

    tip = Math.round(tip*100) /100;

    let total = billCost*1 + tip*1;

    tipOutput = tipOutput + `<div class="outputText">The bill before tip is $${billCost}<br>The tip is $${tip}<br>The total cost is $${total}</div><br><hr><br>`;

    document.getElementById("tipResults").innerHTML = tipOutput;
}

//function clears bill cost field by setting the element with the specific input field id to empty
function clearBillField() {
    document.getElementById("billCost").value = "";
}

//function clears all tip results by setting the element with the bmiResults id to empty
function clearTipResults() {
    document.getElementById("tipResults").innerHTML = "";
}