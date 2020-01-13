import { Component, OnInit, Input } from "@angular/core";
import { Employee } from "./employees";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-emplyee-position",
  templateUrl: "./emplyee-position.component.html",
  styleUrls: ["./emplyee-position.component.css"]
})
export class EmplyeePositionComponent implements OnInit {
  @Input() employee: Employee;

  public Emps;
  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.getEmps();
    console.log(this.Emps);
  }

  getEmps() {
    this.empService.getEmps().subscribe(
      data => {
        this.Emps = data;
      },
      err => console.error(err),
      () => console.log("employees loaded")
    );
  }
}
