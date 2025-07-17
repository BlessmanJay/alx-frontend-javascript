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
