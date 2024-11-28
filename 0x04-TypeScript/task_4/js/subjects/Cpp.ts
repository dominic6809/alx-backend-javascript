namespace Subjects {
  // Declaration merging to add experienceTeachingC to Teacher interface
  export interface Teacher {
    experienceTeachingC?: number; // Optional property
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingC
        ? `Available Teacher: ${this.teacher.firstName}`
        : 'No available teacher';
    }
  }
}
