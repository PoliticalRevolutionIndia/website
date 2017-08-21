import { Component, OnInit } from '@angular/core';
import { Department } from "../shared/department";
import { DEPARTMENTS } from "../shared/departments"; 

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments : Department[] = DEPARTMENTS;
  selectedDepartment: Department = this.departments[0];
  constructor() { }

  ngOnInit() {
  }

  onSelect(department : Department) {
    this.selectedDepartment = department;
  }

}
