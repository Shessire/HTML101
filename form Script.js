// const gJavascript = document.querySelector('#reading-list li:nth-child(2) .name');
// console.log(gJavascript);
// gJavascript.innerHTML = 'advgbvwrbew';

// const readingList = document.querySelectorAll('#reading-list li .name');
// readingList.forEach(function(list) {
//     list.textContent = 'book title: ' + list.textContent;
// })


class User {
    constructor (name, birthdate, gender) {
        this._name = name;
        this._birthdate = birthdate;
        this._gender = gender;
        this._logIn = 0;
    }

    get name() {
        return this._name;
    }

    get birthdate() {
        return this._birthdate;
    }

    get gender() {
        return this._gender;
    }

    logIn () {
        this._logIn++;
    }
}

class PrivUser extends User {
    constructor (name, birthdate, gender, access) {
        super (name, birthdate, gender);
        this._access = access;
    }

    get access () {
        return this._access = access;
    }
}
let User1 = new User ('Pond', '2/2/22', 'male');
let User2 = new PrivUser('Pondd', '2/3/22', 'male', true);