namespace Subjects {
  // Declaration merging to add experienceTeachingJava to Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number; // Optional prop
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingJava
        ? `Available Teacher: ${this.teacher.firstName}`
        : 'No available teacher';
    }
  }
}
