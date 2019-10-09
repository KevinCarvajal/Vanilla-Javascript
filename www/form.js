
//trying to create a loop..
for(x=0; x<3;x++) {
    let board = document.createElement('div');
    board.className = "test";
    console.log(board)
    }




//inside the form there is created input elements..
//first input
let input = document.createElement("input");
input.setAttribute('type', 'text');
input.setAttribute('class', 'input-field');
input.setAttribute('id', 'saving');
input.setAttribute('placeholder', 'name');

//second input
let input2 = document.createElement("input");
input2.setAttribute('type', 'text');
input2.setAttribute('class', 'input-field');
input2.setAttribute('id', 'saving2');
input2.setAttribute('placeholder', 'tel');

//third input
let input3 = document.createElement("input");
input3.setAttribute('type', 'text');
input3.setAttribute('class', 'input-field');
input3.setAttribute('id', 'saving3');
input3.setAttribute('placeholder', 'email');


//create button
let button = document.createElement("button");
button.setAttribute('value', 'text');
button.setAttribute('class', 'color');
button.setAttribute('id', 'save')
button.innerHTML = 'Spara knapp';


//render out elements into another element..
formdiv.append(input,input2, input3, button);

let div = document.createElement('div');
div.setAttribute('class', 'col');
formdiv.append(div)

let div2 = document.createElement('div');
div2.setAttribute('class', 'col');
formdiv.append(div2)

let div3 = document.createElement('div');
div3.setAttribute('class', 'col');
formdiv.append(div3)

let div4 = document.createElement('div');
div4.setAttribute('class', 'col');
formdiv.append(div4)

div.append(input)
div2.append(input2)
div3.append(input3)
div4.append(button)

//button click function, alerting for now..
document.getElementById('save').onclick = function() {
    let save = document.getElementById('saving').value; 
    let save2 =  document.getElementById("saving2").value;
    let save3 = document.getElementById("saving3").value;
    alert("Name: " + save + " "+ "\n" + "phone: " + save2 + "\n" + "Email: " + save3)
    event.preventDefault()
}

