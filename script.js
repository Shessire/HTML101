function Hello() {
    alert("Hello, world");
    console.log("The button has been clicked");
    document.getElementById("button").innerHTML = "buttton clicked";
}

console.log('Hello World!')

let email = 'www@gmail.com'
console.log(email);

let bidmas = 5*(10-3)**2;
console.log(bidmas);

let selectedFruits = ['apple', 'banana', 'orange'];
selectedFruits [3] = 'Pineapple';
selectedFruits [1] = 'Roseapple'
console.log(selectedFruits[3]);
console.log(selectedFruits.length);

let user = {
        firstName: 'P',
        email: 'p@gmail.com',
        age: 26,
        location: 'TH',
        readingList: ['HTML', 'CSS', 'JS'],
}

console.log(user);
console.log(user.email)
user.age = 50;
console.log(readingList[2]);
console.log(readingList.length-1); //choose the last one of array

let x = 123;
x = 'me';
console.log(x);
console.log(typeof x);