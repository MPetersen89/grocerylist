$(document).ready(function() {

  $("#form").submit(function() {
    const userInput = $("input#groceryItem").val();
    
    let groceryArray = ["Apples"];

    groceryArray.prototype.toString(userInput);
    // groceryArray.prototype.push($(groceryItem).val())

    alert(groceryArray);

    console.log(groceryArray.length)
    console.log(groceryArray)
    
    });

    
  });