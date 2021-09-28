class Human {
    constructor(){}
    speak(){
        console.log('Hello');
    }
}
class Woman extends Human {
    constructor(gender){
        super()
        this.gender = gender
    }
    sex(){
        console.log(`My gender is ${this.gender}`);
    }
}
class Librarian extends Woman {
    constructor(gender, school){
        super(gender)
        this.school = school
    }
    job(){
        console.log(`Alina works ${this.school}`);
    }
}
let librarian = new Librarian('Female', 'school librarian')
console.log(librarian);
librarian.speak()
librarian.sex()
librarian.job()
class Nurse extends Woman{
    constructor(gender, hospital){
        super(gender)
        this.hospital = hospital
    }
    place(){
        console.log(`Olga works in ${this.hospital}`);
    }
}
let nurse = new Nurse('Female', 'Hospital')
console.log(nurse);
nurse.speak()
nurse.sex()
nurse.place()

class Man extends Human{
    constructor(name){
        super()
        this.name = name
    }
    firstname(){
        console.log(`My name is ${this.name}`);
    }
}
class Hunter extends Man{
    constructor(name, activity){
        super(name)
        this.activity = activity
    }
    hobby(){
        console.log(`I love ${this.activity}`);
    }
}
let hunter = new Hunter('Petro', 'hunt')
console.log(hunter);
hunter.speak()
hunter.firstname()
hunter.hobby()
class Worker extends Man{
    constructor(name, work){
        super(name)
        this.work = work
    }
    jobs(){
        console.log(`I love ${this.work}`);
    }
}
let worker = new Worker('Ivan', 'work')
console.log(worker);
worker.speak();
worker.firstname()
worker.jobs()