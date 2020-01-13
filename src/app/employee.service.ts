import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private headers: HttpHeaders;
  private accessPointUrl: string =
    "https://workersdirectorybe20200108024319.azurewebsites.net/api/workers/";

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    });
  }

  getEmps() {
    return this.http.get(this.accessPointUrl);
  }
  getEmp(id) {
    return this.http.get(this.accessPointUrl + id);
  }
  swapRole (emp) {
      //let body = JSON.stringify(emp);
      return this.http.put(this.accessPointUrl, emp, httpOptions);
  }
}
