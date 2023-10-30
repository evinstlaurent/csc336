function addEntry() {
      let date = new Date();
      let entryDate = (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + (date.getFullYear());
      let title = document.getElementById("title").value;
      let photoURL = document.getElementById("photo").value;
      let entryText = document.getElementById("inputText").value;
      let allEntries = document.getElementById("entries").innerHTML;
      if (entryText == "") {
            alert("Please write something about yourself :)");
            return;
      }
      allEntries = `<div class="entry"><h2 class="entryHeader"><span class="date">${entryDate}:</span> ${title}</h2><div class="entryContent"><img src="${photoURL}"><div class="entryText">${entryText}</div></div></div>` + allEntries;
      document.getElementById("entries").innerHTML = allEntries;
}

function clearForm(){
      document.getElementById("title").value = "";
      document.getElementById("photo").value = "";
      document.getElementById("inputText").value = "";
}

function clearEntries(){
      document.getElementById("entries").innerHTML = "";
}
  

