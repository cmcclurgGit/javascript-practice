function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
};

var person1 = new Person("Jeremy", "McPeak");

alert(person1.getFullName);

function Employee(firstName, lastName, position) {
	Person.call(this, firstName, lastName);
	this.position = position;
}

Employee.prototype = new Person();
Employee.prototype.getFullName = function() {
	var fullName = Person.prototype.getFullName.call(this);
	return fullName + ", " + this.position;
}

var employee = new Employee("Jeremy","McPeak","Programmer");

alert(employee.getFullName);


