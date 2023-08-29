class PersonNegativeExample {
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

    //This method is more related to a Single person
    sendLoveEmoji(): string {
        return `hey <3`;
       }
  }
  
  class SinglePersonNegativeExample {
    name: string;
    id: number;
  
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  
    //Methods can be shared but they should be according to the class responsability if the method is not quite related and can be 
    //refactored into a other class that could be more accurate about the proporse of it 
    introduce(): string {
      return `Hi, I'm still single: ${this.name}.`;
    }
  
    // Methods related to single status
    findMatch(): string {
      return `You have found a match`;
    }

    //This looks more like a Person method due to is general and not related to date activities
    getID(): string {
        return `your ID is ${this.id}`;
      }
  }
  