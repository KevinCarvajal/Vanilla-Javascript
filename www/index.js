let body = document.querySelector('body');

let container = document.createElement('div')
container.setAttribute('class', 'container');
body.append(container)

let form = document.createElement('form')
form.innerHTML = '<h2>hej jag är en form</h2>';
form.setAttribute('class', 'form-input');
container.append(form);



let formdiv = document.createElement('div')
 formdiv.setAttribute ('class', 'form-inside')
 form.append(formdiv)
        











