let btn1 = document.querySelector("#btn");
let fact = document.querySelector('.fact');

async function randomFact() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    fact.innerHTML = `${data.setup} - ${data.punchline}`;
}

btn1.addEventListener("click", function() {
    console.log("hello");
    randomFact();
});
