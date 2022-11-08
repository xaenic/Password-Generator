

class Dog {
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    
    get () {
        return [this.name, this.color];
    }

    set (name,color) {
        this.name= name;
        this.color = color
    }
}


const dog = new Dog("olok", "red")

console.log(dog.name);