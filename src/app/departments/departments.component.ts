import { Component, OnInit } from '@angular/core';
import { Department } from "../shared/department";

import { DepartmentService } from "../services/department.service"
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments : Department[];
  selectedDepartment: Department;
  constructor(private departmentService : DepartmentService ) { }

  ngOnInit() {
    this.departments = this.departmentService.getDepartments();
  }

  onSelect(department : Department) {
    this.selectedDepartment = department;
  }

}
