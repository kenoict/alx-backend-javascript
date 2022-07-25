namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
  
  export class Java extends Subjects {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeaher(): string {
      if (this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
