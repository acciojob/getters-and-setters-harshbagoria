//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
		
		
	}
	get name(){
		return name;
}
	get age(){
		return age;
	}
	set age(age){
		this.age = age;
}


	
	
	}

}

class Student extends Person {
		
	study(){
		console.log(`${name} is study`);
		
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${name}is Teaching`);
}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
