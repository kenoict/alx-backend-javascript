export const cpp = Subjects.Cpp();
export const java = Subjects.Java();
export const react = Subjects.React();
export const cTeacher: Subjects.Teacher = {firstName: 'Eugene', lastName: 'Joe', experienceTeachingC: 10};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
