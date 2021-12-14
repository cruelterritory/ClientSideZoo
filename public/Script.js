
// zoo class
class Zoo {
    constructor(name, numberOfGuests, guestCapacity) {
        this.name = name;
        this.numberOfGuests = numberOfGuests;
        this.guestCapacity = guestCapacity;
        this.animals = [];
    }

    // Add animals to table
    AddAnimal() {

                let animal = null;
                switch(animalType.options[animalType.selectedIndex].text) {
                    case "Platypus":
                        animal = new Platypus(
                            animalName.value,
                            animalAge.value,
                            animalMale.checked ? "Male" : "Female",
                            animalWeight.value,
                            animalYes.checked ? true : false)
                        zoo.animals.push(animal);
                        break;
                    
                    case "Hummingbird":
                        animal = new Hummingbird(
                                animalName.value,
                                animalAge.value,
                                animalMale.checked ? "Male" : "Female",
                                animalWeight.value,
                                animalYes.checked ? true : false)
                            zoo.animals.push(animal);
                        break;

                    case "Shark":
                        animal = new Shark(
                            animalName.value,
                            animalAge.value,
                            animalMale.checked ? "Male" : "Female",
                            animalWeight.value,
                            animalYes.checked ? true : false)
                        zoo.animals.push(animal);
                        break;

                    case "Chimpanzee":
                        animal = new Chimpanzee(
                            animalName.value,
                            animalAge.value,
                            animalMale.checked ? "Male" : "Female",
                            animalWeight.value,
                            animalYes.checked ? true : false)
                        zoo.animals.push(animal);
                        break;
                }
    
            Table();
    }

    // Removes animal from table
    RemoveAnimal(row) {
            zoo.animals.splice(row.id, 1);
            Table();
    }

    // update animal in table
    UpdateAnimal(row) {
            EditAnimal(
                animalName.value,
                animalAge.value,
                animalMale.checked ? "Male" : "Female",
                animalWeight.value,
                animalYes.checked ? false : true,
                row
            );
            ClearForm();
    }

    // Admit Guest to zoo
    AdmitGuest(z) {
        if (z.numberOfGuests >= z.guestCapacity) {
            alert("You can't fit anymore people.")
        }
        else {
            z.numberOfGuests += 1;
            admitDisplay.innerHTML = `Number of Guests ${z.numberOfGuests}`;
        }
    }

    // Find animal by name
    FindAnimalByName(name) {
        return this.animals.find(x => x.name === name);
    }
}
// end of zoo class
let zoo = new Zoo("Como", 5, 20);

//admit guest 
let admitButton = document.querySelector("#AdmitButton");
let admitDisplay = document.querySelector("#AdmitDisplay");
admitDisplay.innerHTML = `Number of Guests ${zoo.numberOfGuests}`;
admitButton.addEventListener("click", event => zoo.AdmitGuest(zoo));

// ANimal class
class Animal {
    moveDistance;
    baby;

    constructor(name, age, gender, weight, isPregnant) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.isPregnant = isPregnant;
    }

    Move() {
        console.log("I am an animal");
    }

    MakePregnant(mother) {
        if (this.isPregnant == true || this.gender == "Male") {
            throw "Can not make animal pregnant"
        }
        this.isPregnant = true;
        this.baby = new Animal();
        animalYes.checked = true;
    }

    GiveBirth(a) {
        if (a.isPregnant == true && a.gender == "Female") {
            a.baby = null;
            a.isPregnant = false;
            let baby = new Animal();
            zoo.animals.push(baby);
            Table();
        }
        else {
            throw "No baby to give"
        }
    }
}

// Hummingbird type animal
class Hummingbird extends Animal {
    moveDistance = 5;

    Move() {
        console.log("I am flying");
    }
}

// Platypus animal type class
class Platypus extends Animal {
    moveDistance = 25;

    Move() {
        console.log("I am swimming");
    }
}

// Shark animal type class
class Shark extends Animal {
    moveDistance = 58;

    Move() {
        console.log("I am swimming");
    }
}

// Chimpanzee animal type class
class Chimpanzee extends Animal {
    moveDistance = 12;

    Move() {
        console.log("I am mumkey");
    }
}

/**
 * code for table and buttons
 */
