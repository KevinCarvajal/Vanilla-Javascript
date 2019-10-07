let body = document.querySelector('body');

let container = document.createElement('div')
container.innerHTML = '<h2>Hej jag är en container</h2>';
container.setAttribute('class', 'container');
body.append(container)

let form = document.createElement('form')
form.innerHTML = '<h2>hej jag är en form</h2>';
form.setAttribute('class', 'form-input');
body.append(form);



let formdiv = document.createElement('div')
let formdiv2 = document.createElement('div')
form.append(formdiv)






