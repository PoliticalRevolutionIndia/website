import { Injectable } from '@angular/core';
import { Department } from "../shared/department";
import { DEPARTMENTS } from "../shared/departments";

@Injectable()
export class DepartmentService {

  constructor() { }

  getDepartments(): Department [] {
  		return DEPARTMENTS;
  }

}
