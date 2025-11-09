// task_1/js/main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;        // Only modifiable during initialization
  readonly lastName: string;         // Only modifiable during initialization
  fullTimeEmployee: boolean;         // Always defined
  yearsOfExperience?: number;        // Optional
  location: string;                  // Always defined
  [key: string]: any;                // Allows additional properties like contract
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Additional property allowed
};

console.log(teacher3);
