/**
 * We  can create a class using the class keyword
 * 
 */
class Person{
    name;
    constructor( name ) {
        this.name = name;
    }
    intoduceSelf() {
        console.log(`Hi I'm ${this.name}`)
    }
}
const mure = new Person( "Mure" )
mure.intoduceSelf()