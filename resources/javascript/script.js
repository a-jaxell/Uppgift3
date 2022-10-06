
// deklarera variablen state
//   let state = true;
// Gör en funktion som ändrar state mellan true/false vid klick på knappen.

//function changeState(){
//    state =! state;
//}
//onclick="myFunction()"

// Ändra texten till good bye world när state == false

//function titleChange(){
//    if let state 
//}
//document.getElementById("knapp").innerHTML = "Good Bye World";

// Ny kod nedan

       // Genom att tilldela variabeln title ett värde utanför funktionen changeTitle så undviker man att inget händer
        // första gången man klickar på knappen.
        let title = document.getElementById("title").innerHTML;
        
        //Selector and Event listener
        const button = document.querySelector('#clickBtn');
        button.addEventListener('click',changeTitle);

        function changeTitle(){
            // Ternary operator som jag först inte fick att fungera men som nu funkar magiskt.
            // title = (title === "Hello World") ? title = "Goodbye World" : title = "Hello World";
            
            if (title == "Hello World"){
               title = "Goodbye World";
                } else {
                    title = "Hello World";
                }
            return document.getElementById("title").innerHTML = title;
        }
        