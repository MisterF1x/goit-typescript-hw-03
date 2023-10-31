class Key {
    constructor(private signature: number = Math.floor(Math.random() * 1000)){}

    getSignature():number{
        return this.signature;
    }
}

class Person {
    constructor(public name: string, private key: Key){
    }
    getKey(): Key{
        return this.key;
    }
}

abstract class House {
    protected tenants: Person[] = [];
    protected door: boolean;
    protected key : Key;

    comeIn(person: Person):void {
        if (this.door) {
            this.tenants.push(person);
            console.log(`${person.name} has entered the house!`);
        } else{
            console.log(`${person.name} cannot enter the house because the door is closed.`);
        }
    }
public abstract openDoor(key: Key): void;
}

class MyHouse extends House{
    constructor(public key: Key) {
        super();
      }
    public openDoor(key: Key){
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Door is opened!');
        }else{
            this.door = false;
            console.log('Door is closed!')
        }
    }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person('Dave', key);

house.openDoor(person.getKey());

house.comeIn(person);


// export {};