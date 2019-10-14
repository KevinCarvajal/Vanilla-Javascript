const [listen, unlisten] = (() => {
 
  let listeningOnType = {};
  let listeners = [];
 
  function listen(eventType, cssSelector, func){
    // Register a "listener"
    let listener = {eventType, cssSelector, func};
    listeners.push(listener);
    // If no listener on window[eventType] register a 
    // a real/raw js-listener
    if(!listeningOnType[eventType]){
      // add event listener for this type on the whole window
      window.addEventListener(eventType, e => {
        listeners
          .filter(x => x.eventType === eventType)
          .forEach(listener => {
            if(e.target.closest(listener.cssSelector)){
              listener.func(e);
            }
        });
      });
      listeningOnType[eventType] = true;
    }
    return listener;
  }
 
  function unlisten(listener){
    listeners.splice(listeners.indexOf(listener), 1);
  }
 
  return [listen, unlisten];
 
})();
 
// We can listen
let listener1 = listen('click', 'button', e => {
  console.log('You clicked a button');
});
 
// We can unlisten - try commenting in this line:
// unlisten(listener1);

//-------------------------

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
input2.setAttribute('placeholder', 'phone');

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
    
    if(input.value === "" ||
       input2.value ==="" ||
       input3.value === ""){
        alert("Please fill in all the input fields")
        return false;
    }
    

    if(input.value === input.value ||
    input2.value === input2.value ||
    input3.value === input3.value){
        //create p elements if input is changed..
        let infoName =  document.createElement('p');
        infoName.setAttribute('class', 'Name');
        infoName.setAttribute('id', 'myName');
        let infoPhone = document.createElement('p');
        infoPhone.setAttribute('class', 'Phone');
        let infoEmail = document.createElement('p');
        infoEmail.setAttribute('class', 'Email');
        //Edit button
        let infoEdit = document.createElement('button');
        infoEdit.setAttribute('id', 'Edit');
        infoEdit.innerHTML = 'Redigera';

        //div inside contact.
        let infodiv = document.createElement('div')
        infodiv.setAttribute('class', 'contact-info')
        contactdiv.append(infodiv);

        //div inside contact-info
        let testdiv = document.createElement('div')
        testdiv.setAttribute('class', 'info')
        infodiv.append(testdiv);

       //type out the value that was written in input
        infoName.innerHTML = input.value;
        infoPhone.innerHTML = input2.value;
        infoEmail.innerHTML = input3.value;

        testdiv.append(infoName,infoPhone,infoEmail, infoEdit)

    }

    document.getElementById('Edit').onclick = function(){
        // document.getElementById("myName").contentEditable = true;
          console.log("The p element inside Contact-Info should be editable.");
        event.preventDefault()
    }   

    
    //alerting when button is pressed the values
    console.log("Name: " + save + " "+ "\n" + "Phone: " + save2 + "\n" + "Email: " + save3)
    event.preventDefault()
}



