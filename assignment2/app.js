// 1.Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.
function addNumClosure(number) {
    return function(a) {
      return a + number;
    }
}

let add5 = addNumClosure(5);
console.log(add5(10));

// --------------------------------------------------------------------------------------------------------------------------------------------

// 2. Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.
array1 = [1,3,5,7,9];
let i = 0;
let length = array1.length;
function Search(array1,i,length,value){
    if (i<length){
        if (array1[i] === value) {
            return true;
        } else {
            return Search(array1,i+1,length,value);
        }
    }else{
        return false;
    }
}
let result = Search(array1,i,length,7);
console.log(result);

// --------------------------------------------------------------------------------------------------------------------------------------------

// 3. Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element 
let container = document.querySelector('body');
function insertParagraph(string) {
    let paragraph = document.createElement('p');
    let text = document.createTextNode(string);
    paragraph.appendChild(text);
    container.appendChild(paragraph);
}
insertParagraph("1");
insertParagraph("2");
insertParagraph("3");

// --------------------------------------------------------------------------------------------------------------------------------------------

// 4. Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.
let element = document.querySelector('body');
let ul = document.createElement('ul');
function addListItems(string1) {
    let li = document.createElement('li');
    let string = document.createTextNode(string1);
    li.appendChild(string);
    ul.appendChild(li);
    element.appendChild(ul);
}
addListItems("a");
addListItems("b");
addListItems("c");
addListItems("d");

// --------------------------------------------------------------------------------------------------------------------------------------------

// 5. Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.
function chngBackgroundColor(reference,color) {
    let elem = document.querySelector(reference);
    elem.style.backgroundColor = color;
}
chngBackgroundColor("h1","grey")
chngBackgroundColor("h2","yellow")

// --------------------------------------------------------------------------------------------------------------------------------------------

// 6. Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.
let obj = {
    name:"Ashhad Ahmed",
    contact:"03343580882",
    gender:"Male"
}
function storelocalObject(key,object) {
    localStorage.setItem(key,JSON.stringify(object));
}
storelocalObject('Stud1',obj);

// --------------------------------------------------------------------------------------------------------------------------------------------

// 7. Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.
function retrievelocalObject(key) {
    return JSON.parse(localStorage.getItem(key));
}
console.log(retrievelocalObject('Stud1'));

// 8. Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.
let obj1 = {
    'name':"Ashhad Ahmed",
    'contact':"03343580882",
    'gender':"Male"
}
function addTolocalStorage(obj) {
    for (const key in obj) {
        localStorage.setItem(key,JSON.stringify(obj[key]));
    }
    let newObj = {}
    for (const key in obj) {
        newObj[key] = JSON.parse(localStorage.getItem(key));
    }
    return newObj;
}
console.log(addTolocalStorage(obj1));
