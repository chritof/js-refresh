console.log("online...");

const root = document.getElementById('root');
const svarElement = root.getElementsByTagName('p')[0];

root.getElementsByTagName("button")[0].addEventListener("click", convert);

function convert() {
    const input = document.getElementById("input");
    const tallInput = input.valueAsNumber
    const select = root.querySelector("select").value;
    const span = svarElement.getElementsByTagName("span")[0];



    console.log(select);

    if (select === "celsius"){
       const svar = tallInput * (9/5) + 32;
        svarElement.classList.remove("hidden");
        svarElement.textContent = svar + " grader Farenheit!"
    }else if(select === "farenheit"){
       const svar = ((tallInput - 32) * 5 ) / 9;
        svarElement.classList.remove("hidden");
        svarElement.textContent = svar + " grader Celsius!"
    }

}