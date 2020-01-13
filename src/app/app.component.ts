import { Component, Input } from "@angular/core";
import { EMPLOYEES } from "./emplyee-position/employees";
import { EmployeeService } from "./employee.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  /*employees = EMPLOYEES;
  employer: Array<any>;

  constructor(employeeService: EmployeeService) {
    employeeService
      .getEmployees()
      .subscribe((data: any) => (this.employer = data));
  }*/
}
