//inside the form there is created input elements..
//first input
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("class", "input-field");
input.setAttribute("id", "saving");
input.setAttribute("placeholder", "namn");

//second input
let input2 = document.createElement("input");
input2.setAttribute("type", "text");
input2.setAttribute("class", "input-field");
input2.setAttribute("id", "saving2");
input2.setAttribute("placeholder", "telefon");

//third input
let input3 = document.createElement("input");
input3.setAttribute("type", "text");
input3.setAttribute("class", "input-field");
input3.setAttribute("id", "saving3");
input3.setAttribute("placeholder", "email");

//create button
let button = document.createElement("button");
button.setAttribute("value", "text");
button.setAttribute("class", "color");
button.setAttribute("id", "save");
button.innerHTML = "Spara knapp";

//render out elements into another element..
formdiv.append(input, input2, input3, button);

let div = document.createElement("div");
div.setAttribute("class", "col");
formdiv.append(div);

let div2 = document.createElement("div");
div2.setAttribute("class", "col");
formdiv.append(div2);

let div3 = document.createElement("div");
div3.setAttribute("class", "col");
formdiv.append(div3);

let div4 = document.createElement("div");
div4.setAttribute("class", "col");
formdiv.append(div4);

div.append(input);
div2.append(input2);
div3.append(input3);
div4.append(button);

//button click function.
document.getElementById("save").onclick = function() {
  //get values from input fields id
  document.getElementById("saving").value;
  document.getElementById("saving2").value;
  document.getElementById("saving3").value;

  //if they are empty generate alert/false
  if (input.value === "" || input2.value === "" || input3.value === "") {
    alert("Please fill in all the input fields");
    return false;
  }

  //if input values arent empty
  //we create a new div below
  if (
    input.value === input.value ||
    input2.value === input2.value ||
    input3.value === input3.value
  ) {
    //creating div
    let contactdiv = document.createElement("div");
    contactdiv.setAttribute("class", "contact");
    body.append(contactdiv);

    //create p elements
    let infoName = document.createElement("p");
    infoName.setAttribute("class", "Name");
    infoName.setAttribute("id", "myName");
    let infoPhone = document.createElement("p");
    infoPhone.setAttribute("class", "Phone");
    let infoEmail = document.createElement("p");
    infoEmail.setAttribute("class", "Email");

    //Edit button
    let infoEdit = document.createElement("button");
    infoEdit.setAttribute("id", "Edit");
    infoEdit.innerHTML = "Redigera";

    //Save button
    let infoSave = document.createElement("button");
    infoSave.setAttribute("id", "Save");
    infoSave.innerHTML = "Spara";

    //div inside contact.
    let infodiv = document.createElement("div");
    infodiv.setAttribute("class", "contact-info");
    contactdiv.append(infodiv);

    //div inside contact-info
    let insidediv = document.createElement("div");
    insidediv.setAttribute("class", "info");
    infodiv.append(insidediv);

    //type out the value that was written in input
    infoName.innerHTML = ["Namn: " + input.value];
    infoPhone.innerHTML = ["Telefon: " + input2.value];
    infoEmail.innerHTML = ["Email: " + input3.value];

    insidediv.append(infoName, infoPhone, infoEmail, infoEdit);

    const person = {
      printIntroduction: function() {
        console.log(
          ` Name: ${this.name}\n Phone: ${this.phone} \n Email: ${this.email}`
        );
      }
    };

    const me = Object.create(person);
    me.name = input.value;
    me.phone = input2.value;
    me.email = input3.value;

    me.printIntroduction();

    //STORAGE
    if ((!store.name, !store.phone, !store.email)) {
      // This should only run once
      // because on next page load there should
      // be a saved values in the store
      store.name = input.value;
      store.phone = input2.value;
      store.email = input3.value;
      store.save();
      console.log("store: " + store.name, store.phone, store.email);
    }

    //just testing
    let input4 = document.createElement("input");
    input4.setAttribute("id", "Spara");

    //edit button
    document.getElementById("Edit").onclick = function() {
      // document.getElementById("myName").contentEditable = true;

      if (!store.name === false) {
        infoName.innerHTML = "";
        infoName.append(input4, infoSave);
      }

      //save edit button
      document.getElementById("Save").onclick = function() {
        if (input4.value === "") {
          alert("fill in or intterupt");
          return false;
        }
        if (input4.value === input4.value) {
          infoName.innerHTML = ["Name: " + input4.value];
          console.log("save");
        }
      };

      event.preventDefault();
    };
  }

  //alerting when button is pressed the values
  event.preventDefault();
};
