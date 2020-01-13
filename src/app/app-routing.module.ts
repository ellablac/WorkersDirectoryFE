import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { EmployeeService } from "./employee.service";
import { EditEmpComponent} from "./edit-emp/edit-emp.component";
import { EmplyeePositionComponent } from "./emplyee-position/emplyee-position.component"

const routes: Routes = [

  {
    path: 'edit-emp/:id',
    component: EditEmpComponent
  },
  {
    path: '',
    component: EmplyeePositionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [EmployeeService]
})
export class AppRoutingModule {}
