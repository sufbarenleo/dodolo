interface Student {
  name: string;
  age: number;
  roll: number;
  department: string;
  // Additional properties can be added here
}

// The 'dept' type will have all properties from 'Student' except 'age' and 'roll'
type Dept = Omit<Student, 'age' | 'roll'>;

// Example usage of 'Dept' type
const departmentMember: Dept = {
  name: 'Alice',
  department: 'Physics'
  // 'age' and 'roll' are intentionally omitted
};

// Function to display department member details
function displayDepartmentMember(member: Dept): void {
  console.log(`Name: ${member.name}, Department: ${member.department}`);
}

// Displaying the department member details
displayDepartmentMember(departmentMember);
