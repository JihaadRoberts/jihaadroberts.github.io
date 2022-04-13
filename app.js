//onclick functions for worked section start
function stateOne(){
    //declare variable
    buttonOne = document.getElementById("freelance-button");
    buttonTwo = document.getElementById("kaotec-button");
    buttonThree = document.getElementById("cafe-button");
    buttonFour = document.getElementById("revelation-audio-button");
    buttonFive = document.getElementById("jumbo-parts-button");

    //reassign classes
    buttonOne.className = "current-job-selected";
    buttonTwo.className = "default-state";
    buttonThree.className = "default-state";
    buttonFour.className = "default-state";
    buttonFive.className = "default-state";

     //declare more variables
     fInfo = document.getElementById("f-container");
     kInfo = document.getElementById("k-container");
     cInfo = document.getElementById("c-container");
     rInfo = document.getElementById("r-container");
     jInfo = document.getElementById("j-container");
 
     //kInfo.className = "visible-container";
     cInfo.className = "hidden-container";
     fInfo.className = "visible-container";
     jInfo.className = "hidden-container";
     rInfo.className = "hidden-container";
     kInfo.className = "hidden-container";
}

function stateTwo(){
    //declare variable
    buttonOne = document.getElementById("freelance-button");
    buttonTwo = document.getElementById("kaotec-button");
    buttonThree = document.getElementById("cafe-button");
    buttonFour = document.getElementById("revelation-audio-button");
    buttonFive = document.getElementById("jumbo-parts-button");

    //reassign classes
    buttonTwo.className = "current-job-selected";
    buttonOne.className = "default-state";
    buttonThree.className = "default-state";
    buttonFour.className = "default-state";
    buttonFive.className = "default-state";

    //declare more variables
    fInfo = document.getElementById("f-container");
    kInfo = document.getElementById("k-container");
    cInfo = document.getElementById("c-container");
    rInfo = document.getElementById("r-container");
    jInfo = document.getElementById("j-container");

    //kInfo.className = "visible-container";
    kInfo.className = "visible-container";
    fInfo.className = "hidden-container";
    cInfo.className = "hidden-container";
    rInfo.className = "hidden-container";
    jInfo.className = "hidden-container";
}

function stateThree(){
    //declare variables
    buttonOne = document.getElementById("freelance-button");
    buttonTwo = document.getElementById("kaotec-button");
    buttonThree = document.getElementById("cafe-button");
    buttonFour = document.getElementById("revelation-audio-button");
    buttonFive = document.getElementById("jumbo-parts-button");
    
    //reassign classes
    buttonThree.className = "current-job-selected";
    buttonTwo.className = "default-state";
    buttonOne.className = "default-state";
    buttonFour.className = "default-state";
    buttonFive.className = "default-state";

    //declare more variables
    fInfo = document.getElementById("f-container");
    kInfo = document.getElementById("k-container");
    cInfo = document.getElementById("c-container");
    rInfo = document.getElementById("r-container");
    jInfo = document.getElementById("j-container");

    //kInfo.className = "visible-container";
    cInfo.className = "visible-container";
    fInfo.className = "hidden-container";
    jInfo.className = "hidden-container";
    rInfo.className = "hidden-container";
    kInfo.className = "hidden-container";
}

function stateFour(){
    buttonOne = document.getElementById("freelance-button");
    buttonTwo = document.getElementById("kaotec-button");
    buttonThree = document.getElementById("cafe-button");
    buttonFour = document.getElementById("revelation-audio-button");
    buttonFive = document.getElementById("jumbo-parts-button");

    buttonFour.className = "current-job-selected";
    buttonTwo.className = "default-state";
    buttonThree.className = "default-state";
    buttonOne.className = "default-state";
    buttonFive.className = "default-state";

     //declare more variables
     fInfo = document.getElementById("f-container");
     kInfo = document.getElementById("k-container");
     cInfo = document.getElementById("c-container");
     rInfo = document.getElementById("r-container");
     jInfo = document.getElementById("j-container");
 
     //kInfo.className = "visible-container";
     cInfo.className = "hidden-container";
     fInfo.className = "hidden-container";
     jInfo.className = "hidden-container";
     rInfo.className = "visible-container";
     kInfo.className = "hidden-container";
}

function stateFive(){
    buttonOne = document.getElementById("freelance-button");
    buttonTwo = document.getElementById("kaotec-button");
    buttonThree = document.getElementById("cafe-button");
    buttonFour = document.getElementById("revelation-audio-button");
    buttonFive = document.getElementById("jumbo-parts-button");

    buttonFive.className = "current-job-selected";
    buttonTwo.className = "default-state";
    buttonThree.className = "default-state";
    buttonFour.className = "default-state";
    buttonOne.className = "default-state";

     //declare more variables
     fInfo = document.getElementById("f-container");
     kInfo = document.getElementById("k-container");
     cInfo = document.getElementById("c-container");
     rInfo = document.getElementById("r-container");
     jInfo = document.getElementById("j-container");
 
     //kInfo.className = "visible-container";
     cInfo.className = "hidden-container";
     fInfo.className = "hidden-container";
     jInfo.className = "visible-container";
     rInfo.className = "hidden-container";
     kInfo.className = "hidden-container";
}

//code to change information blocks on worked section

