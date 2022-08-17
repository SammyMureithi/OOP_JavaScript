class Student{
    //we can make our name property from student to be private by starting property name with a "#""
    #name;
    age;
    constructor( name,age ) {
        this.#name = name
        this.age = age;
    }
    introduceSelf() {
        console.log(`Hi my name is ${this.#name}`)
    }
}
const myStudent = new Student( "Kamau",23 );
myStudent.introduceSelf()
//we cannot access our #name property outside the class Student since it made private

console.log( myStudent.age )

//we could also do the same for methods
/**
 * Private properties and methods can only be accesssed within the class they are declared but not outside
 */

class Employee{
    //here we've made name properrty private therefore only accessible within this class
    #name;
    age;
    rank;
    constructor( name, age, rank ) {
        this.#name = name;
        this.age = age;
        this.rank = rank;
    }
    //lets have a public method that access all the methos and data
    getEmployeeInfo() {
        return this.#getEmployeData()
    }
    //lets have a private method that gets our Employee Data
    //the getEmployeData is only accessible within our class student
    //Cannot be used outside this class
    #getEmployeData() {
        console.log(`My name is ${this.#name}, ${this.age} years old, working as ${this.rank}`)
    }

}
const Employee1 = new Employee( "Sammy", 21, "Project Manager" )
Employee1.getEmployeeInfo()