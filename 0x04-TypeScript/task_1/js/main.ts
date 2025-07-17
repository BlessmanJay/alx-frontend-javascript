// Task 1. Defining the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Creating the Teacher object using the interface
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

// --------------------------------------------------

// Task 2. Extending the Teacher Interface

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example object using Directors interface
const director1: Directors = {
  firstName: "John",
  fullTimeEmployee: true,
  lastName: "Doe",
  location: "London",
  numberOfReports: 17,
};

console.log(director1);

// --------------------------------------------------

// Task #3: Printing Teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// --------------------------------------------------

// Task #4: Writing a Class
// interface to describe the student
interface StudentClassInterface {
  workOnHomeWork(): string;
  displayName(): string;
}

// Interface to describe the constructor
interface StudentConstuctor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Implement a class using the interface
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomeWork(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomeWork());

// --------------------------------------------------

// Task #5
// Interfaces for Director and Teacher
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Factory function createEmployee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Testing
console.log(createEmployee(200)); // Teacher instance
console.log(createEmployee(1000)); // Director instance
console.log(createEmployee("$500")); // Director instance
