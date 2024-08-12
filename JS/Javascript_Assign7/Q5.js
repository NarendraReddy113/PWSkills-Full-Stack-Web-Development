const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
  };
  
//   for (const property in student) {
//     if (student.hasOwnProperty(property)) { // Check if the property belongs to the student object itself
//       console.log(`${property}: ${student[property]}`);
//     }
//   }

for (const property in student) {
    if (student.hasOwnProperty(property)) {
      const value = student[property];
      
      if (typeof value === 'string') {
        console.log(`${property} (string): ${value.toUpperCase()}`); // Convert string properties to uppercase
      } else if (typeof value === 'number') {
        console.log(`${property} (number): ${value + 1}`); // Increment numeric properties by 1
      } else if (typeof value === 'boolean') {
        console.log(`${property} (boolean): ${value ? 'Yes' : 'No'}`); // Convert boolean properties to 'Yes' or 'No'
      }
    }
  }
  