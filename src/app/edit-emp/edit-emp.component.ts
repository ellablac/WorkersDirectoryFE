import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  public empRecord;
  editForm: FormGroup;
  validMessage: string = "";
  roles: string[] = ['Frontend Developer', 'Backend Developer', 'QA', 'DevOps'];

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      //id: new FormControl(''),
      name: new FormControl({value: '', disabled: true}, Validators.required),
      role: new FormControl('', Validators.required)
    });
    this.getEmployee(this.route.snapshot.params.id);
    
  }
  getEmployee(id) {
    this.employeeService.getEmp(id).subscribe(
      data => {
        this.empRecord = data;
        this.createForm();
        console.log("form created");
      },
      err => console.error(err),
      () => console.log('employees loaded')
    );
  }
  createForm(){
    this.editForm.addControl("id", new FormControl('', Validators.required));
    console.log(this.empRecord);
    this.editForm.patchValue({
     // id : JSON.parse(this.empRecord).id, 
      //name : JSON.parse(this.empRecord).name, 
      //role : JSON.parse(this.empRecord).role
      id : this.empRecord[0].id, 
      name : this.empRecord[0].name, 
      //role : this.empRecord[0].role
    });
  }

  editRecord() {
    if (this.editForm.valid) {
      this.editForm.enable();
      this.employeeService.swapRole(this.editForm.value).subscribe(
        data => {
          this.editForm.disable();
          this.editForm.reset();
          this.router.navigateByUrl('');
          return true;
        },
        error => {
          console.log(error);
        }
      )
    }
    else {
      this.validMessage = "Please fill out the form before submitting";
    }
  }
}