let animalBody = document.getElementById("AnimalBody")
 
 // Get each item in the form to add delete or edit animals
 let animalForm = document.getElementById("AnimalForm");
 let animalName = document.getElementById("NameF");
 let animalType = document.getElementById("Type");
 let animalAge = document.getElementById("AgeF");
 let animalFemale = document.getElementById("Female");
 let animalMale = document.getElementById("Male")
 let animalWeight = document.getElementById("WeightF");
 let animalYes = document.getElementById("Yes");
 let animalNo = document.getElementById("No");
 animalNo.checked = true;
 let animalAdd = document.getElementById("Add");
 let animalNumber = document.getElementById("NumberOfAnimals");
 let makePregnant = document.querySelector("#MakePregnant");

 let animalEdit = document.createElement("Button");
 animalEdit.innerHTML += "Edit";
 animalAdd.addEventListener("click", zoo.AddAnimal);

 // Elements for searching for animals by name
 let searchInput = document.querySelector("#Search");
 let submitSearch = document.querySelector("#SearchButton");
 let displaySearch = document.querySelector("#SearchDisplay");
 submitSearch.addEventListener("click", AnimalSearch);

 function AnimalSearch() {
     let found = zoo.FindAnimalByName(searchInput.value);
     displaySearch.innerHTML = `Animal found: Name ${found.name}, 
        Age ${found.age}, Weight ${found.weight}, Gender ${found.gender},
        Pregnant ${found.isPregnant}, Type ${found.constructor.name}`;

     searchInput.value = null;
 }
 
 function ClearForm() {
     animalName.value = "";
     animalAge.value = "";
     animalWeight.value = "";
     animalYes.checked = false;
     animalNo.checked = false;
     animalFemale.checked = false;
     animalMale.checked = false;
     animalType.selectedIndex = -1;
 };
 
 // Function to edit pre existing animal in table
 function EditAnimal(name, type, age, gender, weight, pregnant, row) {
     animals[row.id] = new Animal(name, age, gender, weight, pregnant);
     Table();
 };
 
 // Function to handle editting of animals in table.
 function FillForm(rowEdit) {
     let list = [...rowEdit.children]
     list.forEach((c) => {
     switch (c.id) {
         case "Name":
             animalName.value = c.innerHTML;
             break;
         
         case "Type":
             switch (c.innerHTML) {
                 case "Platypus" :
                     animalType.selectedIndex = "0";
                     break;
 
                 case "Hummingbird" :
                     animalType.selectedIndex = "1";
                     break;
 
                 case "Shark" :
                     animalType.selectedIndex = "2";
                     break;
 
                 case "Chimpanzee" :
                     animalType.selectedIndex = "3";
                     break;
             };
             break;
 
         case "Age":
             animalAge.value = c.innerHTML;
             break;
 
         case "Gender":
             if(c.innerHTML == "Male") {
                 animalMale.checked = true;
             }
             else {
                 animalFemale.checked = true;
             };
             break;
 
         case "Weight":
             animalWeight.value = c.innerHTML;
             break;
 
         case "Pregnant":
             if(c.innerHTML == "Yes") {
                 animalYes.checked = true;
             }
             else {
                 animalNo.checked = false;
             };
             break;
 
         default:
             break;
 
     }});
 
     animalAdd.remove();
     let animalRemove = document.createElement("Button");
     animalRemove.innerHTML += "Delete";
     animalRemove.addEventListener("click", event => zoo.RemoveAnimal(rowEdit));
     animalForm.appendChild(animalRemove);
     animalForm.appendChild(animalEdit);
     animalEdit.addEventListener("click", event => zoo.UpdateAnimal(rowEdit));
 }
 
 
 
 // Function to re draw the animal table when needed.
 function Table() {
     rowId = 0;
     animalNumber.innerHTML = `Number of Animals: ${zoo.animals.length}`;
 
 
     [...animalBody.childNodes].forEach(c => {
         c.remove();
     });
 
     zoo.animals.forEach((a) => {
         let row = document.createElement("tr");
         row.id = rowId++;
         animalBody.appendChild(row);
 
         let nameElem = document.createElement("td");
         nameElem.id = "Name";
         nameElem.innerHTML += a.name;
         row.appendChild(nameElem);
 
         let typeElem = document.createElement("td");
         typeElem.id = "Type";
         typeElem.innerHTML += a.constructor.name;
         row.appendChild(typeElem);
 
         let ageElem = document.createElement("td");
         ageElem.id = "Age";
         ageElem.innerHTML += a.age;
         row.appendChild(ageElem);
 
         let genderElem = document.createElement("td");
         genderElem.id = "Gender";
         genderElem.innerHTML += a.gender;
         row.appendChild(genderElem);
 
         let weightElem = document.createElement("td");
         weightElem.id = "Weight"
         weightElem.innerHTML += a.weight;
         row.appendChild(weightElem);
 
         let pregnantElem = document.createElement("td");
         pregnantElem.id = "Pregnant";
         pregnantElem.innerHTML += (a.pregnant) ? "Yes" : "No";
         row.appendChild(pregnantElem);

         let button = document.createElement("button");
         button.addEventListener("click", event => a.GiveBirth(a));
         button.innerText = "Birth";
         row.appendChild(button);
         row.addEventListener("dblclick", event => FillForm(row));

 })};

fetch('/newanimal')
    .then(res => res.json())
    .then(data => test(data));

function test(data) {
    const obj = JSON.parse(data);
    let newAnimal = new Animal(obj.name, obj.age, obj.gender, obj.weight, obj.isPregnant);
    zoo.animals.push(newAnimal);
    Table();
}