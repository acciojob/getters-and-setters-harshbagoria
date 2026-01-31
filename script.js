//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
		
		
	}
	get name(){
		return _name;
}
	get age(){
		return _age;
	}

	set name (){
      this._name = name;
	}
	set age(age){
		this.age = _age;
}


	
	
	}



class Student extends Person {
		
	study(){
		console.log(`${this._name} is study`);
		
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this._name}is Teaching`);
}
}
let Student1 = new Student("Harsh",25);
Student1.name = "Bagoria"
Student1.study();
let Teacher1 = new Teacher("vikas",56);
Teacher.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
