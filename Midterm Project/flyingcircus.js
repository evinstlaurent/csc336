function dropdownQuestion(answer, type, questionNum) {
    let questionNumHTML = document.getElementById("FAQAnswer"+type+questionNum).innerHTML;

    if (questionNumHTML != "") {
        document.getElementById("FAQAnswer"+type+questionNum).innerHTML = "";
        return;
    }

    questionNumHTML = `<div>${answer}</div>`;

    document.getElementById("FAQAnswer"+type+questionNum).innerHTML = questionNumHTML;
}