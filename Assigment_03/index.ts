//base Class: Person
class Person 
{
    constructor(public name: string, public age: number) {}
  
    displayInfo(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  //derived Class: Student
  class Student extends Person 
  {
    constructor(
      name: string,
      age: number,
      public studentId: number,
      public course: string,
      public semester: number
    ) {
      super(name, age);
    }
  
    displayStudentInfo(): void 
    {
      this.displayInfo();
      console.log(`Student ID: ${this.studentId}, Course: ${this.course}, Semester: ${this.semester}`);
    }
  }
  
  //derived Class: Staff
  class Staff extends Person 
  {
    constructor(
      name: string,
      age: number,
      public staffId: number,
      public department: string,
      public position: string
    ) {
      super(name, age);
    }
  
    displayStaffInfo(): void 
    {
      this.displayInfo();
      console.log(`Staff ID: ${this.staffId}, Department: ${this.department}, Position: ${this.position}`);
    }
  }
  
  //creating instances and testing
  const student1 = new Student("Alice Johnson", 20, 101, "Computer Science", 3);
  const student2 = new Student("Bob Smith", 22, 102, "Mathematics", 5);
  const staff1 = new Staff("Dr. Emily White", 45, 201, "Physics", "Professor");
  const staff2 = new Staff("Mr. Mark Brown", 38, 202, "Administration", "Clerk");
  console.log("Student Records:");
  student1.displayStudentInfo();
  student2.displayStudentInfo();
  
  console.log("saff Records:");
  staff1.displayStaffInfo();
  staff2.displayStaffInfo();
  