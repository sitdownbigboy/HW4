/*Question 1 */

/* create function for task 1 */

function task1function() {
    const userInput = prompt("Please enter a number between 2 and 10:")
    
    if (userInput >=2 && userInput <=10) {
    const product = document.getElementById("product");

    product.innerHTML ="Your Input number is: " + userInput; 

    /* Question 2 */
    
    /* Function for task2 */

    function task2function() {
        let division = userInput;

        /* sets counter */
        
        let counter = 0 ;
        while (division >= .000001) {
            division = division/2;
            counter =+ 1
            document.getElementById("question1").innerHTML = 
            "The number of times to divide the number, " +userInput + " by 2 to get a value less than one millionth is " +counter;
        }

    }

    /* Question 3 */

    /*Function for task 3 */

    function task3function(){
        let t="";
        let a;
        for (a= userInput; a > 0; a--) {
            for (b=1; b<=a;b++) {
            t += "*";
            }
            t += "<br>";
        }
        document.getElementById("question2").innerHTML= t;
        }

    task2function();
    task3function();
    }   else {
            const product = document.getElementById("question3");
            product.innerHTML= 'Your input number is ' + userInput + 
            ". The Valid input number is between 2 and 10; please reload this page and try again."
            document.getElementById("question2").style.display = "none";
        }
    }
task1function();