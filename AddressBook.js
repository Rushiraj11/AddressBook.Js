console.log("Welcome to AddressBook System");
class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() { 
        return this._firstName;
     }
    set firstName(firstName) {
        let firstNameRegex=RegExp('^[A-Z][a-zA-Z0-9]{2,}$')
        if(firstNameRegex.test(firstName))// checking input name according to regex pattern
            this._firstName = firstName;
        else
            throw 'First name is invalid';    // throwing error incase input is not matching regex pattern
    }

    get lastName() { 
        return this._lastName;
     }
    set lastName(lastName) {
        let lastNameRegex=RegExp('^[A-Z][a-zA-Z0-9]{2,}$')
        if(lastNameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw 'Last name is invalid';   
    }

    get address() { 
        return this._address;
     }
    set address(address) {
        let addressRegex = RegExp('^[a-zA-Z0-9]{4,}$');
        if (addressRegex.test(address)) {
            this._address = address;
        }
        else {
            throw 'Address is invalid';
        }
    }

    get city() { 
        return this._city;
     }
    set city(city) {
        let cityRegex = RegExp('^[a-zA-Z]{4,}$');
        if (cityRegex.test(city)) {
            this._city = city;
        }
        else {
            throw "City is Invalid";
        }
    }

    get state() { 
        return this._state;
     }
    set state(state) {
        let stateRegex = RegExp('^[a-zA-Z]{3,}$');
        if (stateRegex.test(state)) {
            this._state = state;
        }
        else {
            throw "State is Invalid";
        }
    }

    get zip() {
         return this._zip;
     }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9][0-9]{2}[\\s]{0,1}[0-9]{3}$');
        if (zipRegex.test(zip)) {
            this._zip = zip;
        }
        else {
            throw "Zip code is invalid";
        }
    }

    get phoneNumber() { 
        return this._phoneNumber;
     }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[0-9]{10}$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else {
            throw "Phone number is Invalid";
        }
    }

    get email() {
         return this._email;
         }
    set email(email) {
        let emailRegex = RegExp("^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9](([.+-_][a-zA-Z0-9]+)?)[@][a-zA-Z0-9]+[.]([a-z]{2,3})([.][a-zA-z]{2})?$");
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else {
            throw "Email is Invalid";
        }
    }

    toString() {
        return "First name ="+ this.firstName +" Last name = " + this.lastName +"\n Address ="+ this.address+"\n City ="+ 
                this.city+"\n State ="+ this.state+"\n zip ="+ this.zip+"\n Phone ="+ this.phoneNumber+"\n Email ="+ this.email;
    }

}

let contact1 = new Contact("Rushiraj","Ghatge","Pimpri","Pune","Maharashtra","411019","8178987656","rjgop@gmail.com"); 
let contact2 = new Contact("Aditya","Deshmukh","Dhankawadi","Nashik","Maharashtra","411043","7364586372","mark@gmail.com");
let contact3 = new Contact("Rahul","Gaikwad","Baga","SouthGoa","Goa","311043","8956236372","Rgk12@gmail.com");
let addressBook=new Array();
addContact(contact1);
addContact(contact2);
addContact(contact3);

function addContact(contact){
    if (!contactPresent(contact.firstName)) // if given input first name is not present it will push to addressbook
        addressBook.push(contact)
}
function contactPresent(firstName) {
    return addressBook.some(contact => contact.firstName == firstName);// checking if contact present or not using some method(boolean)
}
//console.log(addressBook);

function editContactInformation(firstName,choice,newValue) { // Editing the contact by using first name as refrence
    if (contactPresent(firstName)) {
        switch (choice) {
            case 1: addressBook.find((contact) => contact.firstName == firstName).firstName = newValue; //find method to check if contact present in addressbook
                break;
            case 2:
                addressBook.find((contact) => contact.firstName == firstName).lastName = newValue;
                break;
            case 3:
                addressBook.find((contact) => contact.firstName == firstName).address = newValue;
                break;
            case 4:
                addressBook.find((contact) => contact.firstName == firstName).city = newValue;
                break;
            case 5:
                addressBook.find((contact) => contact.firstName == firstName).state = newValue;
                break;
            case 6:
                addressBook.find((contact) => contact.firstName == firstName).zip = newValue;
                break;
            case 7:
                addressBook.find((contact) => contact.firstName == firstName).phoneNumber = newValue;
                break;
            case 8:
                addressBook.find((contact) => contact.firstName == firstName).email = newValue;
                break;
            default:
                console.log("Invalid index");
        }
    }
    else {
        console.log("contact not present");
    }
    
}

editContactInformation("Rahul",8,"tony@gmail.com");// calling method to edit contact
editContactInformation(4,"Aditya",2,"Kolhapur");
//console.log(addressBook);

function deleteContact(firstName){
    if(contactPresent(firstName))
    addressBook=addressBook.filter(contact=>contact.firstName != firstName);// using filter method to delete valid input contact 
}

deleteContact("Rahul");
console.log(addressBook);


function getCount(){
    let count = addressBook.reduce((total) => total+=1,0); 
    console.log(count);
}
getCount();

let contact4 = new Contact('Rushiraj', 'Laaa', 'OSosoo', 'Pune', 'Gao', '411091', '8189956633', 'swaraj@gmail.com')//Uc7
function duplicateCheck(firstName){
    if(!addressBook.some(contact => contact._firstName != firstName))
    addressBook.push(contact4);
else
  console.log("Contact already Exists!");

}
duplicateCheck("Rushiraj");
console.log(addressBook);

function searchPersonAcrossState(city) {                      //Uc8
    console.log(addressBook.filter(contact=>contact.city==city));
 }

 searchPersonAcrossState("Pune");
