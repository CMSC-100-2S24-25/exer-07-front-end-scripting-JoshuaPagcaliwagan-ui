// Joshua O. Pagcaliwagan CMSC 100 C-1L Exer 7 Front End Scripting
const form = document.getElementById("foodForm");// get form element from html
const foodContt = document.getElementById("foodCont");// get container for food cards

// event listener to form to submit
form.addEventListener("submit", (event) => {
  event.preventDefault(); //so form won't refresh when submitted
  
  // get user input values
  const namee = document.getElementById("foodName").value;
  const desc = document.getElementById("foodDesc").value;
  const img = document.getElementById("foodImg").value;
  const rank = document.getElementById("foodRank").value;
  
  //check if all fields are filled, and rank is a number
  if (!namee || !desc || !img || rank === "" || isNaN(rank)) {
    alert("Hey come on, tell us more :)"); // alert if input is invalid
    return; //stop cuz invalid
  }
  
  //create new food card (div) element
  const foodCardd = document.createElement("div");
  foodCardd.className = "foodCard"; //CSS class for styling
  foodCardd.setAttribute("trueRank", rank); // store rank as data attribute
  
  //html struc for food card
  foodCardd.innerHTML = `
        <img src="${img}" alt="${namee}"> <!-- image with alt text -->
        <h3>${namee}</h3> <!-- food name -->
        <p>${desc}</p> <!-- description -->
        <button class="delbut">Delete</button> <!-- delete button -->
    `;
  
  // get delete button in food card
  const delBut = foodCardd.querySelector(".delbut");
  
  // event listener for delete button
  delBut.addEventListener("click", () => {
    foodContt.removeChild(foodCardd); // remove food card when clicked
  });
  
  const cards = Array.from(foodContt.children); // turn food cards to array
  cards.push(foodCardd);// add new food card to array
  
  // sort food cards based on rank
  cards.sort((a, b) => {
    const rA = parseInt(a.getAttribute("trueRank"));
    const rB = parseInt(b.getAttribute("trueRank"));
    return rA - rB;
  });
  
  foodContt.innerHTML = "";// clear food container to put back sorted cards
  
  // append sorted food cards to container
  cards.forEach(card => foodContt.appendChild(card));
  
  // reset form fields after adding food card
  form.reset();
});

/*References:
https://www.w3schools.com/jsref/event_preventdefault.asp
https://www.w3schools.com/jsref/jsref_isnan.asp
https://www.w3schools.com/jsref/prop_html_innerhtml.asp
https://www.w3schools.com/jsref/met_document_queryselector.asp
https://www.w3schools.com/jsref/jsref_from.asp
https://www.w3schools.com/jsref/jsref_push.asp
https://www.w3schools.com/js/js_array_sort.asp
https://www.w3schools.com/jsref/jsref_parseint.asp
https://www.w3schools.com/jsref/jsref_foreach.asp
*/