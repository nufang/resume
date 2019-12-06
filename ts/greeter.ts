/*
function greeter(person:string){
    return "Hello,"+person;
}
let user="Jane User";
document.body.innerHTML=greeter(user);*/
interface Person{
    firstName:string;
    lastName:string;
}
function greeter(person:Person){
    return "Hello,"+person.firstName+" "+person.lastName;
}
let user={firstName:"Li",lastName:"tissst"};
document.body.innerHTML=greeter(user);