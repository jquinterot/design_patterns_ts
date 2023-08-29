export class Person {
    name: string;
    age: number;
    jobStatus: string;
  
    constructor(name: string, age: number, jobStatus: string) {
      this.name = name;
      this.age = age;
      this.jobStatus = jobStatus;
    }
  
    introduce(): string {
      return `Hi, I'm ${this.name}.`;
    }
  
    // Methods related to personal attributes and characteristics
    getJobStatus(): string {
     return `your status is  ${this.jobStatus}`;
    }
  }
  
 export class SinglePerson {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    introduce(): string {
      return `Hi, I'm still single: ${this.name}.`;
    }
  
    // Methods related to single status
    findMatch(): string {
      return `You have found a match`;
    }

    sendDateInvitation(): string {
        return `You have sent a date invitation`;
      }
  }