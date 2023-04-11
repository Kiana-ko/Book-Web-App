
// ** Kiana's Book Web App Assignment ** //

const submitBookInfo = (event) => {
    event.preventDefault();// Responsible for stopping the page from reloading, the page being reloaded stops the info from being submited into the console log.
    // If we don't add this the page reloads after clicking the Sumbit button and we won't be able to see the info which is typed by user
  
     // == * Responsible for Priniting out inputed book name and description to the console log: * == //
    let BookName = document.getElementById("title").value;
    console.log("Book Name: " + BookName);
  

    let BookDescription = document.getElementById("description").value;
    console.log("Book Description: " + BookDescription);
  }

/* There's also a toggle that requires the user to select an author from a list of authors displayed by the 
toggle which needs a function but I don't know how to make that work! */