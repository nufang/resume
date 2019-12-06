function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user = { firstName: "Li", lastName: "tissst" };
document.body.innerHTML = greeter(user);
