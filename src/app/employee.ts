export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  directReports?: Array<number>;
  // Task 1 - add new compensation property of type number to employee
  compensation: number;
}
