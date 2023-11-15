function clearInput(section) {
    document.getElementById("title"+section).value = "";
    document.getElementById("content"+section).value = "";
}

var cardNum = 0;
function submitCard(section) {
    cardNum = cardNum + 1;
    console.log(cardNum)
    cardID = "card"+cardNum;
    let cardTitle = document.getElementById("title"+section).value;
    let cardContent = document.getElementById("content"+section).value;
    let cardContainer = document.getElementById("cardContainer"+section).innerHTML;

    if (cardContent == "" || cardTitle == "") {
        alert("Please complete both the title and content sections.");
        return;
    }

    cardContainer = cardContainer + `<div class="card" id="${cardID}" draggable="true" ondragstart=dragStart(event)><h3>${cardTitle}</h3><div>${cardContent}</div></div>`;

    document.getElementById("cardContainer"+section).innerHTML = cardContainer;

    clearInput(section);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dropIt(ev) {
    ev.preventDefault();
    let sourceId = ev.dataTransfer.getData("text/plain");

    let sourceIdEl=document.getElementById(sourceId);
    let sourceIdParentEl=sourceIdEl.parentElement;

    let targetEl=document.getElementById(ev.target.id)
    let targetParentEl=targetEl.parentElement;

    if (targetParentEl.id!==sourceIdParentEl.id){
        if (targetEl.className === sourceIdEl.className ){
            targetParentEl.appendChild(sourceIdEl);
        }else{
            targetEl.appendChild(sourceIdEl);
        }
    }else{
        let holder=targetEl;
        let holderText=holder.textContent;
        targetEl.textContent=sourceIdEl.textContent;
        sourceIdEl.textContent=holderText;
        holderText='';
    } 
}