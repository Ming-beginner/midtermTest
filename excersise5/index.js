//1
let customer = Number(prompt(" Ex1: Enter the number of customers:"));
let pizza = Number(prompt("Enter the number of pizza"));

console.log("the average pizza pieces for each person: " + String((pizza * 8) / customer));

//============================================

//2
let temp = Number(prompt("Ex2: Enter today's temperature"));
let result = "";
if (temp < 40 && temp >= 25) {
    result = "Hot";
} else if (temp < 25 && temp >= 15) {
    result = "Cool";
} else if (temp < 15 && temp >= 0) {
    result = "Cold";
} else if (temp < 0 && temp >= -12) {
    result = "Extra cold";
} else {
    result = "Can't live";
}

console.log(result);
//================================================

//3
for (let i = 0; i <= 10; i++) {
    let name = prompt("Ex3: Enter your name: ");
    console.log(name);
}

//=======================================================

//4
let a = Number(prompt("Enter the first number to calculate: "));
let b = Number(prompt("Enter the second number to calculate: "));

function sumCalculator(a, b) {
    console.log(a + b);
}

sumCalculator(a, b);

//===========================================

//5

let student = {
    name: "David",
    job: "Coder",
    address: "America",
    age: 40
}

console.log(student);

//==========================================

//6

let itemsArray = ["Jeans", "T-shirt", "Short"];

console.log(itemsArray);

//============================================

//7

function creatItem() {
    let newItem = prompt("Enter the new product");
    itemsArray.push(newItem);
    getItems();
}

function getItems() {
    console.log(itemsArray);
}

function deleteItem() {
    getItems();
    let itemIndex = Number(prompt("Enter the index of the item that you want to delete"));
    delete itemsArray[itemIndex];
    getItems();
}

function updateItem() {
    getItems();
    let needUpdateItem = Number(prompt("Which index of item do you want to change?"));
    let updateItem = prompt("What item do you want to insert?");
    itemsArray[needUpdateItem] = [updateItem];
    getItems();
}
let running = true;
while (running) {
    let crud = prompt("What do you want to do?(Type 'c', 'r','u', 'd' ").toLowerCase();
    if (crud === 'c') {
        creatItem();
    } else if (crud === 'r') {
        getItems();
    } else if (crud === 'd') {
        let delItemNumber = Number(prompt("How many items do you want to delete?"));
        for (let i = 0; i < delItemNumber; i++) {
            deleteItem();
        }
    } else if (crud === "u") {
        let upgradeItemNumber = Number(prompt("How many items do you want to change?"));
        for (let i = 0; i < upgradeItemNumber; i++) {
            updateItem();
        }
    } else {
        alert("Wrong command!! Try again");
    }
    let continueCrud = prompt("Do you want to do it again?(y for yes, type anything else to end the program)").toLowerCase()
    if (continueCrud !== 'y') {
        running = false;
    }
}