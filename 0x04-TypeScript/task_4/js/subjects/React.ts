namespace Subjects {
  // Declaration merging to add experienceTeachingReact to Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number; // Optional property
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingReact
        ? `Available Teacher: ${this.teacher.firstName}`
        : 'No available teacher';
    }
  }
}
