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
        this._firstName = firstName;
    }

    get lastName() { 
        return this._lastName;
     }
    set lastName(lastName) {
        this._lastName = lastName;
    }

    get address() { 
        return this._address;
     }
    set address(address) {
        this._address = address;
    }

    get city() { 
        return this._city;
     }
    set city(city) {
        this._city = city;
    }

    get state() { 
        return this._state;
     }
    set state(state) {
        this._state = state;
    }

    get zip() {
         return this._zip;
     }
    set zip(zip) {
        this._zip = zip;
    }

    get phoneNumber() { 
        return this._phoneNumber;
     }
    set phoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
    }

    get email() {
         return this._email;
         }
    set email(email) {
        this._email = email;
    }

    toString() {
        return "First name ="+ this.firstName +" Last name = " + this.lastName +"\n Address ="+ this.address+"\n City ="+ 
                this.city+"\n State ="+ this.state+"\n zip ="+ this.zip+"\n Phone ="+ this.phoneNumber+"\n Email ="+ this.email;
    }

}
let contact = new Contact("Rushiraj","Ghatge","Pimpri","Pune","Maharashtra","411019","878987656","rjgop@gmail.com");
console.log(contact.toString());