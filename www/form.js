

//inside the form there is created input elements..
let input = document.createElement("input");
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'name');

let input2 = document.createElement("input");
input2.setAttribute('type', 'text');
input2.setAttribute('placeholder', 'phonenr');

let input3 = document.createElement("input");
input3.setAttribute('type', 'text');
input3.setAttribute('placeholder', 'email');

let button = document.createElement("button");
button.setAttribute('value', 'text');
button.innerHTML = 'Spara knapp';

formdiv.append(input,input2, input3, button);
