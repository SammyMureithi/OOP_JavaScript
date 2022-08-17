class Person{
    fname;
    lname;
    constructor( fname,lname) {
        this.fname = fname;
        this.lname=lname
    }
    introduceSelf() {
        console.log(`Hi am ${this.fname}`)
    }
    fullname() {
        return this.fname+ " "+ this.lname
    }
}

//let's create a Professor class which is a child class of our Person class
//professor class is to override the intoduceSelf() method and also inherit name property from our Person class constructor
class Professor extends Person{
    //we define our profesor properties
    teaches
    //define our constructor
    constructor( fname, lname, teaches ) {
        //here we are getting our firstname and lastName from our super class 'Person'
        super( fname, lname );
        this.teaches = teaches;
    }
    //we can now override our intoduceSelf method
    intoduceSelf() {
        console.log(`Hello class ,am ${this.fname} ${this.lname} and I will be teaching you ${this.teaches}`)
    }
    //we can now right our method that needs not to be inherited from our super class
    todaysLesson() {
        console.log(`Today will be learning about intoduction to ${this.teaches}`)
    }
}
const myProffesor = new Professor( "Joseph", "Njoroge", "Calculus" )
myProffesor.intoduceSelf()
myProffesor.todaysLesson()