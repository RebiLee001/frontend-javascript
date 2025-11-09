// js/main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Abuja"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table using vanilla JavaScript
const table = document.createElement("table");
const headerRow = document.createElement("tr");

const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add each student as a new row
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
