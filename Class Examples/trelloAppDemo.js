function addCard() {
    const apiKey = ;
    const token = ;
    const boardID = ;
    const listID = ;

    const httpRequest = new XMLHttpRequest;

    //project title --> card title
    let cardTitle = document.getElementById("projectIdeaTitle").value;
    //project title --> card title
    let cardDescription = document.getElementById("projectIdeaDescription").value;

    let responseArea = document.getElementById("trelloResponse");

    responseArea.innerHTML = "Adding a Trello Card with the title: " + cardTitle + " and description: " + cardDescription;
    
    // construct Trello API url
    let trelloAPI = `htpps://api.trello.com/1/cards?key=${apiKey}&token=${token}&name=${cardTitle}&desc=${cardDescription}&idList=${listID}`;

    //connect to trello api
    httpRequest.open("POST", trelloAPI);
    httpRequest.send();

    httpRequest.onreadystatechange = (e) => {
        console.log(httpRequest.responseText);
        responseArea.innerHTML = httpRequest.responseText;
    }
}