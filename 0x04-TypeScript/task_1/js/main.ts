interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
    return `${firstName.slice(1, 1)}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

//const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
//  return `${firstName.charAt(0)}. ${lastName}`;
//}

class StudentClass implements studentClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
	this.firstName;
	this.lastName;
    }

    workOnHomework():string {
	return 'Currently working'
    }

    displayName():string {
	return this.firstName;
    }
}

interface studentClassConstructor {
    (firstName: string, lastName: string): studentClassInterface;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);