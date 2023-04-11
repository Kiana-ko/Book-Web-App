
// ** Kiana's Book Web App Assignment ** //

const InputedAuthorInfo = document.getElementById("addingSomeAuthorInfo");

const submitAuthorInfo = (event) => {
    event.preventDefault(); // Responsible for stopping the page from reloading, the page being reloaded stops the info from being submited into the console log.
    // If we don't add this the page reloads after clicking the Sumbit button and we won't be able to see the info which is typed by user

    // == * Responsible for Priniting out Atuthor's email and name to the console log: * == //
    let authorEmail = document.getElementById("BookAuthorEmail").value;
    console.log("Author's Email: " + authorEmail);

    let authorName = document.getElementById("BookAuthorName").value;
    console.log("Author's Name: " + authorName);  
  }

InputedAuthorInfo.addEventListener("submit", submitAuthorInfo);
  


  