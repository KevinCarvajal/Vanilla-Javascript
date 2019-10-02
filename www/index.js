let body = document.querySelector('body');

let div = document.createElement('div');
div.innerHTML = 'Hej! Jag är en div.';
body.append(div);

let p = document.createElement('p');
p.innerHTML = 'Hi! I am a p-tag!';
div.append(p);

div.setAttribute('class', 'fine-div');
